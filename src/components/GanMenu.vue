<template>
  <el-menu
    :default-active="activeIndex"
    :mode="main ? 'horizontal' : 'vertical'"
    :class="main ? mainClass : ''"
    :router="true"
  >
    <el-menu-item
      v-for="(value, name) in this.$root.menus"
      :index="'/' + name"
      :key="name"
      @click="$emit('menu-changed')"
    >{{ value }}</el-menu-item>
    <div v-if="main"></div>
    <div v-else>
      <el-divider></el-divider>
      <el-menu-item index="/post" v-if="isShowPost" @click="$emit('menu-changed')">发帖</el-menu-item>
      <el-menu-item index="/login" @click="$emit('menu-changed')">登录</el-menu-item>
      <el-menu-item index="/register" @click="$emit('menu-changed')">注册</el-menu-item>
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
      mainClass: ["d-flex", "justify-content-center", "hidden-sm-and-down"]
    };
  },
  computed: {
    activeIndex() {
      let p = this.$route.path;
      return "/" + (p === "/" ? "index" : p.split("/").filter(s => s)[0]);
    },
    isShowPost() {
      return ["/forum", "/post"].includes(this.activeIndex);
    }
  }
};
</script>
<style scoped>
.el-menu-item {
  font-size: 15px;
  height: 50px;
  line-height: 50px;
}
.is-active {
  font-weight: bold;
}
</style>