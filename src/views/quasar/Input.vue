<template>
  <render-time />
  <div v-for="(item, index) in data" :key="item.id">
    <p>Index {{ index }}</p>
    <q-input v-model="item.name" label="Standard" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "QuasarInput",

  setup() {
    const data = ref<unknown[]>([]);

    for (let i = 0; i < 200; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      });
    }
    // console.time("Quasar Input");
    onMounted(() => {
      // console.timeEnd("Quasar Input");
    });

    return { data };
  },
});
</script>

<style scoped></style>
