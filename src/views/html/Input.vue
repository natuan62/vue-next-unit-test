<template>
  <div>
     <render-time />
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <input :value="item.name" placeholder="Basic usage" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import RenderTime from "@/components/RenderTime.vue";

export default defineComponent({
  name: "HtmlInput",
   components: {
    "render-time": RenderTime,
  },
setup() {
    const data = ref<unknown[]>([]);

    for (let i = 0; i < 100; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      });
    }

    console.time("Html Input");
    onMounted(() => {
      console.timeEnd("Html Input");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped>
</style>