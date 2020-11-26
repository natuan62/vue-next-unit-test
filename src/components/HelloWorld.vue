<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <a-button type="primary">
    Primary
  </a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<style scoped>

</style>
