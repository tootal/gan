<template>
  <gan-content :content-style="{ padding: '60px 0' }">
    <h1 class="text-center">登录</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.user" v-focus></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </gan-content>
</template>
<script>
import GanContent from "../layouts/GanContent.vue";
export default {
  name: "GanLogin",
  data() {
    return {
      form: {
        user: "",
        password: "",
      }
    };
  },
  methods: {
    handleLogin() {
      
    }
  },
  components: {
    GanContent
  }
};
</script>