<template>
  <el-row type="flex" align="middle" class="h-100">
    <el-col :span="2" :sm="4" :xs="4" class="h-100">
      <el-image :src="require('../assets/danboard.png')" 
        alt="Danboard" fit="contain" class="h-100"></el-image>
    </el-col>
    <el-col :span="18" :sm="12" :xs="6" class="border">
      <div>中间</div>
    </el-col>
    <el-col :span="4" :sm="8" :xs="14" class="text-center">
      <el-button-group>
        <el-button>登录</el-button>
        <el-button type="primary" plain>注册</el-button>
      </el-button-group>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "GanHead"
};
</script>