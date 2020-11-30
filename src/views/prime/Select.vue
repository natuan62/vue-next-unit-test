<template>
  <div>
    <p>Prime Select</p>
    <render-time />
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <PDropdown
        v-model="value1"
        :options="item.tags"
        optionLabel="name"
        placeholder="Select"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "PrimeSelect",
  setup() {
    const value1 = ref<string>("lucy");

    const data = ref<unknown[]>([]);

    for (let i = 0; i < 200; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: [
          {
            name: "cool",
            code: "cool",
          },
          {
            name: "teacher",
            code: "teacher",
          },
        ],
      });
    }

    // console.time("Prime Select");
    onMounted(() => {
      // console.timeEnd("Prime Select");
    });

    return {
      value1,
      data,
    };
  },
});
</script>

<style scoped></style>
