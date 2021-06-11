import {
  prompt,
  $alert
} from '@/plugins/utils';
import base from '@/config/baseUrl';
import request from '@/config/requestConfig';
import store from '@/store';
import router from '@/router';
import CryptoJS from 'crypto-js'
export default {
  install: (app) => {
    /**
     * 配置的全局
     */
    app.prototype.$base = base;
    /**
     * 全局请求配置
     */
    app.prototype.$http = request;

    /**
     * 消息提示
     */
    app.prototype.$prompt = prompt;
    /**
     * 确认框 type = 1
     * 提示框 type = 2
     * 输入框 type = 3
     * 用法：
     * this.$alert("您还未登录，请登录", {}, res => {
     *    console.log(res); 
     *    //res.confirm 是否点击确认
     * });
     */
    app.prototype.$alert = $alert;


    app.prototype.judgeLogin = function (callback) {
      let user_token = localStorage.getItem("user_token") || sessionStorage.getItem("user_token");
      if (user_token) {
        callback && callback();
      } else {
        router.push('/login');
      }
    }

    app.prototype.encrypt = function (word) {
      let keyStr = 'F3866E1AF3165AB2';
      var key = CryptoJS.enc.Utf8.parse(keyStr);//Latin1 w8m31+Yy/Nw6thPsMpO5fg==
      var srcs = CryptoJS.enc.Utf8.parse(word);
      var encrypted = CryptoJS.AES.encrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
      return encrypted.toString();
    }
    //金额过滤
    app.filter('money', function (val) {
      console.log(val);
      if (val) {
        let value = Math.round(parseFloat(val) * 100) / 100;
        let valMoney = value.toString().split(".");
        if (valMoney.length == 1) {
          value = value.toString() + ".00";
          return value;
        }
        if (valMoney.length > 1) {
          if (valMoney[1].length < 2) {
            value = value.toString() + "0";
          }
          return value;
        }
        return value;
      } else {
        return "0.00";
      }
    })
    /**
     * 时间戳转换为想要的时间格式
     */
    // app.filter("format", function (value, format) {
    //   return formatTime(value, format);
    // });
    /**
     * 时间转换为XX前
     */
    // app.filter("getDateDiff", function (value) {
    //   return clickDateDiff(value);
    // });
    /**
     * 金额保留两位
     */
    // app.filter("decimal", function (value) {
    //   return parseFloat(value).toFixed(2);
    // });
  }
}


