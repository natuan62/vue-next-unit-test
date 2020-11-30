<template>
  <div>
    <p>Prime Card</p>
    <render-time />
    <PCard class="p-m-2" v-for="(item, index) in data" :key="item.id">
      <template #header>
        <p>{{ index }} Card Header</p>
      </template>
      <template #title>
        <p>Card Title</p>
      </template>
      <template #content>
        <p v-for="item2 in item.tags" :key="item2.id">
          Card content: {{ item2 }}
        </p>
      </template>
      <template #footer>
        <p>Card footer</p>
      </template>
    </PCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { onMounted } from "vue";

export default defineComponent({
  name: "PrimeCard",
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

    // console.time("Prime Card");
    onMounted(() => {
      // console.timeEnd("Prime Card");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped>
.p-card {
  border: 1px solid;
  width: 200px;
}
</style>
