<template>
  <div>
    <p>Equal Button</p>
    <render-time />
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <PButton
        class="p-mx-1"
        v-for="item2 in item.tags"
        :key="item2.id"
        :label="item2"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "PrimeButton",
  setup() {
    const data = ref<unknown[]>([]);

    for (let i = 0; i < 200; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher", "feel", "lose"],
      });
    }

    // console.time("Prime Button");
    onMounted(() => {
      // console.timeEnd("Prime Button");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped></style>
