<template>
  <div>
    <p>Ant Tabs</p>
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <a-tabs>
        <a-tab-pane key="1" tab="Tab 1"> Content of Tab Pane 1 </a-tab-pane>
        <a-tab-pane key="2" tab="Tab 2"> Content of Tab Pane 2 </a-tab-pane>
        <a-tab-pane key="3" tab="Tab 3"> Content of Tab Pane 3 </a-tab-pane>
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
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
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