import {RouteRecordRaw} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import AdminView from "@/views/AdminView.vue";

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '游览题目',
        component: HomeView
    },
    {
        path: "/admin",
        name: "管理员可见",
        component: AdminView,
        meta: {
            access: "canAdmin",
        },
    },
    {
        path: "/noAuth",
        name: "无权限",
        component: NoAuthView,
    },

    {
        path: '/',
        name: '',
        component: HomeView
    },
    {
        path: '/about',
        name: '关于我的',

        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]
