<template>
  <div>
    <p>Quasar Tabs</p>
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <q-list bordered class="rounded-borders">
        <q-expansion-item
          expand-separator
          label="Account settings"
          caption="John Doe"
        >
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-expansion-item
          expand-separator
          label="Account settings"
          caption="John Doe"
        >
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { onMounted } from "vue";

export default defineComponent({
  name: "QuasarTabs",
  setup() {
    const data = ref<unknown[]>([]);

    for (let i = 0; i < 1000; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      });
    }

    console.time("Quasar Tabs");
    onMounted(() => {
      console.timeEnd("Quasar Tabs");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped>
</style>