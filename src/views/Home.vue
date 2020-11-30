<template>
  <div class="home">
    <p>Click each button to display the corresponding component.</p>
    <button
      class="btn"
      :class="{ 'btn-clicked': clickedButton === type.link }"
      v-for="(type, index) in types"
      :key="type.id"
      @click="renderByName(type.link)"
    >
      {{ index + 1 }}. {{ type.name }}
    </button>
    <p v-if="clickedButton">
      *** Clicked [<b>{{ clickedButton }}</b
      >] button.
    </p>

    <div class="row" v-if="clickedButton === 'table'">
      <div class="column">
        <p><b>HTML</b></p>
        <html-table />
      </div>
      <div class="column">
        <p><b>Ant design</b></p>
        <ant-table />
      </div>
      <div class="column">
        <p><b>Quasar Framework</b></p>
        <quasar-table />
      </div>
      <div class="column">
        <p><b>PrimeVue Framework</b></p>
        <prime-table />
      </div>
      <div class="column">
        <p><b>Element-plus Framework</b></p>
        <element-table />
      </div>
    </div>

    <div class="row" v-if="clickedButton === 'select'">
      <div class="column">
        <p><b>HTML</b></p>
        <html-select />
      </div>
      <div class="column">
        <p><b>Ant design</b></p>
        <ant-select />
      </div>
      <div class="column">
        <p><b>Quasar Framework</b></p>
        <quasar-select />
      </div>
      <div class="column">
        <p><b>PrimeVue Framework</b></p>
        <prime-select />
      </div>
      <div class="column">
        <p><b>Element-plus Framework</b></p>
        <element-select />
      </div>
    </div>

    <div class="row" v-if="clickedButton === 'input'">
      <div class="column">
        <p><b>HTML</b></p>
        <html-input />
      </div>
      <div class="column">
        <p><b>Ant design</b></p>
        <ant-input />
      </div>
      <div class="column">
        <p><b>Quasar Framework</b></p>
        <p>Quasar input</p>
        <quasar-input />
      </div>
      <div class="column">
        <p><b>PrimeVue Framework</b></p>
        <prime-input />
      </div>
      <div class="column">
        <p><b>Element-plus Framework</b></p>
        <element-input />
      </div>
    </div>

    <div class="row" v-if="clickedButton === 'rowcol'">
      <div class="column">
        <p><b>HTML</b></p>
        <html-rowcol />
      </div>
      <div class="column">
        <p><b>Ant design</b></p>
        <ant-rowcol />
      </div>
      <div class="column">
        <p><b>Quasar Framework</b></p>
        <p>Quasar rowcol</p>
        <quasar-rowcol />
      </div>
      <div class="column">
        <p><b>PrimeVue Framework</b></p>
        <prime-rowcol />
      </div>
      <div class="column">
        <p><b>Element-plus Framework</b></p>
        <element-rowcol />
      </div>
    </div>

    <div class="row" v-if="clickedButton === 'button'">
      <div class="column">
        <p><b>HTML</b></p>
        <html-button />
      </div>
      <div class="column">
        <p><b>Ant design</b></p>
        <ant-button />
      </div>
      <div class="column">
        <p><b>Quasar Framework</b></p>
        <quasar-button />
      </div>
      <div class="column">
        <p><b>PrimeVue Framework</b></p>
        <prime-button />
      </div>
      <div class="column">
        <p><b>Element-plus Framework</b></p>
        <element-button />
      </div>
    </div>

    <div class="row" v-if="clickedButton === 'card'">
      <div class="column">
        <p><b>HTML</b></p>
        <html-card />
      </div>
      <div class="column">
        <p><b>Ant design</b></p>
        <ant-card />
      </div>
      <div class="column">
        <p><b>Quasar Framework</b></p>
        <quasar-card />
      </div>
      <div class="column">
        <p><b>PrimeVue Framework</b></p>
        <prime-card />
      </div>
      <div class="column">
        <p><b>Element-plus Framework</b></p>
        <element-card />
      </div>
    </div>

    <div class="row" v-if="clickedButton === 'tabs'">
      <div class="column">
        <p><b>HTML</b></p>
        <html-tabs />
      </div>
      <div class="column">
        <p><b>Ant design</b></p>
        <ant-tabs />
      </div>
      <div class="column">
        <p><b>Quasar Framework</b></p>
        <p>Quasar tabs</p>
        <quasar-tabs />
      </div>
      <div class="column">
        <p><b>PrimeVue Framework</b></p>
        <prime-tabs />
      </div>
      <div class="column">
        <p><b>Element-plus Framework</b></p>
        <element-tabs />
      </div>
    </div>

    <div class="row" v-if="clickedButton === 'slider'">
      <!-- <div class="column">
        <p><b>HTML</b></p>
        <slider typeLib="html" />
      </div>
      <div class="column">
        <p><b>Ant design</b></p>
        <slider typeLib="ant" />
      </div>
      <div class="column">
        <p><b>Quasar Framework</b></p>
        <slider typeLib="quasar" />
      </div>
      <div class="column">
        <p><b>PrimeVue Framework</b></p>
        <slider typeLib="prime" />
      </div>
      <div class="column">
        <p><b>Element-plus Framework</b></p>
        <slider typeLib="element" />
      </div> -->
      <div class="column">
        <p><b>HTML</b></p>
        <html-slider />
      </div>
      <div class="column">
        <p><b>Ant design</b></p>
        <ant-slider />
      </div>
      <div class="column">
        <p><b>Quasar Framework</b></p>
        <p>Quasar tabs</p>
        <quasar-slider />
      </div>
      <div class="column">
        <p><b>PrimeVue Framework</b></p>
        <prime-slider />
      </div>
      <div class="column">
        <p><b>Element-plus Framework</b></p>
        <element-slider />
      </div>
    </div>

     <div class="row" v-if="clickedButton === 'switch'">
      <div class="column">
        <p><b>HTML</b></p>
        <html-switch />
      </div>
      <div class="column">
        <p><b>Ant design</b></p>
        <ant-switch />
      </div>
      <div class="column">
        <p><b>Quasar Framework</b></p>
        <p>Quasar switch</p>
        <quasar-switch />
      </div>
      <div class="column">
        <p><b>PrimeVue Framework</b></p>
        <prime-switch />
      </div>
      <div class="column">
        <p><b>Element-plus Framework</b></p>
        <element-switch />
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from "vue";
const AntSwitch = defineAsyncComponent(() => import("@/views/ant/Switch.vue"));
const HtmlSwitch = defineAsyncComponent(
  () => import("@/views/html/Switch.vue")
);
const QuasarSwitch = defineAsyncComponent(
  () => import("@/views/quasar/Switch.vue")
);
const ElementSwitch = defineAsyncComponent(
  () => import("@/views/element/Switch.vue")
);
const PrimeSwitch = defineAsyncComponent(() => import("./prime/Switch.vue"));

