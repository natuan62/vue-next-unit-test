<template>
  <div>
    <p>Element Tabs</p>
    <render-time />
    <div v-for="(item, index) in data" :key="item.key">
      <p style="text-align: left">Index {{ index }}</p>
      <el-tabs>
        <el-tab-pane label="User" name="first">Content User</el-tab-pane>
        <el-tab-pane label="Config" name="second">Content Config</el-tab-pane>
        <el-tab-pane label="Role" name="third">Content Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Content Task</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { onMounted } from "vue";

export default defineComponent({
  name: "ElementTabs",
  setup() {
    const data = ref<unknown[]>([]);

    for (let i = 0; i < 200; i++) {
      data.value.push({
        key: `${i + 1}`,
        tabs: ["tab 1", "tab 2", "tab 3"],
      });
    }

    // console.time("Element Tabs");
    onMounted(() => {
      // console.timeEnd("Element Tabs");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped></style>
