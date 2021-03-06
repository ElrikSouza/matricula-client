import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/register.vue"),
  },
  {
    path: "/enroll",
    name: "Matricula",
    component: () => import("../views/enroll.vue"),
  },
  {
    path: "/enroll-edit",
    name: "Editar Matricula",
    component: () => import("../views/enroll-edit.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
