<template>
  <el-row type="flex" align="middle" class="h-100">
    <el-col :span="2" :sm="4" :xs="4" class="h-100">
      <el-image :src="require('../assets/danboard.png')" alt="Danboard" fit="contain" class="h-100"></el-image>
    </el-col>
    <el-col :span="18" :sm="12" :xs="16">
      <div></div>
    </el-col>
    <el-col :span="4" :sm="8" class="text-center hidden-xs-only">
      <el-button-group>
        <el-button>登录</el-button>
        <el-button type="primary" plain>注册</el-button>
      </el-button-group>
    </el-col>
    <el-col :xs="4" class="hidden-sm-and-up">
      <el-button icon="el-icon-menu" class="menu-button" @click="drawer = true"></el-button>
      <el-drawer title="菜单" :visible.sync="drawer" :with-header="false" size="60%">
        <gan-menu :main="false"></gan-menu>
      </el-drawer>
    </el-col>
  </el-row>
</template>
<script>
import GanMenu from "../layouts/GanMenu.vue";
export default {
  name: "GanHead",
  data() {
    return {
      drawer: false
    };
  },
  components: {
    GanMenu
  }
};
</script>
<style scoped>
@import "~element-ui/lib/theme-chalk/display.css";
.menu-button {
  font-size: 18px;
  padding-left: 12px;
  padding-right: 12px;
}
</style>