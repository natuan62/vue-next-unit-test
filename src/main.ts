import { createApp } from "vue";
import App from "./App.vue";
import { Button } from "ant-design-vue";
import router from "./router";
// import 'ant-design-vue/dist/antd.css';

createApp(App)
  .use(router)
  .use(Button)
  .mount("#app");
