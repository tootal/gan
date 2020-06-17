<template>
  <div class="main">
    <el-row type="flex" align="middle">
      <el-col :span="24" class="text-center">
        <el-image :src="require('../assets/logo.png')" style="width: 250px"></el-image>
        <div>GAN.TOOTAL.XYZ</div>
      </el-col>
    </el-row>
    <div class="top-menu">
      <gan-menu></gan-menu>
    </div>
    <slot></slot>
  </div>
</template>
<script>
import GanMenu from "./GanMenu.vue";
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
  z-index: 1000;
}
</style>