const AntSlider = defineAsyncComponent(() => import("@/views/ant/Slider.vue"));
const HtmlSlider = defineAsyncComponent(
  () => import("@/views/html/Slider.vue")
);
const QuasarSlider = defineAsyncComponent(
  () => import("@/views/quasar/Slider.vue")
);
const ElementSlider = defineAsyncComponent(
  () => import("@/views/element/Slider.vue")
);
const PrimeSlider = defineAsyncComponent(() => import("./prime/Slider.vue"));

const AntTable = defineAsyncComponent(() => import("@/views/ant/Table.vue"));
const AntSelect = defineAsyncComponent(() => import("@/views/ant/Select.vue"));
const AntInput = defineAsyncComponent(() => import("@/views/ant/Input.vue"));
const AntRowCol = defineAsyncComponent(() => import("@/views/ant/RowCol.vue"));
const AntCard = defineAsyncComponent(() => import("@/views/ant/Card.vue"));
const AntTabs = defineAsyncComponent(() => import("@/views/ant/Tabs.vue"));

const HtmlTable = defineAsyncComponent(() => import("@/views/html/Table.vue"));
const HtmlSelect = defineAsyncComponent(
  () => import("@/views/html/Select.vue")
);
const HtmlInput = defineAsyncComponent(() => import("@/views/html/Input.vue"));
const HtmlRowCol = defineAsyncComponent(
  () => import("@/views/html/RowCol.vue")
);
const HtmlCard = defineAsyncComponent(() => import("@/views/html/Card.vue"));
const HtmlTabs = defineAsyncComponent(() => import("@/views/html/Tabs.vue"));
const QuasarTable = defineAsyncComponent(
  () => import("@/views/quasar/Table.vue")
);
const QuasarSelect = defineAsyncComponent(
  () => import("@/views/quasar/Select.vue")
);
const QuasarInput = defineAsyncComponent(
  () => import("@/views/quasar/Input.vue")
);
const QuasarRowCol = defineAsyncComponent(
  () => import("@/views/quasar/RowCol.vue")
);
const QuasarCard = defineAsyncComponent(
  () => import("@/views/quasar/Card.vue")
);
const QuasarTabs = defineAsyncComponent(
  () => import("@/views/quasar/Tabs.vue")
);

const HtmlButton = defineAsyncComponent(
  () => import("@/views/html/Button.vue")
);
const AntButton = defineAsyncComponent(() => import("@/views/ant/Button.vue"));
const QuasarButton = defineAsyncComponent(
  () => import("@/views/quasar/Button.vue")
);

