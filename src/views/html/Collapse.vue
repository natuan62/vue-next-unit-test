<template>
  <render-time />
  <div v-for="item in data" :key="item.id">
    <p>Index {{ item.id }}</p>
    <div v-for="(item2, index) in item.collapse" :key="index" ref="collapseRef">
      <button class="collapsible">
        {{ item2.header }}
      </button>
      <div class="content">
        <p>{{ item2.content }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "HtmlCollapse",
  setup() {
    const data = ref<unknown[]>([]);

    const sliderVal = ref(null);

    const collapseRef = ref<HTMLElement | null>(null);

    for (let i = 0; i < 200; i++) {
      data.value.push({
        id: `${i + 1}`,
        collapse: [
          { header: "Collapse 1", content: "Lorem 1" },
          { header: "Collapse 2", content: "Lorem 2" },
          { header: "Collapse 3", content: "Lorem 3" },
        ],
      });
    }

    return {
      data,
      sliderVal,
      collapseRef,
    };
  },
});
</script>

<style scoped>
.collapsible {
  background-color: #777;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.active,
.collapsible:hover {
  background-color: #555;
}

.collapsible:after {
  content: "\002B";
  color: white;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2212";
}

.content {
  padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f1;
}
</style>
