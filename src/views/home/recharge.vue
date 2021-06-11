<template>
  <div class="page">
    <z-header></z-header>
    <div class="min_width">
      <div class="download_page">
        <div class="info_box">
          <!-- phone -->
          <div class="input_box">
            <label class="label">手机号</label>
            <div class="input_tag_box">
              <div class="input_info">
                <input type="text" placeholder="请输入充值手机号" />
              </div>
              <div class="tag">*点击确定后，请确认头像和昵称</div>
            </div>
            <button class="phone_btn" @click="onComfirm">确定</button>
          </div>
          <!-- recharge -->
          <div class="recharge_box">
            <label class="label">充值金额</label>
            <div>
              <div class="recharge_info">
                <div class="re_item" :class="{active:reIndex == 1}" @click="reIndex = 1">
                  <img src="../../assets/ic_gold.png" alt="" />
                  <div>20金币</div>
                  <span>20元</span>
                </div>
                <div class="re_item" :class="{active:reIndex == 2}" @click="reIndex = 2">
                  <img src="../../assets/ic_gold.png" alt="" />
                  <div>400金币</div>
                  <span>400元</span>
                </div>
                <div class="re_item" :class="{active:reIndex == 3}" @click="reIndex = 3">
                  <img src="../../assets/ic_gold.png" alt="" />
                  <div>1000金币</div>
                  <span>1000元</span>
                </div>
                <div class="re_item" :class="{active:reIndex == 4}" @click="reIndex = 4">
                  <img src="../../assets/ic_gold.png" alt="" />
                  <div>2000金币</div>
                  <span>2000元</span>
                </div>
                <div class="re_item" :class="{active:reIndex == 5}" @click="reIndex = 5">
                  <img src="../../assets/ic_gold.png" alt="" />
                  <div>5000金币</div>
                  <span>5000元</span>
                </div>
                <div class="re_item" :class="{active:reIndex == 6}" @click="reIndex = 6">
                  <img src="../../assets/ic_gold.png" alt="" />
                  <div>10000金币</div>
                  <span>10000元</span>
                </div>
              </div>
              <div class="input_tag_box">
                <div class="input_info">
                  <input type="number" placeholder="请输入充值金额" />
                  <span>元</span>
                </div>
                <div class="tag">*1元=1金币，购买金币后不可提现</div>
              </div>
            </div>
          </div>
        </div>
        <div class="info_box">
          <div class="down_way_box">
            <label class="label">充值方式</label>
            <div class="input_tag_box">
              <div class="down_way">
                <div class="btn">
                  <span class="ios">微信</span>
                </div>
                <div class="btn">
                  <span class="android">支付宝</span>
                </div>
              </div>
              <div class="tag">
                *温馨提示：切勿轻信刷单、低价充值等类似得言论，谨防上当受骗
              </div>
            </div>
            <button class="recharge_btn">立即充值</button>
          </div>
        </div>
      </div>
    </div>
    <z-footer></z-footer>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      reIndex:0
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  created() {
  },
  mounted() {},
  methods: {
    onPageJump(url) {
      this.$router.push(url);
    },
    onComfirm(){
      this.$prompt('该手机号码不存在');
    }
  },
};
</script>

<style lang="scss" scoped>
.page {
  // background-image: url("http://qn.kemean.cn/upload/202102/04/1612408270171vkjf43h6.png");
  background-color: #ffffff;
  width: 100%;
  height: 1080px;
  .download_page {
    min-height: 920px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    min-width: 1500px;
    width: 1500px;
    margin: 0 auto;
    .info_box {
      width: 100%;
      border-radius: 4px;
      border: 1px solid #c7c8cb;
      padding: 40px;
      margin-bottom: 20px;
      padding-left: 324px;
      .label {
        margin-top: 10px;
        width: 60px;
        text-align: right;
        font-size: 14px;
        color: #333333;
      }
      .recharge_btn {
        width: 86px;
        height: 40px;
        background: #466bfe;
        box-shadow: 0px 2px 4px 0px rgba(80, 100, 236, 0.33);
        border-radius: 4px;
        margin-left: 280px;
        font-size: 14px;
        color: #ffffff;
      }
      .recharge_btn:hover {
        transition: all 0.4s;
        background: #143bd7;
      }
      .phone_btn {
        width: 86px;
        height: 40px;
        background: #466bfe;
        box-shadow: 0px 2px 4px 0px rgba(80, 100, 236, 0.33);
        border-radius: 4px;
        margin-left: 40px;
        font-size: 14px;
        color: #ffffff;
      }
      .input_box {
        display: flex;
      }
      .down_way_box {
        display: flex;
        .down_way {
          // margin-left: 40px;
          display: flex;

          .btn {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            // padding: 0 30px;
            width: 158px;
            height: 40px;
            background: #ffffff;
            border-radius: 4px;
            border: 1px solid #cdced5;
            text-align: center;
            margin-right: 20px;
            .ios {
              display: flex;
              align-items: center;
              &::before {
                content: "";
                @include bis("../../assets/ic_weixin_c.png");
                margin-right: 16px;
                width: 24px;
                height: 24px;
              }
            }
            .android {
              display: flex;
              align-items: center;
              &::before {
                content: "";
                @include bis("../../assets/ic_zhifubao.png");
                margin-right: 16px;
                width: 24px;
                height: 24px;
              }
            }
            span {
              color: #333333;
              font-size: 14px;
            }
          }
          // 鼠标悬浮效果
          .btn:hover,
          active {
            transition: all 0.4s;
            background: #466bfe;
            border-radius: 6px;
            .ios {
              &::before {
                content: "";
                @include bis("../../assets/ic_weixin_white.png");
                margin-right: 16px;
                width: 24px;
                height: 24px;
              }
            }
            .android {
              &::before {
                content: "";
                @include bis("../../assets/ic_zhifubao_white.png");
                margin-right: 16px;
                width: 24px;
                height: 24px;
              }
            }
            span {
              color: #fff;
            }
          }
        }
      }
      .recharge_box {
        margin-top: 30px;
        display: flex;
        .recharge_info {
          margin-top: 10px;
          margin-left: 40px;
          margin-bottom: 20px;
          width: 600px;
          display: flex;
          flex-wrap: wrap;

          .re_item {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 186px;
            height: 100px;
            background: rgba($color: #375cf7, $alpha: 0.1);
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            border: 1px solid rgba($color: #cdced5, $alpha: 0.1);
            margin-right: 20px;
            margin-bottom: 20px;
            &:nth-child(3n) {
              margin-right: 0px;
            }
            img {
              width: 26px;
              height: 26px;
            }
            div {
              margin-top: 4px;
              font-size: 18px;
              font-weight: 500;
              color: #365df8;
            }
            span {
              margin-top: 4px;
              font-size: 14px;
              color: #666666;
            }
          }
          .active {
            border: 1px solid #375cf7;
          }
        }
      }
      .input_tag_box {
        margin-left: 40px;
        .tag {
          margin-top: 10px;
          font-size: 12px;
          font-weight: 400;
          color: #999999;
        }
      }
      .input_info {
        width: 598px;
        height: 40px;
        background: #ffffff;
        border-radius: 4px;
        border: 1px solid #cdced5;
        display: flex;
        align-items: center;
        padding: 0 20px;
        input {
          height: 40px;
          background-color: transparent;
          flex: 1;
          border: none;
          font-size: 14px;
        }
      }
    }
  }
  @font-face {
    font-family: myfont;
    src: url("~@/font/YouSheBiaoTiHei.ttf");
  }
}
</style>
