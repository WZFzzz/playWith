<template>
  <!-- 尾部 -->
  <footer class="footer min_width">
    <div class="page_center">
      <div class="com_box">
        <span>公司网址：<a href="http://www.zaopw.com " target="_blank">http://www.zaopw.com</a></span>
        <span>地址：深圳市福田区沙头街道天安社区泰然八路深业泰然大厦4B04D6</span>
        <span>网站备案：<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">粤ICP备2021015484号</a></span>
      </div>
      <div class="info">健康游戏公告：抵制不良游戏，拒绝盗版游戏；注意自我保护，谨防受骗上当；适度游戏益脑，沉迷游戏伤身；合理安排时间，享受健康生活</div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.footer {
  background-color: transparent;
  height: 80px;
  // padding: 5px 0 45px 0;
  width: 100%;
  .page_center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .com_box{
      padding: 10px;
      span{
        margin: 0 10px;
        font-size: 12px;
        color: #333333;
      }
    }
    .info{
        font-size: 12px;
        color: rgba($color: #333333, $alpha:0.5);
    }
  }
}

</style>
