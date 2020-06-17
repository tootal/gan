<template>
  <el-row type="flex" align="middle" class="h-100">
    <el-col :span="2" :sm="4" :xs="4" class="h-100">
      <router-link to="/">
      <img :src="require('../assets/danboard.png')" alt="Danboard" class="h-100 fit-contain"/>
      </router-link>
    </el-col>
    <el-col :span="18" :sm="17" :xs="16">
      <div></div>
    </el-col>
    <el-col :span="4" class="text-right hidden-sm-and-down" style="padding-right: 20px">
      <el-button-group>
        <el-button>登录</el-button>
        <el-button type="primary" plain>注册</el-button>
      </el-button-group>
    </el-col>
    <el-col :sm="3" :xs="4" class="hidden-md-and-up">
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