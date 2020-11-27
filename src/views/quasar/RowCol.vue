<template>
  <div>
    <p>Quasar RowCol</p>
    <div class="row" v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <div class="col" v-for="item2 in item.tags" :key="item2.id">
        ... {{ item2 }} ....
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "QuasarRowCol",
  setup() {
    const value1 = ref<string>("lucy");

    const data = ref<unknown[]>([]);

    for (let i = 0; i < 100; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: [
          "cool",
          "teacher",
          "cool",
          "teacher",
        ],
      });
    }

    console.time("Quasar RowCol");

    onMounted(() => {
      console.timeEnd("Quasar RowCol");
    });

    return {
      value1,
      data,
    };
  },
});
</script>

<style scoped>
</style>