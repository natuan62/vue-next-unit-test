<template>
  <div>
    <render-time />
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <a-card title="Default size card" style="width: 300px">
        <p v-for="item2 in item.tags" :key="item2.id">{{ item2 }}</p>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { onMounted } from "vue";

export default defineComponent({
  name: "AntCard",

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

    // console.time("Ant Card");
    onMounted(() => {
      // console.timeEnd("Ant Card");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped></style>
