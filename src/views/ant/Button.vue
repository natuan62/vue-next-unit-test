<template>
  <div>
    <p>Ant Button</p>
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <a-button v-for="item2 in item.tags" :key="item2.id"
        >... {{ item2 }} ...</a-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "AntButton",
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

    console.time("Ant Button");
    onMounted(() => {
      console.timeEnd("Ant Button");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped></style>
