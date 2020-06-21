<template>
  <gan-content content-padding="50px 0" max-width="768px">
    <h1 class="text-center">登录</h1>
    <el-form ref="form" :model="form" label-width="80px" label-position="top" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" v-focus></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </gan-content>
</template>
<script>
import Vue from 'vue'
import { Form, FormItem, Input } from 'element-ui'
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

import GanContent from "../layouts/GanContent.vue";
import Cookies from "js-cookie";
import vm from "../main.js";
export default {
  name: "GanLogin",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          },
          {
            min: 3,
            max: 15,
            message: "用户名长度在 3 到 15 个字符",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          { validator: this.validatePassword, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleLogin() {
      let registedUser = localStorage["registedUser"];
      if (registedUser) {
        registedUser = JSON.parse(registedUser);
      } else {
        registedUser = [];
      }
      for (let i of registedUser) {
        if (i.username === this.form.username) {
          if (i.password === this.form.password) {
            Cookies.set("loginUser", i.username, { expires: 7 });
            this.$message.success("登录成功!");
            vm.$emit("user-changed", i.username);
            this.$router.go(-1);
            return;
          } else {
            this.$message.error("密码错误！");
            return;
          }
        }
      }
      this.$message.error("用户名不存在！");
    },
    validatePassword(rule, value, callback) {
      if (value.length < 6 || value.length > 12)
        callback(new Error("密码长度在 6 到 12 个字符"));
      else {
        callback();
      }
    }
  },
  components: {
    GanContent
  }
};
</script>