import { createRouter, createWebHistory } from "vue-router";

// Single File Components
import home from "@/views/home.vue";

// Auth
import login from "@/views/auth/login.vue";
import register from "@/views/auth/register.vue";

const routeObject = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
];

// Creating Router
const router = createRouter({
  history: createWebHistory(),
  routes: routeObject,
});

export default router;
