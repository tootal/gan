<template>
  <div class="menu">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      class="d-flex justify-content-center hidden-sm-and-down"
    >
      <el-menu-item
        v-for="(value, key) in menus.regular"
        :index="'/' + key"
        :key="key"
        @click="handleMenuClick(key, 'main')"
      >{{ value }}</el-menu-item>
    </el-menu>
    <div v-if="!login">
      <el-button-group class="head-button hidden-sm-and-down">
        <el-button
          v-for="(value, key) in menus.special"
          :key="key"
          @click="handleMenuClick(key, 'main-special')"
        >{{ value }}</el-button>
      </el-button-group>
    </div>
    <div v-else>
      <el-button-group class="head-button hidden-sm-and-down">
        <el-button
          v-for="(value, key) in menus.loginSpecial"
          :key="key"
          @click="handleMenuClick(key, 'main-special')"
        >{{ value }}</el-button>
      </el-button-group>
    </div>
    <div class="head-menu hidden-md-and-up">
      <el-button icon="el-icon-menu" class="menu-button" @click="drawer = true"></el-button>
    </div>
    <div>
      <el-drawer
        title="菜单"
        :visible.sync="drawer"
        :with-header="false"
        ref="drawermenu"
        :modal-append-to-body="false"
      >
        <el-menu :default-active="activeIndex" mode="vertical">
          <el-menu-item
            v-for="(value, key) in menus.regular"
            :index="'/' + key"
            :key="key"
            @click="handleMenuClick(key, 'side')"
          >{{ value }}</el-menu-item>
          <el-divider></el-divider>
          <div v-if="!login">
            <el-menu-item
              v-for="(value, key) in menus.special"
              :key="key"
              :index="'/' + key"
              @click="handleMenuClick(key, 'side-special')"
            >{{ value }}</el-menu-item>
          </div>
          <div v-else>
            <el-menu-item
              v-for="(value, key) in menus.loginSpecial"
              :key="key"
              :index="'/' + key"
              @click="handleMenuClick(key, 'side-special')"
            >{{ value }}</el-menu-item>
          </div>
        </el-menu>
      </el-drawer>
    </div>
  </div>
</template>
<script>
import menus from "../menus.js";
import Cookies from "js-cookie";
import vm from "../main.js";
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
      drawer: false,
      width: document.body.clientWidth,
      menus: menus,
      login: false
    };
  },
  methods: {
    handleMenuChanged() {
      this.$refs.drawermenu.closeDrawer();
    },
    handleLogin(username) {
      if (username) {
        this.menus.loginSpecial.user = username;
        this.login = true;
      } else {
        this.login = false;
        Cookies.remove("loginUser");
      }
    },
    handleMenuClick(key, pos) {
      if (pos === "main" || pos === "side") {
        this.$router.push("/" + key);
      } else if (pos == "main-special" || pos == "side-special") {
        if (key == "user") {
          this.$router.push("/user/" + this.menus.loginSpecial.user);
        } else if (key === "quit") {
          this.handleLogin();
          this.$message.success("已退出当前用户");
        } else {
          this.$router.push("/" + key);
        }
      }
      if (pos.startsWith("side")) {
        this.$refs.drawermenu.closeDrawer();
      }
    }
  },
  computed: {
    activeIndex() {
      let p = this.$route.path;
      return "/" + (p === "/" ? "index" : p.split("/").filter(s => s)[0]);
    }
  },
  mounted() {
    this.handleLogin(Cookies.get("loginUser"));
    this.$nextTick(() => {
      vm.$on("user-changed", this.handleLogin);
    });
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