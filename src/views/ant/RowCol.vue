<template>
  <div>
    <p>Ant RowCol</p>
    <a-row v-for="(item, index) in data" :key="item.id">
      <a-col :span="3">
        <p>Index {{ index }}</p>
      </a-col>
      <a-col :span="3" v-for="item2 in item.tags" :key="item2.id"
        >... {{ item2 }} ....</a-col
      >
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "AntRowCol",
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

    console.time("Ant RowCol");

    onMounted(() => {
      console.timeEnd("Ant RowCol");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped></style>
