<template>
  <div>
    <p>Prime Table</p>
    <render-time />
    <PTable :value="rows">
      <PColumn
        v-for="col of supportTableColumns"
        :field="col.key"
        :header="col.title"
        :key="col.key"
      ></PColumn>
    </PTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import data from "../data2.json";

export default defineComponent({
  name: "PrimeTable",
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

    console.time("Time Prime Table");
    onMounted(() => {
      console.timeEnd("Time Prime Table");
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
