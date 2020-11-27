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
import { defineComponent, ref } from "vue";
import AntTable from "@/views/ant/Table.vue";
import AntSelect from "@/views/ant/Select.vue";
import AntInput from "@/views/ant/Input.vue";
// import AntRowCol from "@/views/ant/RowCol.vue";
import AntButton from "@/views/ant/Button.vue";
import AntCard from "@/views/ant/Card.vue";
import AntTabs from "@/views/ant/Tabs.vue";
import HtmlTable from "@/views/html/Table.vue";
import HtmlSelect from "@/views/html/Select.vue";
import HtmlInput from "@/views/html/Input.vue";
import HtmlRowCol from "@/views/html/RowCol.vue";
import HtmlButton from "@/views/html/Button.vue";
import HtmlCard from "@/views/html/Card.vue";
import HtmlTabs from "@/views/html/Tabs.vue";
import QuasarTable from "@/views/quasar/Table.vue";
import QuasarSelect from "@/views/quasar/Select.vue";
import QuasarInput from "@/views/quasar/Input.vue";
import QuasarRowCol from "@/views/quasar/RowCol.vue";
import QuasarButton from "@/views/quasar/Button.vue";
import QuasarCard from "@/views/quasar/Card.vue";
import QuasarTabs from "@/views/quasar/Tabs.vue";

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
