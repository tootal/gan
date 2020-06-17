<template>
  <div>
    <el-row type="flex" align="middle">
      <el-col :span="24" class="text-center">
        <el-image :src="require('../assets/logo.png')" style="width: 250px"></el-image>
        <div>GAN.TOOTAL.XYZ</div>
      </el-col>
    </el-row>
    <el-menu
      mode="horizontal"
      default-active="index"
      class="d-flex justify-content-center hidden-xs-only"
    >
      <el-menu-item v-for="(value, name) in this.$root.menus" :index="name" :key="name">{{ value }}</el-menu-item>
    </el-menu>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GanMain"
};
</script>
<style scoped>
@import "~element-ui/lib/theme-chalk/display.css";
.el-menu-item {
  float: none;
}
</style>