const PrimeTable = defineAsyncComponent(() => import("./prime/Table.vue"));

const PrimeSelect = defineAsyncComponent(
  () => import("@/views/prime/Select.vue")
);
const PrimeInput = defineAsyncComponent(
  () => import("@/views/prime/Input.vue")
);
const PrimeRowCol = defineAsyncComponent(
  () => import("@/views/prime/RowCol.vue")
);
const PrimeButton = defineAsyncComponent(
  () => import("@/views/prime/Button.vue")
);
const PrimeCard = defineAsyncComponent(() => import("@/views/prime/Card.vue"));
const PrimeTabs = defineAsyncComponent(() => import("@/views/prime/Tabs.vue"));

const ElementTable = defineAsyncComponent(
  () => import("@/views/element/Table.vue")
);
const ElementSelect = defineAsyncComponent(
  () => import("@/views/element/Select.vue")
);
const ElementInput = defineAsyncComponent(
  () => import("@/views/element/Input.vue")
);
const ElementRowCol = defineAsyncComponent(
  () => import("@/views/element/RowCol.vue")
);
const ElementButton = defineAsyncComponent(
  () => import("@/views/element/Button.vue")
);
const ElementCard = defineAsyncComponent(
  () => import("@/views/element/Card.vue")
);
const ElementTabs = defineAsyncComponent(
  () => import("@/views/element/Tabs.vue")
);

const Slider = defineAsyncComponent(() => import("@/views/Slider.vue"));

export default defineComponent({
  name: "Home",
  components: {
    "ant-table": AntTable,
    "ant-select": AntSelect,
    "ant-input": AntInput,
    "ant-rowcol": AntRowCol,
    "ant-button": AntButton,
    "ant-card": AntCard,
    "ant-tabs": AntTabs,

    "html-table": HtmlTable,
    "html-select": HtmlSelect,
    "html-input": HtmlInput,
    "html-rowcol": HtmlRowCol,
    "html-button": HtmlButton,
    "html-card": HtmlCard,
    "html-tabs": HtmlTabs,

    "quasar-table": QuasarTable,
    "quasar-select": QuasarSelect,
    "quasar-input": QuasarInput,
    "quasar-rowcol": QuasarRowCol,
    "quasar-button": QuasarButton,
    "quasar-card": QuasarCard,
    "quasar-tabs": QuasarTabs,

    "element-table": ElementTable,
    "element-select": ElementSelect,
    "element-input": ElementInput,
    "element-rowcol": ElementRowCol,
    "element-button": ElementButton,
    "element-card": ElementCard,
    "element-tabs": ElementTabs,

    "prime-table": PrimeTable,
    "prime-select": PrimeSelect,
    "prime-input": PrimeInput,
    "prime-rowcol": PrimeRowCol,
    "prime-button": PrimeButton,
    "prime-card": PrimeCard,
    "prime-tabs": PrimeTabs,

    "ant-slider": AntSlider,
    "html-slider": HtmlSlider,
    "quasar-slider": QuasarSlider,
    "element-slider": ElementSlider,
    "prime-slider": PrimeSlider,
    
    "ant-switch": AntSwitch,
    "html-switch": HtmlSwitch,
    "quasar-switch": QuasarSwitch,
    "element-switch": ElementSwitch,
    "prime-switch": PrimeSwitch,

    slider: Slider,
  },
  setup() {
    // const routes: unknown[] = [
    //   { link: "html", name: "HTML" },
    //   { link: "ant", name: "Ant Design" },
    //   { link: "quasar", name: "Quasar" },
    // ];

    const types: unknown[] = [
      { link: "table", name: "Table" },
      { link: "select", name: "Select" },
      { link: "input", name: "Input" },
      { link: "rowcol", name: "RowCol" },
      { link: "button", name: "Button" },
      { link: "card", name: "Card" },
      { link: "tabs", name: "Tabs" },
      { link: "slider", name: "Slider" },
      { link: "switch", name: "Switch" },
    ];

    const clickedButton = ref<string | undefined>(undefined);

    const renderByName = (type: string) => {
      // console.log("type", type);
      clickedButton.value = type;
    };

    return {
      types,
      renderByName,
      clickedButton,
    };
  },
});
</script>

<style scoped>
.btn {
  margin-right: 5px;
  padding: 5px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
}

.btn-clicked {
  background: #4caf50;
  color: white;
}

.column {
  float: left;
  width: 20%;
  padding-left: 15px;
  border-right: 1px solid;
}

.column:last-child {
  border-right: none;
}

.row {
  margin-top: 15px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

p {
  text-align: left;
  margin-left: 10px;
}
</style>
