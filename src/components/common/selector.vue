<template>
  <div class="selector" @click.stop>
    <div @click="selectShow" class="selector_value">
      <input type="text" readonly v-model="search" ref="input" :placeholder="placeholder" @focus="selectShow" @blur="selectBlur" />
      <i @click.stop="getFocus"></i>
    </div>
    <transition name="fade">
      <div class="select-dropdown" :class="{ top: direction }" v-if="selectState == 1">
        <div class="arrow"></div>
        <ul class="selectorBox">
          <li v-for="(item, index) of selectList" :key="index" @click="assignment(item)">
            {{ item[optionsLabel] || item }}
          </li>
          <li v-if="selectList.length <= 0">无匹配数据</li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectList: [],
      selectState: 0,
      direction: false,
      search: "",
    };
  },
  props: {
    value: {
      default: function () {
        return {};
      },
    },
    options: {
      type: Array,
      default: function () {
        return [];
      },
    },
    optionsLabel: {
      type: String,
      default: function () {
        return "label";
      },
    },
    optionsValue: {
      type: String,
      default: function () {
        return "value";
      },
    },
    show: {
      default: false,
    },
    placeholder: {
      type: String,
      default: function () {
        return "请选择";
      },
    },
  },
  created() {
    this.selectState = this.show;
    if (this.options && Array.isArray(this.options)) {
      this.selectList = this.options;
      if (this.value) {
        this.selectList.forEach(item => {
          if (typeof item == "object") {
            if (item[this.optionsValue] == this.value) {
              this.search = item[this.optionsLabel];
            }
          } else {
            if (item == this.value) {
              this.search = item;
            }
          }
        });
      }
    }
  },
  watch: {
    value(val) {
      if (val) {
        this.selectList.forEach(item => {
          if (typeof item == "object") {
            if (item[this.optionsValue] == val) {
              this.search = item[this.optionsLabel];
            }
          } else {
            if (item == val) {
              console.log("-------", item, val);
              this.search = item;
            }
          }
        });
      }
    },
    options(val) {
      if (val && Array.isArray(val)) {
        this.selectList = val;
      }
    },
    selectState(val) {
      if (val == 1) {
        this.selectStateChange();
      }
    },
    show(val) {
      this.selectState = val;
    },
  },
  methods: {
    //显示
    selectShow() {
      this.selectState = 1;
    },
    //关闭
    selectHide() {
      this.selectState = 0;
    },
    //获取焦点
    getFocus() {
      this.$refs.input.focus();
    },
    //判断显示方向
    selectStateChange() {
      var el = this.$el;
      var top = el.offsetTop;
      var height =
        document.documentElement.clientHeight || document.body.clientHeight;
      var scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (height - (top - scroll) < 300) {
        this.direction = true;
      } else {
        this.direction = false;
      }
    },
    //赋值
    assignment(item) {
      this.selectState = 0;
      if (typeof item == "object") {
        this.search = item[this.optionsLabel];
        if (item[this.optionsValue]) {
          this.$emit("input", item[this.optionsValue]);
        }
      } else {
        this.search = item;
        this.$emit("input", item);
      }
    },
    selectBlur() {
      setTimeout(() => {
        this.$emit("blur");
      }, 100);
    },
  },
  mounted() {
    document.body.onclick = () => {
      this.selectState = 0;
      var children = this.$parent.$parent.$children;
      for (var item of children) {
        if (item.selectState) {
          item.selectState = 0;
        }
        findChildren(item.$children);
      }
      function findChildren(data) {
        for (var itemChild of data) {
          if (itemChild.selectState) {
            itemChild.selectState = false;
          }
          if (itemChild.$children.length > 0) {
            findChildren(itemChild.$children);
          }
        }
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.selector {
  width: 100%;
  white-space: nowrap;
  position: relative;
  background-color: #fff;
  .selector_value {
    height: 100%;
    font-size: rem(14);
    border: 0;
    padding: 0 10px;
    display: flex;
    align-items: center;
    border: solid rem(1) #e5e5e5;
    border-radius: rem(4);
    background-color: #ffffff;
    cursor: pointer;
    input {
      color: #222222;
      font-size: rem(14);
      width: 100%;
      height: rem(58);
      border: 0;
    }
    i {
      background-image: url("../../assets/ic_drop-down.png");
      width: rem(24);
      height: rem(18);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
  .select-dropdown {
    position: absolute;
    left: 0px;
    top: calc(100% + 10px);
    min-width: 100%;
    background-color: #fff;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    z-index: 10;
    &.top {
      bottom: calc(100% + 10px);
      top: initial;
      .arrow {
        bottom: -7px;
        top: initial;
        border-top: 7px solid #eeeeee;
        border-bottom: initial;
        &::after {
          bottom: 2px;
          top: initial;
          border-top: 5px solid #fff;
          border-bottom: initial;
        }
      }
    }
    .arrow {
      position: absolute;
      left: 25px;
      top: -7px;
      width: 0px;
      height: 0px;
      border-right: 7px solid transparent;
      border-left: 7px solid transparent;
      border-bottom: 7px solid #eeeeee;
      &::after {
        position: absolute;
        content: "";
        left: 50%;
        top: 2px;
        width: 0px;
        height: 0px;
        transform: translateX(-50%);
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
        border-bottom: 5px solid #fff;
      }
    }

    ul {
      width: 100%;
      max-height: 257px;
      overflow-y: auto;
      padding: 5px 0;
      /*滚动条样式*/
      &::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 5px;
        /*高宽分别对应横竖滚动条的尺寸*/
      }
      &::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background-color: $themeColor;
      }
      &::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        border-radius: 2px;
        background-color: #fff;
      }
      p {
        font-size: 12px;
        padding: 0px 5px 0px 15px;
        color: #999;
        height: initial;
        line-height: initial;
      }
      li {
        padding: 7px 15px;
        cursor: pointer;
        font-size: 14px;
        color: #333;
        white-space: nowrap;
        &:hover {
          background-color: #eaf4ff;
        }
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
