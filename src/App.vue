<template>
  <div id="app">
    <gan-layout>
      <div class="body">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
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