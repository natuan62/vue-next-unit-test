<template>
  <div>
    <p>html input</p>
    <div v-for="(item, index) in data" :key="item.id">
      <p>input {{ index }}</p>
      <input :value="item.name" placeholder="Basic usage" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "HtmlInput",
  setup() {
    const data = ref<unknown[]>([]);

    for (let i = 0; i < 5000; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      });
    }

    console.time("Html Input");
    onMounted(() => {
      console.timeEnd("Html Input");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped>
</style>