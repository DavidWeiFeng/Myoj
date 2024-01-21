import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import AdminView from "@/views/AdminView.vue";
import ACCESS_ENUM from "@/access/accessEnum";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "游览题目",
    component: HomeView,
  },
  {
    path: "/admin",
    name: "管理员可见",
    component: AdminView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/noAuth",
    name: "无权限",
    component: NoAuthView,
  },

  {
    path: "/hide",
    name: "隐藏界面",
    component: HomeView,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/about",
    name: "关于我的",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];
