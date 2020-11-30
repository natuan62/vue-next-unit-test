<template>
  <div>
    <p>Element Button</p>
    <render-time />
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <el-button v-for="item2 in item.tags" :key="item2.id" type="primary">{{
        item2
      }}</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "ElementButton",
  setup() {
    const data = ref<unknown[]>([]);

    for (let i = 0; i < 200; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher", "feel", "lose"],
      });
    }

    console.time("Element Button");
    onMounted(() => {
      console.timeEnd("Element Button");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped></style>
