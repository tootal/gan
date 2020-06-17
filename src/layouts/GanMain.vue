<template>
  <div>
    <el-row type="flex" align="middle">
      <el-col :span="24" class="text-center">
        <el-image :src="require('../assets/logo.png')" style="width: 250px"></el-image>
        <div>GAN.TOOTAL.XYZ</div>
      </el-col>
    </el-row>
    <el-menu mode="horizontal" class="d-flex justify-content-center hidden-xs-only">
      <el-menu-item v-for="(value, name) in menus" :index="name" :key="name">
        {{ value }}
      </el-menu-item>
    </el-menu>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GanMain",
  data() {
    return {
      menus: {
        index: "首页",
        forum: "论坛",
        location: "位置",
        economy: "经济",
        education: "教育",
        culture: "文化",
        history: "历史",
        about: "关于"
      }
    };
  }
};
</script>
<style scoped>
@import "~element-ui/lib/theme-chalk/display.css";
.el-menu-item {
  float: none;
}
</style>