<template>
  <div class="menu">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      class="d-flex justify-content-center hidden-sm-and-down"
      :router="true"
    >
      <el-menu-item
        v-for="(value, key) in menus.regular"
        :index="'/' + key"
        :key="key"
        @click="$emit('menu-changed')"
      >{{ value }}</el-menu-item>
    </el-menu>
    <el-button-group class="head-button hidden-sm-and-down">
      <el-button
        v-for="(value, key) in menus.special"
        :key="key"
        @click="$router.push('/' + key)"
      >{{ value }}</el-button>
    </el-button-group>
    <div class="head-menu hidden-md-and-up">
      <el-button icon="el-icon-menu" class="menu-button" @click="drawer = true"></el-button>
    </div>
    <div>
      <el-drawer title="菜单" :visible.sync="drawer" :with-header="false" ref="drawermenu" :modal-append-to-body="false">
        <el-menu :default-active="activeIndex" mode="vertical" :router="true">
          <el-menu-item
            v-for="(value, key) in menus.regular"
            :index="'/' + key"
            :key="key"
            @click="$refs.drawermenu.closeDrawer()"
          >{{ value }}</el-menu-item>
          <el-divider></el-divider>
          <el-menu-item
            v-for="(value, key) in menus.special"
            :key="key"
            :index="'/' + key"
            @click="$refs.drawermenu.closeDrawer()"
          >{{ value }}</el-menu-item>
        </el-menu>
      </el-drawer>
    </div>
  </div>
</template>
<script>
import menus from "../menus.js";
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
      menus: menus,
      drawer: false,
      width: document.body.clientWidth
    };
  },
  methods: {
    handleMenuChanged() {
      this.$refs.drawermenu.closeDrawer();
    }
  },
  computed: {
    activeIndex() {
      let p = this.$route.path;
      return "/" + (p === "/" ? "index" : p.split("/").filter(s => s)[0]);
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
.menu-button {
  font-size: 18px;
  padding-left: 12px;
  padding-right: 12px;
}
</style>