<template>
  <render-time />
  <div v-for="item in data" :key="item.id">
    <p>Index {{ item.id }}</p>
    <PSlider v-model="sliderVal" :step="1" :min="1" :max="100" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "PrimeSlider",
  setup() {
    const data = ref<unknown[]>([]);

    const sliderVal = ref(null);

    for (let i = 0; i < 200; i++) {
      data.value.push({
        id: `${i + 1}`,
      });
    }

    return {
      data,
      sliderVal,
    };
  },
});
</script>

<style scoped></style>
