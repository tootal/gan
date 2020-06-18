<template>
  <div id="app">
    <gan-layout>
      <div class="body">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive !== false"></router-view>
        </keep-alive>
        <router-view v-if="$route.meta.keepAlive === false"></router-view>
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