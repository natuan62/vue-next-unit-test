<template>
  <div>
    <p>Element RowCol</p>
    <el-row v-for="(item, index) in data" :key="item.id">
      <el-col :span="3">
        <p>Index {{ index }}</p>
      </el-col>
      <el-col :span="3" v-for="item2 in item.tags" :key="item2.id"
        >... {{ item2 }} ....</el-col
      >
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "ElementRowCol",
  setup() {
    const data = ref<unknown[]>([]);

    for (let i = 0; i < 300; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher", "cool", "teacher", "cool"],
      });
    }

    console.time("Element RowCol");

    onMounted(() => {
      console.timeEnd("Element RowCol");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped></style>
