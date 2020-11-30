<template>
  <div>
    <p>Prime Input</p>
    <render-time />
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <!-- <input :value="item.name" placeholder="Basic usage" /> -->
      <PInputText
        type="text"
        v-model="item.name"
        placeholder="Prime Vue input"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { onMounted } from "vue";

export default defineComponent({
  name: "PrimeInput",
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

    console.time("Prime Input");
    onMounted(() => {
      console.timeEnd("Prime Input");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped></style>
