<template>
  <render-time />
  <div v-for="item in data" :key="item.id">
    <p>Index {{ item.id }}</p>
    <q-list bordered class="rounded-borders">
      <q-expansion-item expand-separator label="Panel 1">
        <p>Content 1</p>
      </q-expansion-item>
      <q-expansion-item expand-separator label="Panel 2">
        <p>Content 2</p>
      </q-expansion-item>
      <q-expansion-item expand-separator label="Panel 3">
        <p>Content 3</p>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "QuasarCollapse",
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
