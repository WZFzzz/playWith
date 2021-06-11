import Vue from 'vue';
import Router from 'vue-router';
import {
	getStorage
} from '@/plugins/utils';
Vue.use(Router);
import store from '@/store';

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/home.vue"),
  },
  {
    path: "/homeMb",
    name: "HomeMb",
    component: () => import("@/views/home/homeMb.vue"),
  },
  {
    path: "/recharge",
    name: "Recharge",
    component: () => import("@/views/home/recharge.vue"),
  },
];
const router = new Router({
	history: "history",
	routes
});
// 路由守卫
let inheritPages = ['AuctionHall'];
router.beforeEach((to, from, next) => {
	// 拍卖页面继承当前页面头部的数据
	if (inheritPages.includes(to.name) && inheritPages.includes(from.name)) {
		let keys = Object.keys(from.query);
		let url = "";
		let state = false;
		keys.forEach((key, index) => {
			if (!['key'].includes(key) && !to.query[key]) {
				state = true;
				if (index == 0) {
					url = key + "=" + from.query[key];
				} else {
					url += "&" + key + "=" + from.query[key];
				}
			}
		});
		if (state) {
			if (to.fullPath) {
				if (to.fullPath.indexOf("?") >= 0) {
					next(to.fullPath + "&" + url);
				} else {
					next(to.fullPath + "?" + url);
				}
			}
		}

	}
	// 让页面回到顶部
	document.documentElement.scrollTop = 0;
	if (to.meta.auth) {
		let user_token = localStorage.getItem("user_token") || sessionStorage.getItem("user_token");
		if (user_token) {
			next();
		} else {
			next('/login');
		}
	} else {
		next();
	}
});
export default router;
