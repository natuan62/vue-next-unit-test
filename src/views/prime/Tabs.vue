<template>
  <div>
    <p>Prime Tabs</p>
    <render-time />
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <PTabView>
        <PTabPanel header="Header I"> Content I </PTabPanel>
        <PTabPanel header="Header II"> Content II </PTabPanel>
        <PTabPanel header="Header III"> Content III </PTabPanel>
      </PTabView>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { onMounted } from "vue";

export default defineComponent({
  name: "PrimeTabs",
  setup() {
    const data = ref<unknown[]>([]);

    for (let i = 0; i < 200; i++) {
      data.value.push({
        key: `${i + 1}`,
        tabs: ["tab 1", "tab 2", "tab 3"],
      });
    }

    console.time("Prime Tabs");
    onMounted(() => {
      console.timeEnd("Prime Tabs");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped></style>
