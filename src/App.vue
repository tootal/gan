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
<style scoped>
.body {
  background-color: #f6f6f6;
  padding-bottom: 30px;
}
</style>