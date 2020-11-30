<template>
  <div>
    <render-time />
    <div v-for="(item, index) in data" :key="index">
      <p>Index {{ index }}</p>
      <q-tabs v-model="tab">
        <q-tab label="Tab 1" :name="`tab1${index}`" />
        <q-tab label="Tab 2" :name="`tab2${index}`" />
        <q-tab label="Tab 3" :name="`tab3${index}`" />
        <q-tab label="Tab 4" :name="`tab4${index}`" />
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel :name="`tab1${index}`"> Tab1 content </q-tab-panel>
        <q-tab-panel :name="`tab2${index}`"> Tab2 content </q-tab-panel>
        <q-tab-panel :name="`tab3${index}`"> Tab3 content </q-tab-panel>
        <q-tab-panel :name="`tab4${index}`"> Tab4 content </q-tab-panel>
      </q-tab-panels>
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

    for (let i = 0; i < 200; i++) {
      data.value.push({
        key: `${i + 1}`,
        tabs: ["tab 1", "tab 2", "tab 3"],
      });
    }

    const tab = ref<string>("mails");

    // console.time("Quasar Tabs");
    onMounted(() => {
      // console.timeEnd("Quasar Tabs");
    });

    return {
      data,
      tab,
    };
  },
});
</script>

<style scoped></style>
