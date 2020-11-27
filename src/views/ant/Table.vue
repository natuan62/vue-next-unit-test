<template>
  <div>
    <p>Ant Table</p>
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
import data from "../data.json";

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

    // const rows = [
    //   {
    //     key: '1',
    //     name: 'John Brown',
    //     age: 32,
    //     address: 'New York No. 1 Lake Park',
    //     tags: ['nice', 'developer'],
    //   },
    //   {
    //     key: '2',
    //     name: 'Jim Green',
    //     age: 42,
    //     address: 'London No. 1 Lake Park',
    //     tags: ['loser'],
    //   },
    //   {
    //     key: '3',
    //     name: 'Joe Black',
    //     age: 32,
    //     address: 'Sidney No. 1 Lake Park',
    //     tags: ['cool', 'teacher'],
    //   },
    //   {
    //     key: '4',
    //     name: 'Joe Black',
    //     age: 32,
    //     address: 'Sidney No. 1 Lake Park',
    //     tags: ['cool', 'teacher'],
    //   },
    //   {
    //     key: '5',
    //     name: 'Joe Black',
    //     age: 32,
    //     address: 'Sidney No. 1 Lake Park',
    //     tags: ['cool', 'teacher'],
    //   },
    // ];

    const rows = data as unknown;

    const paginationTable = false;

    console.time("Ant Table");
    onMounted(() => {
      console.timeEnd("Ant Table");
    });

    return {
      paginationTable,
      supportTableColumns,
      rows,
    };
  },
});
</script>

<style scoped>
</style>