<template>
  <div class="head">
    <div class="head-bg"></div>
    <div class="head-logo">
      <router-link to="/">
        <img
          :src="require('../assets/danboard.png')"
          alt="Danboard"
          class="fit-contain"
          height="50px"
        />
      </router-link>
    </div>
    <div class="head-button hidden-sm-and-down">
      <el-button-group>
        <el-button @click="handleLoginClick">登录</el-button>
        <el-button type="primary" plain @click="handleRegisterClick">注册</el-button>
      </el-button-group>
    </div>
    <div class="head-menu hidden-md-and-up">
      <el-button icon="el-icon-menu" class="menu-button" @click="drawer = true"></el-button>
    </div>
    <el-drawer title="菜单" :visible.sync="drawer" :with-header="false" size="60%">
      <gan-menu :main="false"></gan-menu>
    </el-drawer>
  </div>
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
  methods: {
    handleLoginClick() {
      this.$router.push('/login');
    },
    handleRegisterClick() {
      this.$router.push('/register');
    }
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
.head-bg {
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  background-color: white;
  z-index: 9;
}
.head-logo {
  position: fixed;
  top: 0;
}
.head-button {
  position: fixed;
  top: 5px;
  right: 10px;
}
.head-menu {
  position: fixed;
  top: 2px;
  right: 10px;
}

.head-logo, .head-button, .head-menu {
  z-index: 11;
}

</style>