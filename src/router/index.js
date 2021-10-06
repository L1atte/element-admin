/*
 * @Author: Latte
 * @Date: 2021-10-06 19:40:14
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-07 03:42:43
 * @FilePath: \element-admin\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		redirect: "/articles/index",
	},
	{
		path: "/articles/index",
		name: "list-article",
		component: () => import("../views/ListArticle.vue"),
	},
	{
		path: "/articles/create",
		name: "create-article",
		component: () => import("../views/CreateArticle.vue"),
	},
	{
		path: "/articles/:id/edit",
		name: "edit-article",
		component: () => import("../views/EditArticle.vue"),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
