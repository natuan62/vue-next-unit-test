<template>
  <div>
    <p>Html Table</p>
    <table>
      <tr>
        <th v-for="item in supportTableColumns" :key="item.title">
          {{ item.title }}
        </th>
      </tr>
      <tr v-for="item in rows" :key="item.title">
        <td>{{ item.key }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.tags }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import data from "../data.json";

export default defineComponent({
  name: "HtmlTable",
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

    // const rows = ref<any[]>([]);

    // for (let i = 0; i < 10000; i++) {
    //   rows.value.push({
    //     key: `${i + 1}`,
    //     name: 'Joe Black',
    //     age: 32,
    //     address: 'Sidney No. 1 Lake Park',
    //     tags: ['cool', 'teacher'],
    //   });
    // }

    const rows = data as unknown;

    console.time("Html Table");
    onMounted(() => {
      console.timeEnd("Html Table");
    });

    return {
      supportTableColumns,
      rows,
    };
  },
});
</script>

<style scoped>
</style>