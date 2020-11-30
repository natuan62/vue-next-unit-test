<template>
  <div>
    <p>Prime RowCol</p>

    <div class="p-grid p-ml-2" v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <div class="p-col" v-for="(item2, index) in item.tags" :key="item2.id">
        ...{{index}} {{ item2 }}...
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "PrimeRowCol",
  setup() {
    const data = ref<unknown[]>([]);

    for (let i = 0; i < 100; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher", "cool", "teacher", "cool"],
      });
    }

    console.time("Prime RowCol");

    onMounted(() => {
      console.timeEnd("Prime RowCol");
    });

    return {
      data,
    };
  },
});
</script>

<style></style>
