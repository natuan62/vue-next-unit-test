<template>
  <render-time />
  <div v-for="item in data" :key="item.id">
    <p>Index {{ item.id }}</p>
    <PAccordion>
      <PAccordionTab header="Header I">
        Content
      </PAccordionTab>
      <PAccordionTab header="Header II">
        Content
      </PAccordionTab>
      <PAccordionTab header="Header III">
        Content
      </PAccordionTab>
    </PAccordion>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "PrimeCollapse",
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
