<template>
  <div class="render">
    <p>* Render time: <b>[ {{ time }} ]</b> ms</p>
  </div>
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
.render {
  margin-bottom: 25px;
}
</style>
