<template>
  <el-menu :default-active="activeIndex" 
    :mode="main ? 'horizontal' : 'vertical'" 
    :class="main ? mainClass : ''"
    :router="true">
    <el-menu-item v-for="(value, name) in this.$root.menus" 
      :index="'/' + name" :key="name">{{ value }}</el-menu-item>
    <div v-if="!main">
      <el-divider></el-divider>
      <el-menu-item index="login">登录</el-menu-item>
      <el-menu-item index="register">注册</el-menu-item>
    </div>
  </el-menu>
</template>
<script>
export default {
  name: "GanMenu",
  props: {
    main: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      mainClass: [
        'd-flex',
        'justify-content-center',
        'hidden-sm-and-down'
      ],
    }
  },
  computed: {
    activeIndex() {
      // console.log(this.$route.path);
      return this.$route.name == '/' ? '/index' : this.$route.path;
    }
  }
};
</script>
<style scoped>
.el-menu-item {
  height: 50px;
  line-height: 50px;
}
</style>