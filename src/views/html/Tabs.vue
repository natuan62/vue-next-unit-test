<template>
  <div>
    <p>Html Tabs</p>
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <button
        class="btn"
        v-for="tab in item.tags"
        :key="tab"
        @click="tabContent = tab"
      >
        {{ tab }}
      </button>
      <p v-if="tabContent">Tab content: {{ tabContent }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { onMounted } from "vue";
export default defineComponent({
  name: "HtmlTabs",
  setup() {
    const data = ref<unknown[]>([]);
    const tabContent = ref<string | undefined>(undefined);

    const tabs: string[] = ["Home", "Contact"];

    for (let i = 0; i < 300; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher", "lose"],
      });
    }

    console.time("Html Tabs");
    onMounted(() => {
      console.timeEnd("Html Tabs");
    });

    return {
      data,
      tabs,
      tabContent,
    };
  },
});
</script>

<style scoped>
.btn {
  background-color: none; 
  border: none;
  color: blue;
  padding: 12px 24px;
  text-align: center;
  font-size: 16px;
  margin-right: 5px;
  border-radius: 5px;
}
</style>
