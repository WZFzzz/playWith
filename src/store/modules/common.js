import { getStorage } from '@/plugins/utils';
import i18n from '@/language/index';
export const state = {
  loading: false,
  currentCountry: {
    countryName: "中国大陆",
    countryCode: "CN",
    codename: "China",
    language: "zh",
    phoneCity: "+86",
    flag: "http://qn.kemean.cn/upload/202101/31/1612080252669jq7u9vn3.png"
  }
};
//缓存浏览器的数据名称
const cacheNameList = ["userInfo", "currentCountry"];
let clearTime;
export const mutations = {
  //取出缓存数据（打开APP就取出）
  setCacheData(state) {
    for (let name of cacheNameList) {
      let data = getStorage(name);
      if (data) {
        state[name] = data;
      }
    }
  },
  //加载时动画
  setLoading(state, data) {
    if (state.loading) {
      if (data) {
        clearTime && clearTimeout(clearTime);
        clearTime = setTimeout(function () {
          state.loading = false;
        }, 5000);
      } else {
        clearTime && clearTimeout(clearTime);
        clearTime = setTimeout(function () {
          state.loading = false;
        }, 50);
      }
    } else {
      state.loading = data;
    }
  },
  // 设置国家
  setCurrentCountry(state, data) {
    i18n.locale = data.language;
    state.currentCountry = data;
    localStorage.setItem("currentCountry", JSON.stringify(data))
  }
};
export const actions = {};
