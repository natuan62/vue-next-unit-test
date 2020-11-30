<template>
  <div>
    <p>Element Input</p>
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <el-input placeholder="Please input" v-model="item.name" style="width: 200px"></el-input>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { onMounted } from "vue";

export default defineComponent({
  name: "ElementInput",
  setup() {
    const data = ref<unknown[]>([]);

    for (let i = 0; i < 300; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      });
    }

    console.time("Element Input");
    onMounted(() => {
      console.timeEnd("Element Input");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped></style>
