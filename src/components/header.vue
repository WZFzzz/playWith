<template>
  <div :class="{head_page:$route.name == 'Recharge'}">
    <!-- 头部 -->
    <header class="header">
      <div class="min_width">
        <div class="logo">
          <img src="../assets/img_logo.png" alt="" />
          <span class="logo_name">早伴专注于高端游戏陪玩</span>
        </div>
        <div class="menu_box">
          <router-link tag="div" class="menu_name" to="/" :class="{ active: $route.name == 'Home'}">首页</router-link>
          <router-link tag="div" class="menu_name" to="/recharge" :class="{ active: $route.name == 'Recharge'}">充值</router-link>

          <!-- <div class="menu_name active">首页</div> -->
          <!-- <div class="menu_name">充值</div> -->
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    line: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["userInfo"]),
  },

  methods: {},
};
</script>
<style lang="scss" scoped>
// .standing {
//   height: rem(200);
//   // background-color: red;
// }
.head_page{
  
background: linear-gradient(315deg, #7C20A4 0%, #3360FC 100%);
}
.header {
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 999;
  .min_width {
    width: 1500px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      display: flex;
      align-items: center;

      img {
        width: 48px;
        height: 48px;
      }
      .logo_name {
        font-size: 16px;
        font-family: myfont;
        color: #06b4fc;
        margin-left: 12px;
      }
    }
    .menu_box {
      display: flex;
      font-size: 16px;
      color: #06b4fc;
      .menu_name {
        cursor: pointer;
        margin-left: 30px;
        height: 40px;
        width: 50px;
         display: flex;
        align-items: center;
        justify-content: center;
      }
      .active {
        cursor: pointer;
        position: relative;

        &::after {
          position: absolute;
          content: "";
          top: 58px;
          width: 26px;
          height: 2px;
          background: #06b4fc;
        }

        // border-bottom: 1px solid #ffffff;
      }
    }
  }
}
</style>
