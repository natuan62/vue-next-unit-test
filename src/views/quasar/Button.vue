<template>
  <div>
    <p>Quasar Button</p>
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <q-btn v-for="(item2) in item.tags" :key="item2.id" :label="item2"></q-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "QuasarButton",
  setup() {
    const data = ref<unknown[]>([]);

    for (let i = 0; i < 300; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher", "feel", "lose"],
      });
    }

    console.time("Quasar Button");
    onMounted(() => {
      console.timeEnd("Quasar Button");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped>
</style>