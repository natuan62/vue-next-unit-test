<template>
  <div>
     <render-time />
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <button v-for="tab in item.tags" :key="tab" @click="selected = tab">
        {{ tab }}
      </button>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { onMounted } from "vue";import RenderTime from "@/components/RenderTime.vue";

export default defineComponent({
  name: "HtmlTabs",
   components: {
    "render-time": RenderTime,
  },
setup() {
    const data = ref<unknown[]>([]);

    const tabs: string[] = ["Home", "Contact"];

    for (let i = 0; i < 100; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher", "lose"],
      });
    }

    console.time("Html Tabs");
    onMounted(() => {
      console.timeEnd("Html Tabs");
    });

    return {
      data,
      tabs,
    };
  },
});
</script>

<style scoped>
</style>