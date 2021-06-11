<template>
  <div class="page">
    <!-- <img class="bg_img" src="@/assets/bg.png" alt=""> -->
    <z-header></z-header>
    <div class="min_width">
      <div class="download_page">
        <div class="left">
          <div class="tag_box">
            <div class="box1">高端大神陪玩</div>
            <div class="box2">休闲美女陪玩</div>
            <div class="box3">主流竞技游戏</div>
            <div class="box4">活跃生活动态</div>
            <div class="box5">智能在线匹配</div>
          </div>
        </div>
        <div class="right">
          <div class="down_num">
            <div class="tit">一款专注</div>
            <div class="tit">高端游戏陪练APP</div>
            <div class="num_name">累计下载量:</div>
            <div class="num">{{ num }}</div>
          </div>
          <div class="down_way">
            <!-- ios -->
            <div class="btn_box">
              <div class="btn big ios_btn">
                <span class="ios">App Store下载</span>
              </div>
              <div class="code_box code_ios">
                <img
                  class="ios_img"
                  src="http://qn.kemean.cn/upload/202102/07/1612676541586d3crra6r.png"
                />
              </div>
            </div>
            <!-- android -->
            <div class="btn_box">
              <div class="code_box code_android">
                <img
                  class="android_img"
                  src="http://qn.kemean.cn/upload/202102/07/1612677420911all4lv1v.png"
                />
              </div>
              <div class="btn big" style="background: #5dd680">
                <span class="android">Android下载</span>
              </div>
            </div>
            <!-- <div class="btn small">
              <span class="qr"></span>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <z-footer></z-footer>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      num: 1283356, //数字
      time: 2, //时间
    };
  },
  mounted() {
    this.numberGrow();

    console.log("111");
    if (this._isMobile()) {
      console.log("222");
      this.$router.replace("/homeMb");
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
      let time = this.num;
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
    transform: translate(240px, 80px);
  }

  40% {
    transform: translate(280px, 220px);
  }

  60% {
    transform: translate(220px, 420px);
  }

  80% {
    transform: translate(-20px, 300px);
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
    transform: translate(40px, 140px);
  }

  40% {
    transform: translate(-20px, 340px);
  }

  60% {
    transform: translate(-260px, 220px);
  }

  80% {
    transform: translate(-240px, -80px);
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
    transform: translate(-60px, 200px);
  }

  40% {
    transform: translate(-300px, 80px);
  }

  60% {
    transform: translate(-280px, -220px);
  }

  80% {
    transform: translate(40px, -140px);
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
    transform: translate(20px, -300px);
  }

  40% {
    transform: translate(250px, -220px);
  }

  60% {
    transform: translate(300px, -80px);
  }

  80% {
    transform: translate(240px, 120px);
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
    transform: translate(-240px, -120px);
  }

  40% {
    transform: translate(-220px, -420px);
  }

  60% {
    transform: translate(100px, -340px);
  }

  80% {
    transform: translate(60px, -200px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

.page {
  position: relative;
  background: linear-gradient(315deg, #7c20a4 0%, #3360fc 100%);
  background-image: url("../../assets/bg.png");
  // background-image: url("http://qn.kemean.cn/upload/202102/04/1612408270171vkjf43h6.png");
  // min-width: 1920px;
  background-size: 1920px 1080px;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: none;
  width: 100%;
  height: 1080px;
  .bg_img {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 1080px;
    z-index: 999;
  }

  .download_page {
    min-height: 920px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 73px 0 20px 0;
    min-width: 1500px;
    width: 1500px;
    margin: 0 auto;
    .left {
      flex: 1;
      display: flex;
      flex-direction: column;
      .tag_box {
        position: relative;
        width: 600px;
        height: 600px;
        .box1 {
          position: absolute;
          left: 100px;
          top: 50px;
          color: #35a5c9;
          background: #fff;
          border-radius: 12px;
          box-shadow: 2px 2px 3px #eee;
          padding: 10px 20px;
          font-size: 26px;
          animation: move1 13s infinite ease;
        }
        .box2 {
          position: absolute;
          left: 340px;
          top: 150px;
          color: #fff;
          background: #4abbfb;
          border-radius: 12px;
          box-shadow: 2px 2px 3px #4ac3fb;
          padding: 10px 20px;
          font-size: 20px;
          animation: move2 13s infinite ease-in-out;
        }
        .box3 {
          position: absolute;
          left: 390px;
          top: 270px;
          color: #fff;
          background: #4abbfb;
          border-radius: 12px;
          box-shadow: 2px 2px 3px #4ac3fb;
          padding: 10px 20px;
          font-size: 26px;
          animation: move3 13s infinite ease-in;
        }
        .box4 {
          position: absolute;
          left: 80px;
          top: 350px;
          color: #fff;
          background: #4abbfb;
          border-radius: 12px;
          box-shadow: 2px 2px 3px #4ac3fb;
          padding: 10px 20px;
          font-size: 22px;
          animation: move4 13s infinite linear;
        }
        .box5 {
          position: absolute;
          left: 300px;
          top: 450px;
          color: #35a5c9;
          background: #fff;
          border-radius: 12px;
          box-shadow: 2px 2px 3px #eee;
          padding: 10px 20px;
          font-size: 26px;
          animation: move5 13s infinite;
        }
      }
    }
    .right {
      flex: 1;
      height: 700px;
      margin-left: 100px;
      .down_num {
        .tit {
          color: #06b4fc;
          font-size: 56px;
          font-weight: bold;
        }
        .num_name {
          color: #449bbe;
          font-size: 26px;
          margin-top: 80px;
        }
        .num {
          color: #06b4fc;
          font-size: 78px;
        }
      }
      .down_way {
        display: flex;
        margin-top: 80px;
        margin-bottom: 80px;
        .btn_box {
          position: relative;
          .code_box {
            position: absolute;
            top: -180px;
            // left: 15px;
            background-color: rgba($color: #ffffff, $alpha: 0.7);
            border-radius: 8px;
            width: 166px;
            height: 166px;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              // margin-left: 15px;
              width: 135px;
              height: 135px;
              border-radius: 4px;
            }
          }
          .code_ios {
            display: none;
          }
          .code_android {
            display: none;
          }
        }
        .btn_box:hover .code_ios {
          display: flex;
        }
        .btn_box:hover .code_android {
          display: flex;
        }
        .btn {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 58px;
          background: #000;
          border-radius: 6px;
          // border: 1px solid #000;
          text-align: center;
          margin-right: 20px;
          .code_ios {
            display: block;
          }
          .ios {
            display: flex;
            align-items: center;
            &::before {
              content: "";
              @include bis("../../assets/ic_ios_white.png");
              margin-right: 16px;
              width: 39px;
              height: 39px;
            }
          }
          .android {
            display: flex;
            align-items: center;
            &::before {
              content: "";
              @include bis("../../assets/ic_android_white.png");
              margin-right: 16px;
              width: 39px;
              height: 39px;
            }
          }
          .qr {
            display: flex;
            align-items: center;
            &::before {
              content: "";
              @include bis("../../assets/ic_qr_white.png");
              width: 39px;
              height: 39px;
            }
          }
          img {
            width: 39px;
            height: 39px;
          }
          span {
            color: #ffffff;
            font-size: 16px;
          }
        }

        // 鼠标悬浮效果
        .btn:hover {
          transition: all 0.4s;
          background: #ffffff !important;
          border-radius: 6px;
          border: 1px solid #000;

          .ios {
            &::before {
              content: "";
              @include bis("../../assets/ic_ios.png");
              margin-right: 16px;
              width: 39px;
              height: 39px;
            }
          }
          .android {
            &::before {
              content: "";
              @include bis("../../assets/ic_android.png");
              margin-right: 16px;
              width: 39px;
              height: 39px;
            }
          }
          .qr {
            &::before {
              content: "";
              @include bis("../../assets/ic_qr.png");
              width: 39px;
              height: 39px;
            }
          }
          span {
            color: #3053fd;
          }
        }
        .big {
          width: 200px;
        }
        .small {
          width: 58px;
        }
      }
      .phone {
        width: 405px;
        height: 812px;
      }
    }
  }
  @font-face {
    font-family: myfont;
    src: url("~@/font/YouSheBiaoTiHei.ttf");
  }
}
</style>
