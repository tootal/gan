<template>
  <div id="app">
    <p>这里是首页</p>
    <el-button>测试Element按钮</el-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'element-ui'
Vue.use(Button)
export default {
  name: 'App',
}
</script>
