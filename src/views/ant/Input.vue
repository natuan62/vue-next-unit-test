<template>
  <div>
    <p>Ant Input</p>
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <input :value="item.name" placeholder="Basic usage" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { onMounted } from "vue";

export default defineComponent({
  name: "AntInput",
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

    console.time("Ant Input");
    onMounted(() => {
      console.timeEnd("Ant Input");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped>
</style>