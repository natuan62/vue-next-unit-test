import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// ant
import Antd from "ant-design-vue";
// quasar
import "quasar/dist/quasar.css";
import "ant-design-vue/dist/antd.css";
import iconSet from 'quasar/icon-set/mdi-v4.js';
import {
  Quasar,
  QBtn,
  QInput,
  QCheckbox,
  QTabs,
  QSelect,
  QTab,
  QCard,
  QTable,
} from "quasar";

// equal
// import { Button, Alert, Switch } from 'equal-vue'
// import 'equal-vue/dist/equal.css'

// primeVue
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import "primeflex/primeflex.css";
import "primevue/resources/themes/saga-blue/theme.css";

// element-plus
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

import PButton from "primevue/button";
import PTable from "primevue/datatable";
import PColumn from "primevue/column";
import PDropdown from "primevue/dropdown";
import PInputText from "primevue/inputtext";
import PCard from "primevue/card";
import PTabView from "primevue/tabview";
import PTabPanel from "primevue/tabpanel";

import RenderTime from "@/components/RenderTime.vue";

const app = createApp(App);

app.use(router);

// ant
app.use(Antd);

// equal
// app.use(Button);
// app.use(Alert);
// app.use(Switch);

// quasar
app.use(Quasar, {
  config: {},
  components: { QBtn, QInput, QCheckbox, QTabs, QSelect, QCard, QTab, QTable },
  iconSet,
});

// prime
app.component("PButton", PButton);
app.component("PTable", PTable);
app.component("PColumn", PColumn);
app.component("PDropdown", PDropdown);
app.component("PInputText", PInputText);
app.component("PCard", PCard);
app.component("PTabView", PTabView);
app.component("PTabPanel", PTabPanel);

app.component("render-time", RenderTime);

// element-plus
app.use(ElementPlus);

app.mount("#app");
