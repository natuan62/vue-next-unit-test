<template>
  <div>
    <!-- <render-time /> -->
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <button v-for="item2 in item.tags" :key="item2.id">
        ... {{ item2 }} ...
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
// import RenderTime from "@/components/RenderTime.vue";

export default defineComponent({
  name: "HtmlButton",
  components: {
    // "render-time": RenderTime,
  },
  setup() {
    const data = ref<unknown[]>([]);

    for (let i = 0; i < 100; i++) {
      data.value.push({
        key: `${i + 1}`,
        tags: ["cool", "teacher", "feel", "lose"],
      });
    }

    console.time("Html Button");
    onMounted(() => {
      console.timeEnd("Html Button");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped>
</style>