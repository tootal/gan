<template>
  <gan-content content-padding="50px 0" max-width="768px">
    <h1 class="text-center">注册</h1>
    <el-form ref="form" :model="form" label-width="80px" label-position="top" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" v-focus></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleRegister">注册</el-button>
      </el-form-item>
    </el-form>
  </gan-content>
</template>
<script>
import GanContent from "../layouts/GanContent.vue";
export default {
  name: "GanRegister",
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
          },
          { validator: this.validateUsername, trigger: "blur" }
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
    validateUsername(rule, value, callback) {
      let registedUser = localStorage["registedUser"];
      if (registedUser) {
        registedUser = JSON.parse(registedUser);
      } else {
        registedUser = [];
      }
      for (let i of registedUser) {
        if (i.username === value) {
          callback(new Error("该用户名已注册"));
          return;
        }
      }
      callback();
    },
    validatePassword(rule, value, callback) {
      if (value.length < 6 || value.length > 12)
        callback(new Error("密码长度在 6 到 12 个字符"));
      else {
        /*if (!/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,20})$/.test(value))
            callback(new Error('密码必须同时包含字母和数字'));
          else */ callback();
      }
    },
    handleRegister() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          let registedUser = localStorage["registedUser"];
          if (registedUser) {
            registedUser = JSON.parse(registedUser);
          } else {
            registedUser = [];
          }
          registedUser.push({
            username: this.form.username,
            password: this.form.password
          });
          localStorage.setItem("registedUser", JSON.stringify(registedUser));
          this.$message({
            message: "注册成功。",
            type: "success"
          });
        } else {
          return false;
        }
      });
    }
  },
  components: {
    GanContent
  }
};
</script>