<template>
  <div>
    <render-time />
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <select name="cars" id="cars">
        <option value="volvo" v-for="item in item.tags" :key="item">
          {{ item }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const data = ref<unknown[]>([]);

    for (let i = 0; i < 200; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      });
    }

    console.time("Html Select");

    onMounted(() => {
      console.timeEnd("Html Select");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped></style>
