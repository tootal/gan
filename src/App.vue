<template>
  <div id="app">
    <gan-layout>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </gan-layout>
  </div>
</template>

<script>
import GanLayout from "./layouts/GanLayout.vue";
export default {
  name: "App",
  components: {
    GanLayout
  }
};
</script>
