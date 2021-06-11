<template>
  <div class="page">
    <!-- <div class="header_box">
      <img src="../../assets/img_logo.png" alt="" />
      <span class="logo_name">早伴专注于高端游戏陪玩</span>
    </div> -->
    <div class="box">
      <div class="title">一款专注高端游戏陪练APP</div>
       <div class="down_num">
        <div class="num_name">累计下载量:</div>
        <div class="num">{{num}}</div>
      </div>
      <div class="tag_box">
        <div class="box1">
          高端大神陪玩
        </div>
        <div class="box2">
          休闲美女陪玩
        </div>
        <div class="box3">
          主流竞技游戏
        </div>
        <div class="box4">
          智能在线匹配
        </div>
        <div class="box5">
          活跃生活动态
        </div>
      </div>
     
      <div class="down_way">
        <div class="btn big">
          <span class="ios">App Store下载</span>
        </div>
        <div class="btn big" style="margin-left: 15px;background: #5bd683">
          <span class="android">Android下载</span>
        </div>
        <!-- <div class="btn big">
          <span class="qr"></span>
        </div> -->
      </div>
    </div>
    <div class="bottom_box">
      <div class="com_box">
        <span
          >网站备案：<a
            href="https://beian.miit.gov.cn/#/Integrated/index"
            target="_blank"
            >粤ICP备2021015484号</a
          ></span
        >
        <span>公司网址：http://www.zaopw.com</span>
        
        <span style="margin-top: 10px">地址：深圳市福田区沙头街道天安社区泰然八路深业泰然大厦4B04D6</span
        >
      </div>
      <div class="info">
        健康游戏公告：抵制不良游戏，拒绝盗版游戏；注意自我保护，谨防受骗上当；适度游戏益脑，沉迷游戏伤身；合理安排时间，享受健康生活
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      num: 1283356,
      time: 2,
    };
  },
  mounted() {
    this.numberGrow();
      console.log("111")
    if (!this._isMobile()){
      console.log("222")
      this.$router.replace("/");
    }
  },
  computed: {},
  created() {
    // this.pageData();
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    onPageJump(url) {
      this.$router.push(url);
    },
    // 计数器
    numberGrow() {
      let time = this.num
      let step = parseInt((time * 10) / (this.time * 1000));
      let current = 0;
      let start = 0;
      let t = setInterval(() => {
        start += step;
        this.num = start;
        if (start > time) {
          clearInterval(t);
          this.num = time;
          t = null;
        } 
      }, 10);
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes move1 {
  0% {
    transform: translate(0px, 0px);
  }

  20% {
    transform: translate(190px, 30px);
  }

  40% {
    transform: translate(200px, 150px);
  }

  60% {
    transform: translate(0px, 200px);
  }

  80% {
    transform: translate(-20px, 90px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}
@keyframes move2 {
  0% {
    transform: translate(0px, 0px);
  }

  20% {
    transform: translate(10px, 120px);
  }

  40% {
    transform: translate(-190px, 170px);
  }

  60% {
    transform: translate(-210px, 60px);
  }

  80% {
    transform: translate(-190px, -30px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}
@keyframes move3 {
  0% {
    transform: translate(0px, 0px);
  }

  20% {
    transform: translate(-200px, 50px);
  }

  40% {
    transform: translate(-220px, -60px);
  }

  60% {
    transform: translate(-200px, -150px);
  }

  80% {
    transform: translate(-10px, -120px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}
@keyframes move4 {
  0% {
    transform: translate(0px, 0px);
  }

  20% {
    transform: translate(-20px, -110px);
  }

  40% {
    transform: translate(0px, -200px);
  }

  60% {
    transform: translate(190px, -170px);
  }

  80% {
    transform: translate(200px, -50px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}
@keyframes move5 {
  0% {
    transform: translate(0px, 0px);
  }

  20% {
    transform: translate(20px, -90px);
  }

  40% {
    transform: translate(210px, -60px);
  }

  60% {
    transform: translate(220px, 60px);
  }

  80% {
    transform: translate(20px, 110px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}
.page {
  // background-image: url("http://qn.kemean.cn/upload/202102/04/1612408270171vkjf43h6.png");
  // background-image: url("http://qn.kemean.cn/upload/202102/05/1612514480515wnzsra0z.png");
  background-size: 100% 100%;
  background-image: url('../../assets/bg.jpg');
  background-repeat: no-repeat;
  // background-position: 100% 100%;
  object-fit: none;
  min-height: 100vh;

  .header_box {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 36px;
      height: 36px;
    }
    .logo_name {
      font-size: 16px;
      font-family: myfont;
      color: #ffffff;
      margin-left: 12px;
    }
  }

  .box {
    // margin-top: 24px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .title {
      // font-family: myfont;
      font-size: 24px;
      color: #0ab1f2;
      font-weight: bold;
      margin-top: 30px;
    }
    .tag_box {
      width: 100%;
      // height: 280px;
      // background: #3a96fd;
      // border-radius: 8px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      position: relative;
      .box1{
        position: absolute;
        left: 40px;
        top: 15px;
        color: #59d2fc;
        background: #fff;
        border-radius: 8px;
        padding: 10px;
        box-shadow: 0px 0px 10px #ddd;
        animation: move1 10s infinite ease;
      }
      .box2{
        position: absolute;
        right: 40px;
        top: 45px;
        color: #fff;
        background: #59d2fc;
        border-radius: 8px;
        padding: 10px;
        box-shadow: 0px 0px 10px #ddd;
        animation: move2 10s infinite ease-in-out;
      } 
      .box3{
        position: absolute;
        right: 30px;
        top: 160px;
        color: #fff;
        background: #59d2fc;
        border-radius: 8px;
        padding: 10px;
        box-shadow: 0px 0px 10px #ddd;
        animation: move3 10s infinite;
      }
      .box4{
        position: absolute;
        left: 40px;
        top: 210px;
        color: #59d2fc;
        background: #fff;
        border-radius: 8px;
        padding: 10px;
        font-size: 16px;
        box-shadow: 0px 0px 10px #ddd;
        animation: move4 10s infinite ease-in;
      }
     .box5{
        position: absolute;
        left: 10px;
        top: 100px;
        color: #fff;
        background: #59d2fc;
        border-radius: 8px;
        padding: 10px;
        box-shadow: 0px 0px 10px #ddd;
        animation: move5 10s infinite linear;
      }
    }
    .down_num {
      span {
        font-size: 12px;
        font-weight: 400;
        color: #ffffff;
      }
      .num_name {
        color: #0ab1f2;
        margin-top: 20px;
      }
      .num {
        // font-family: myfont;
        color: #0ab1f2;
        font-size: 48px;
      }
    }
    .down_way {
      position: absolute;
      bottom: 140px;
      display: flex;
      // flex-direction: column;
      margin-top: 18px;
      .btn {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        // padding: 0 30px;
        margin-bottom: 20px;
        height: 40px;
        background: #000;
        border-radius: 6px;
        text-align: center;
        .ios {
          display: flex;
          align-items: center;
          &::before {
            content: "";
            @include bis("../../assets/ic_ios_white.png");
            margin-right: 8px;
            width: 30px;
            height: 30px;
          }
        }
        .android {
          display: flex;
          align-items: center;
          &::before {
            content: "";
            @include bis("../../assets/ic_android_white.png");
            margin-right: 8px;
            width: 30px;
            height: 30px;
          }
        }
        .qr {
          display: flex;
          align-items: center;
          &::before {
            content: "";
            @include bis("../../assets/ic_qr_white.png");
            width: 30px;
            height: 30px;
          }
        }

        span {
          color: #ffffff;
          font-size: 12px;
          font-weight: 500;
        }
      }
      .big {
        width: 150px;
      }
      .small {
        width: 58px;
      }
    }
  }
  .bottom_box {
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    .com_box {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 0;

      span {
        // margin: 0 10px;
        font-size: 12px;
        color: #ffffff;
        a {
          color: #ffffff;
        }
      }
    }
    .info {
      font-size: 12px;
      color: #fff;
    }
  }
}
</style>
