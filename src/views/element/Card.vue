<template>
  <div>
    <p>Element Card</p>
    <render-time />
    <div v-for="(item, index) in data" :key="item.id" style="margin-left: 25px">
      <p style="text-align: left">Index {{ index }}</p>
      <el-card class="box-card">
        <template #header>
          <p>{{ item.name }}</p>
        </template>
        <p>Content: {{ item.address }}</p>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { onMounted } from "vue";

export default defineComponent({
  name: "ElementCard",
  setup() {
    const data = ref<unknown[]>([]);

    for (let i = 0; i < 200; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      });
    }

    // console.time("Element Card");
    onMounted(() => {
      // console.timeEnd("Element Card");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 280px;
}
</style>
