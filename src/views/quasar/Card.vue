<template>
  <div>
    <p>Quasar Card</p>
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <q-card class="my-card">
        <q-card-section v-for="item2 in item.tags" :key="item2.id">
          {{ item2 }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { onMounted } from "vue";

export default defineComponent({
  name: "QuasarCard",
  setup() {
    const data = ref<unknown[]>([]);

    for (let i = 0; i < 3000; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      });
    }

    console.time("Quasar Card");
    onMounted(() => {
      console.timeEnd("Quasar Card");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped>
</style>