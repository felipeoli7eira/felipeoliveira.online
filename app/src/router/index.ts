import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/index.vue"),
    meta: {},
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About/index.vue"),
    meta: {},
  },
  {
    path: "/jobs",
    name: "jobs",
    component: () => import("../views/Jobs/index.vue"),
    meta: {},
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
