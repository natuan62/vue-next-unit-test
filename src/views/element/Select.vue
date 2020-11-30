<template>
  <div>
    <p>Element Select</p>
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <el-select v-model="value1" placeholder="Select">
        <el-option
          v-for="item in item.tags"
          :key="item"
          :label="item"
          :value="item"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "ElementSelect",
  setup() {
    const value1 = ref<string>("lucy");

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

    console.time("Element Select");

    onMounted(() => {
      console.timeEnd("Element Select");
    });

    return {
      value1,
      data,
    };
  },
});
</script>

<style scoped></style>
