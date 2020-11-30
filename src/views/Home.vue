<template>
  <div class="home">
    <p>Click each button to display the corresponding component.</p>
    <button
      v-for="(type, index) in types"
      :key="type.id"
      @click="renderByName(type.link)"
    >
      {{ index + 1 }}. {{ type.name }}
    </button>
    <p v-if="clickedButton">
      Clicked [<b>{{ clickedButton }}</b
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
    </div>

    <div class="row" v-if="clickedButton === 'rowcol'">
      <div class="column">
        <p><b>HTML</b></p>
        <html-rowcol />
      </div>
      <div class="column">
        <p><b>Ant design</b></p>
      </div>
      <div class="column">
        <p><b>Quasar Framework</b></p>
        <p>Quasar rowcol</p>
        <quasar-rowcol />
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from "vue";
const AntTable = defineAsyncComponent(() => import("@/views/ant/Table.vue"));
const AntSelect = defineAsyncComponent(() => import("@/views/ant/Select.vue"));
const AntInput = defineAsyncComponent(() => import("@/views/ant/Input.vue"));
// const AntRowCol = defineAsyncComponent(() => import("@/views/ant/RowCol.vue"));
const AntCard = defineAsyncComponent(() => import("@/views/ant/Card.vue"));
const AntTabs = defineAsyncComponent(() => import("@/views/ant/Tabs.vue"));
const HtmlTable = defineAsyncComponent(() => import("@/views/html/Table.vue"));
const HtmlSelect = defineAsyncComponent(() => import("@/views/html/Select.vue"));
const HtmlInput = defineAsyncComponent(() => import("@/views/html/Input.vue"));
const HtmlRowCol = defineAsyncComponent(() => import("@/views/html/RowCol.vue"));
const HtmlCard = defineAsyncComponent(() => import("@/views/html/Card.vue"));
const HtmlTabs = defineAsyncComponent(() => import("@/views/html/Tabs.vue"));
const QuasarTable = defineAsyncComponent(() => import("@/views/quasar/Table.vue"));
const QuasarSelect = defineAsyncComponent(() => import("@/views/quasar/Select.vue"));
const QuasarInput = defineAsyncComponent(() => import("@/views/quasar/Input.vue"));
const QuasarRowCol = defineAsyncComponent(() => import("@/views/quasar/RowCol.vue"));
const QuasarCard = defineAsyncComponent(() => import("@/views/quasar/Card.vue"));
const QuasarTabs = defineAsyncComponent(() => import("@/views/quasar/Tabs.vue"));

const HtmlButton = defineAsyncComponent(() => import('@/views/html/Button.vue'))
const AntButton = defineAsyncComponent(() => import('@/views/ant/Button.vue'))
const QuasarButton = defineAsyncComponent(() => import('@/views/quasar/Button.vue'))

export default defineComponent({
  name: "Home",
  components: {
    "ant-table": AntTable,
    "ant-select": AntSelect,
    "ant-input": AntInput,
    // "ant-rowcol": AntRowCol,
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
    ];

    const clickedButton = ref<string | undefined>(undefined);

    const renderByName = (type: string) => {
      console.log("type", type);
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
button {
  margin-right: 5px;
}

.column {
  float: left;
  width: 33.33%;
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
</style>
