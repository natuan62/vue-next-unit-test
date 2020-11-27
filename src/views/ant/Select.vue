<template>
  <div>
    <p>ant select</p>
    <a-select
      v-model:value="value1"
      style="width: 120px"
    >
      <a-select-option value="jack"> Jack </a-select-option>
    </a-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const value1 = ref<string>("lucy");
    return {
      value1,
    };
  },
});
</script>

<style scoped>
</style>