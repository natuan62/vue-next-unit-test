import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // html
  {
    path: "/html-table",
    name: "HtmlTable",
    component: () => import("../views/html/Table.vue"),
  },
  {
    path: "/html-select",
    name: "Htmlselect",
    component: () => import("../views/html/Select.vue"),
  },
  {
    path: "/html-input",
    name: "Htmlinput",
    component: () => import("../views/html/Input.vue"),
  },
  {
    path: "/html-rowcol",
    name: "Htmlrowcol",
    component: () => import("../views/html/RowCol.vue"),
  },
  {
    path: "/html-button",
    name: "HtmlButton",
    component: () => import("../views/html/Button.vue"),
  },
  {
    path: "/html-card",
    name: "Htmlcard",
    component: () => import("../views/html/Card.vue"),
  },
  {
    path: "/html-tabs",
    name: "Htmltabs",
    component: () => import("../views/html/Tabs.vue"),
  },
  // ant
  {
    path: "/ant-table",
    name: "AntTable",
    component: () => import("../views/ant/Table.vue"),
  },
  {
    path: "/ant-select",
    name: "Antselect",
    component: () => import("../views/ant/Select.vue"),
  },
  {
    path: "/ant-input",
    name: "Antinput",
    component: () => import("../views/ant/Input.vue"),
  },
  {
    path: "/ant-rowcol",
    name: "Antrowcol",
    component: () => import("../views/ant/RowCol.vue"),
  },
  {
    path: "/ant-button",
    name: "AntButton",
    component: () => import("../views/ant/Button.vue"),
  },
  {
    path: "/ant-card",
    name: "Antcard",
    component: () => import("../views/ant/Card.vue"),
  },
  {
    path: "/ant-tabs",
    name: "Anttabs",
    component: () => import("../views/ant/Tabs.vue"),
  },
  // primeVue
  {
    path: "/prime-table",
    name: "primeTable",
    component: () => import("../views/prime/Table.vue"),
  },
  {
    path: "/prime-select",
    name: "primeselect",
    component: () => import("../views/prime/Select.vue"),
  },
  {
    path: "/prime-input",
    name: "primeinput",
    component: () => import("../views/prime/Input.vue"),
  },
  {
    path: "/prime-rowcol",
    name: "primerowcol",
    component: () => import("../views/prime/RowCol.vue"),
  },
  {
    path: "/prime-button",
    name: "primeButton",
    component: () => import("../views/prime/Button.vue"),
  },
  {
    path: "/prime-card",
    name: "primecard",
    component: () => import("../views/prime/Card.vue"),
  },
  {
    path: "/prime-tabs",
    name: "primetabs",
    component: () => import("../views/prime/Tabs.vue"),
  },
  // quasar
  {
    path: "/quasar-table",
    name: "QuasarTable",
    component: () => import("../views/quasar/Table.vue"),
  },
  {
    path: "/quasar-select",
    name: "Quasarselect",
    component: () => import("../views/quasar/Select.vue"),
  },
  {
    path: "/quasar-input",
    name: "Quasarinput",
    component: () => import("../views/quasar/Input.vue"),
  },
  {
    path: "/quasar-rowcol",
    name: "Quasarrowcol",
    component: () => import("../views/quasar/RowCol.vue"),
  },
  {
    path: "/quasar-button",
    name: "QuasarButton",
    component: () => import("../views/quasar/Button.vue"),
  },
  {
    path: "/quasar-card",
    name: "Quasarcard",
    component: () => import("../views/quasar/Card.vue"),
  },
  {
    path: "/quasar-tabs",
    name: "Quasartabs",
    component: () => import("../views/quasar/Tabs.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
