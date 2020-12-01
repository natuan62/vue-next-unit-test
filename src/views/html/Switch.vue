<template>
  <render-time />
  <div v-for="item in data" :key="item.id">
    <p>Index {{ item.id }}</p>
    <label class="switch">
      <input type="checkbox" checked />
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "HtmlSwitch",
  setup() {
    const data = ref<unknown[]>([]);

    const sliderVal = ref(null);

    for (let i = 0; i < 200; i++) {
      data.value.push({
        id: `${i + 1}`,
      });
    }

    return {
      data,
      sliderVal,
    };
  },
});
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
