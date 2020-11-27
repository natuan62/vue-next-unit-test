import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/html-table",
    name: "HtmlTable",
    component: () => import("../views/html/Table.vue"),
  },
  {
    path: "/ant-table",
    name: "AntTable",
    component: () => import("../views/ant/Table.vue"),
  },
  {
    path: "/quasar-table",
    name: "QuasarTable",
    component: () => import("../views/quasar/Table.vue"),
  },
  {
    path: "/html-select",
    name: "Htmlselect",
    component: () => import("../views/html/Select.vue"),
  },
  {
    path: "/ant-select",
    name: "Antselect",
    component: () => import("../views/ant/Select.vue"),
  },
  {
    path: "/quasar-select",
    name: "Quasarselect",
    component: () => import("../views/quasar/Select.vue"),
  },
  {
    path: "/html-input",
    name: "Htmlinput",
    component: () => import("../views/html/Input.vue"),
  },
  {
    path: "/ant-input",
    name: "Antinput",
    component: () => import("../views/ant/Input.vue"),
  },
  {
    path: "/quasar-input",
    name: "Quasarinput",
    component: () => import("../views/quasar/Input.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
