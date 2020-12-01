<template>
  <render-time />
  <div v-for="item in data" :key="item.id">
    <p>Index {{ item.id }}</p>
    <a-collapse>
      <a-collapse-panel key="1" header="This is panel header 1">
        <p>Content 1</p>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="This is panel header 2">
        <p>Content 2</p>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="This is panel header 3">
        <p>Content 3</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "AntCollapse",
  setup() {
    const data = ref<unknown[]>([]);

    for (let i = 0; i < 200; i++) {
      data.value.push({
        id: `${i + 1}`,
        collapse: [
          { header: "Collapse 1", content: "Lorem 1" },
          { header: "Collapse 2", content: "Lorem 2" },
          { header: "Collapse 3", content: "Lorem 3" },
        ],
      });
    }
    return {
      data,
    };
  },
});
</script>

<style scoped></style>
