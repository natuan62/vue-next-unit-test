<template>
  <div>
     <render-time />
    <div class="row" v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <div class="column" v-for="item2 in item.tags" :key="item2.id">
        ... {{ item2 }} ....
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import RenderTime from "@/components/RenderTime.vue";

export default defineComponent({
  name: "HtmlRowCol",
   components: {
    "render-time": RenderTime,
  },
setup() {
    const data = ref<unknown[]>([]);

    for (let i = 0; i < 100; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher", "cool", "teacher", "cool"],
      });
    }

    console.time("Html RowCol");

    onMounted(() => {
      console.timeEnd("Html RowCol");
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
  width: 25%;
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