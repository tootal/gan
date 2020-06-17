<template>
  <div>
    <el-row type="flex" align="middle">
      <el-col :span="24" class="text-center">
        <el-image :src="require('../assets/logo.png')" style="width: 250px"></el-image>
        <div>GAN.TOOTAL.XYZ</div>
      </el-col>
    </el-row>
    <gan-menu></gan-menu>
    <slot></slot>
  </div>
</template>
<script>
import GanMenu from './GanMenu.vue'
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
</style>