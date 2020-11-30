<template>
  <div>
    <p>Element Table</p>
    <render-time />
    <el-table :data="rows" style="width: 100%">
      <el-table-column
        v-for="item in tableColumns"
        :key="item.id"
        :prop="item.key"
        :label="item.title"
        width="180"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import data from "../data3.json";

export default defineComponent({
  name: "ElementTable",
  setup() {
    const tableColumns = [
      {
        title: "Key",
        key: "key",
      },
      {
        title: "Name",
        key: "name",
      },
      {
        title: "Age",
        key: "age",
      },
      {
        title: "Address",
        key: "address",
      },
      {
        title: "Tag",
        key: "tag",
      },
    ];

    const rows = data as unknown;

    const paginationTable = false;

    // console.time("Element Table");
    onMounted(() => {
      // console.timeEnd("Element Table");
    });

    return {
      paginationTable,
      tableColumns,
      rows,
    };
  },
});
</script>

<style scoped></style>
