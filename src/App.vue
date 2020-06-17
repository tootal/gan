<template>
  <div id="app">
    <gan-layout>
      <router-view></router-view>
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
