<template>
  <div>
    <p>Ant Tabs</p>
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <a-tabs>
        <a-tab-pane key="1" tab="Tab 1"> Content Tab 1 </a-tab-pane>
        <a-tab-pane key="2" tab="Tab 2"> Content Tab 2 </a-tab-pane>
        <a-tab-pane key="3" tab="Tab 3"> Content Tab 3 </a-tab-pane>
        <a-tab-pane key="4" tab="Tab 4"> Content Tab 4 </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { onMounted } from "vue";

export default defineComponent({
  name: "AntTabs",
  setup() {
    const data = ref<unknown[]>([]);

    for (let i = 0; i < 100; i++) {
      data.value.push({
        key: `${i + 1}`,
        tabs: ["tab 1", "tab 2", "tab 3"],
      });
    }

    console.time("Ant Tabs");
    onMounted(() => {
      console.timeEnd("Ant Tabs");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped>
</style>