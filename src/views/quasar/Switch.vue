<template>
  <render-time />
  <div v-for="item in data" :key="item.id">
    <p>Index {{ item.id }}</p>
    <q-toggle v-model="checked" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "QuasarSwitch",
  setup() {
    const data = ref<unknown[]>([]);

    const checked = ref(false);

    for (let i = 0; i < 200; i++) {
      data.value.push({
        id: `${i + 1}`,
      });
    }

    return {
      data,
      checked,
    };
  },
});
</script>

<style scoped></style>
