<template>
  <render-time />
  <div v-for="item in data" :key="item.id">
    <p>Index {{ item.id }}</p>
    <el-collapse>
      <el-collapse-item title="Panel 1" name="1">
        <div>Content 1</div>
      </el-collapse-item>
      <el-collapse-item title="Panel 2" name="2">
        <div>Content 2</div>
      </el-collapse-item>
      <el-collapse-item title="Panel 3" name="3">
        <div>Content 3</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "ElementCollapse",
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
