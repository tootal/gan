<template>
  <div>
    <el-row type="flex" align="middle">
      <el-col :span="24" class="text-center">
        <el-image :src="require('../assets/logo.png')" style="width: 250px"></el-image>
        <div>GAN.TOOTAL.XYZ</div>
      </el-col>
    </el-row>
    <el-menu mode="horizontal" class="d-flex justify-content-center hidden-xs-only">
      <el-menu-item index="index">首页</el-menu-item>
      <el-menu-item index="forum">论坛</el-menu-item>
      <el-menu-item index="location">位置</el-menu-item>
      <el-menu-item index="economy">经济</el-menu-item>
      <el-menu-item index="education">教育</el-menu-item>
      <el-menu-item index="culture">文化</el-menu-item>
      <el-menu-item index="history">历史</el-menu-item>
      <el-menu-item index="about">关于</el-menu-item>
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
@import '~element-ui/lib/theme-chalk/display.css';
.el-menu-item {
  float: none;
}
</style>