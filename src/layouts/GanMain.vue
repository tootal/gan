<template>
  <div>
    <div class="main">
      <div class="text-center">
        <el-image :src="require('../assets/logo.png')" style="width: 250px"></el-image>
        <div>GAN.TOOTAL.XYZ</div>
      </div>
    </div>
    <div class="top-menu shadow-bottom">
      <gan-menu></gan-menu>
    </div>
    <slot></slot>
  </div>
</template>
<script>
import GanMenu from "../components/GanMenu.vue";
export default {
  name: "GanMain",
  components: {
    GanMenu
  }
};
</script>
<style scoped>
@import "~element-ui/lib/theme-chalk/display.css";
.el-menu-item {
  float: none;
}
.top-menu {
  position: sticky;
  top: 0;
  z-index: 10;
}
</style>