<template>
  <div>
    <p>Html Tabs</p>
    <div v-for="(item, index) in data" :key="item.id">
      <p>Index {{ index }}</p>
      <ul class="nav nav-tabs nav-justified">
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('home')" :class="{ active: isActive('home') }" href="#home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('profile')" :class="{ active: isActive('profile') }" href="#profile">Profile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('contact')" :class="{ active: isActive('contact') }" href="#contact">Contact</a>
      </li>
    </ul>
    <div class="tab-content py-3" id="myTabContent">
      <div class="tab-pane fade" :class="{ 'active show': isActive('home') }" id="home">Home content</div>
      <div class="tab-pane fade" :class="{ 'active show': isActive('profile') }" id="profile">Profile content</div>
      <div class="tab-pane fade" :class="{ 'active show': isActive('contact') }" id="contact">Contact content</div>
    </div>
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

    for (let i = 0; i < 1000; i++) {
      data.value.push({
        key: `${i + 1}`,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      });
    }

    const  activeItem = ref<string>('home');

    const isActive =  (menuItem: string) =>{
      return activeItem.value === menuItem;
    };

    const setActive =(menuItem: string) =>{
      return activeItem.value = menuItem;
    }
    console.time("Html Tabs");
    onMounted(() => {
      console.timeEnd("Html Tabs");
    });

    return {
      data,
      isActive,
      setActive,
    };
  },
});
</script>

<style scoped>
</style>