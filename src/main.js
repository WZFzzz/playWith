import Vue from 'vue'
import App from './App.vue'
import install from "@/plugins/install";
import store from "@/store";
import zHeader from "@/components/header";
import zFooter from "@/components/footer";
import selector from "@/components/common/selector";
import router from './router'
import i18n from '@/language/index'
import '@/plugins/rem'
import 'swiper/swiper-bundle.css'
// 全局组件
Vue.use(install);
Vue.config.productionTip = false
new Vue({
  store,
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');
Vue.component("z-header", zHeader);
Vue.component("z-footer", zFooter);
Vue.component("z-selector", selector);
