<template>
  <div>
    <p>Slider</p>
    <!-- HTML -->
    <div v-if="typeLibProp === 'html'">
      <render-time />
      <div v-for="item in data" :key="item.id">
        <p>Index {{ item.id }}</p>
        <input type="range" min="1" max="100" />
      </div>
    </div>

    <!-- Ant -->
    <div v-if="typeLibProp === 'ant'">
      <render-time />
      <div v-for="item in data" :key="item.id">
        <p>Index {{ item.id }}</p>
        <a-slider :min="1" :max="100" />
      </div>
    </div>

    <!-- Quasar -->
    <div v-if="typeLibProp === 'quasar'">
      <render-time />
      <div v-for="item in data" :key="item.id">
        <p>Index {{ item.id }}</p>
        <q-slider v-model="sliderVal" :min="1" :max="100" />
      </div>
    </div>

    <!-- Prime -->
    <div v-if="typeLibProp === 'prime'">
      <render-time />
      <div v-for="item in data" :key="item.id">
        <p>Index {{ item.id }}</p>
        <PSlider v-model="sliderVal" :step="1" :min="1" :max="100" />
      </div>
    </div>

    <!-- Element-plus -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "Slider",
  props: {
    typeLib: String,
  },
  setup(props) {
    const data = ref<unknown[]>([]);

    const sliderVal = ref(null);

    const typeLibProp = computed(() => props.typeLib);

    for (let i = 0; i < 200; i++) {
      data.value.push({
        id: `${i + 1}`,
      });
    }

    return {
      data,
      typeLibProp,
      sliderVal,
    };
  },
});
</script>

<style scoped></style>
