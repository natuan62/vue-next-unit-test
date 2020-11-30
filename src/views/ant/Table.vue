<template>
  <div>
    <render-time />
    <a-table
      :columns="supportTableColumns"
      :data-source="rows"
      :pagination="paginationTable"
    >
      <template #name="{ text }">
        <a>{{ text }}</a>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import data from "../data1.json";

export default defineComponent({
  name: "AntTable",
  setup() {
    const supportTableColumns = [
      {
        title: "Key",
        dataIndex: "key",
        key: "key",
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        slots: { customRender: "tags" },
      },
    ];
    const rows = data as unknown;

    const paginationTable = false;

    // console.time("Ant Table");
    onMounted(() => {
      // console.timeEnd("Ant Table");
    });

    return {
      paginationTable,
      supportTableColumns,
      rows,
    };
  },
});
</script>

<style scoped></style>
