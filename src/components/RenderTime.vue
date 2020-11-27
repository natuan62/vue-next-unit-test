<template>
  <div>Render time: <b>[ {{ time }} ]</b> ms</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useLogTime from "@/compositions/useLogTime.ts";

export default defineComponent({
  name: "RenderTime",
  setup() {
    const time = useLogTime().time;

    return {
      time,
    };
  },
});
</script>

<style scoped>
</style>