<template>
  <div class="wrapper">
    <p>Html Card</p>
    <render-time />
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <div class="card">
        <h5>Default size card</h5>
        <p v-for="item2 in item.tags" :key="item2.id">{{ item2 }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { onMounted } from "vue";


export default defineComponent({
  name: "HtmlCard",
   
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

    console.time("Html Card");
    onMounted(() => {
      console.timeEnd("Html Card");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped>
.wrapper {
  margin-left: 15px;
}

.card {
  border: 1px solid;
  width: 200px;
}
</style>