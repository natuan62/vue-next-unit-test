<template>
  <div>Quasar Select</div>
  <div v-for="(item, index) in data" :key="item.id">
    <p>Index {{ index }}</p>
    <q-select v-model="value1" :options="item.tags" label="Standard" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "QuasarSelect",
  setup() {
    const value1 = ref<string>("lucy");

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

    console.time("Quasar Select");

    onMounted(() => {
      console.timeEnd("Quasar Select");
    });

    return {
      value1,
      data,
    };
  },
});
</script>

<style scoped>
</style>