<template>
  <div id="nav">
    <p v-for="item in routes" :key="item.id">
      {{ item.name }} :
      <span v-for="type in types" :key="type.id">
        <router-link :to="`/${item.link}-${type.link}`">{{
          type.name
        }}</router-link>
        |
      </span>
    </p>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const routes: unknown[] = [
      { link: "html", name: "HTML" },
      { link: "ant", name: "Ant Design" },
      { link: "quasar", name: "Quasar" },
    ];

    const types: unknown[] = [
      { link: "table", name: "Table" },
      { link: "select", name: "Select" },
      { link: "input", name: "Input" },
      { link: "rowcol", name: "RowCol" },
      { link: "button", name: "Button" },
      { link: "card", name: "Card" },
    ];

    return {
      routes,
      types,
    };
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
