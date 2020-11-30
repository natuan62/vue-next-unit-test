<template>
  <div>
    <render-time />
    <div class="row" v-for="(item, index) in data" :key="item.id">
      <div class="col-2">
        <p>Index {{ index }}</p>
      </div>
      <div class="col-2" v-for="item2 in item.tags" :key="item2.id">
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

    for (let i = 0; i < 200; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher", "cool", "teacher"],
      });
    }

    // console.time("Quasar RowCol");

    onMounted(() => {
      // console.timeEnd("Quasar RowCol");
    });

    return {
      value1,
      data,
    };
  },
});
</script>

<style scoped></style>
