<template>
  <div>
    <p>Html Card</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { onMounted } from "vue";

export default defineComponent({
  name: "HtmlCard",
  setup() {
    const data = ref<unknown[]>([]);

    for (let i = 0; i < 1000; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      });
    }

    console.time("Html Card");
    onMounted(() => {
      console.timeEnd("Html Card");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped>
</style>