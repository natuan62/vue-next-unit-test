<template>
  <div>
    <render-time />
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <a-select v-model:value="value1">
        <a-select-option v-for="item in item.tags" :key="item" :value="item">
          {{ item }}
        </a-select-option>
      </a-select>
      <!-- <a-select-option value="cool">
          cool
        </a-select-option>
        <a-select-option value="techer">
          teacher
        </a-select-option>
      </a-select> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "AntSelect",

  setup() {
    const value1 = ref<string>("lucy");

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

    // console.time("Ant Select");

    onMounted(() => {
      // console.timeEnd("Ant Select");
    });

    return {
      value1,
      data,
    };
  },
});
</script>

<style scoped></style>
