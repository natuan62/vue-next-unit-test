<template>
  <div>
    <render-time />
    <div class="row" v-for="(item, index) in data" :key="item.id">
      <div class="column">
        <p>Index {{ index }}</p>
      </div>
      <div class="column" v-for="item2 in item.tags" :key="item2.id">
        ... {{ item2 }} ....
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "HtmlRowCol",

  setup() {
    const data = ref<unknown[]>([]);

    for (let i = 0; i < 200; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher", "cool", "lose"],
      });
    }

    // console.time("Html RowCol");

    onMounted(() => {
      // console.timeEnd("Html RowCol");
    });

    return {
      data,
    };
  },
});
</script>

<style scoped>
.column {
  float: left;
  width: 20%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>
