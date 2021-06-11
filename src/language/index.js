import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
export const countryList = [
    {
        countryName: "中国大陆",
        countryCode: "CN",
        codename: "China",
        language: "zh",
        phoneCity: "+86",
        flag: "http://qn.kemean.cn/upload/202101/31/1612080252669jq7u9vn3.png"
    },
    {
        countryName: "中国台湾",
        countryCode: "TW",
        codename: "Taiwan",
        language: "CN",
        phoneCity: "+886",
        flag: "http://qn.kemean.cn/upload/202101/31/1612080252669jq7u9vn3.png"
    },
    {
        countryName: "中国香港",
        countryCode: "HK",
        codename: "Hongkong",
        language: "CN",
        phoneCity: "+852",
        flag: "http://qn.kemean.cn/upload/202101/31/1612080275770uux8wzkd.png"
    },
    {
        countryName: "美国",
        countryCode: "US",
        codename: "United States of America",
        language: "en",
        phoneCity: "+001",
        flag: "http://qn.kemean.cn/upload/202101/31/16120802369107zi59lk7.png"
    },
];
// 获取浏览器语言
let browserLanguage = (navigator.language || navigator.browserLanguage).toLowerCase();
let languageName = 'zh';
if (browserLanguage.indexOf('zh') >= 0) {
    // 假如浏览器语言是中文
    languageName = 'zh';
} else if (browserLanguage.indexOf('en') >= 0) {
    // 假如浏览器语言是英文
    languageName = 'en';
}
let currentCountry = localStorage.getItem('currentCountry');
if (currentCountry) {
    currentCountry = JSON.parse(currentCountry);
    languageName = currentCountry.language
}
const i18n = new VueI18n({
    locale: languageName, // 定义默认语言为中文 
    messages: {
        'zh': require('./modules/zh.json'),
        'en': require('./modules/en.json')
    }
});
export default i18n