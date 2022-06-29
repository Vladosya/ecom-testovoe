import Vue from "vue";
import VueRouter from "vue-router";
import { Notification } from "element-ui";

import HomeView from "@/views/HomeView.vue";
import AuthView from "@/views/AuthView.vue";
import AnalyticView from "@/views/AnalyticView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthView,
  },
  {
    path: "/analytic",
    name: "analytic",
    component: AnalyticView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, _, next) => {
  if (!localStorage.getItem("leadhit-site-id")) {
    if (to.name === "analytic") {
      Notification.error({
        title: "Ошибка",
        message: "Вы не авторизованы",
      });
      router.push("/auth");
    } else {
      next();
    }
  }
  next();
});

export default router;
