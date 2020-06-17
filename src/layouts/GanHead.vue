<template>
  <el-row type="flex" align="middle" class="h-100">
    <el-col :span="2" :xs="4" class="h-100">
      <el-image :src="require('../assets/danboard.png')" 
        alt="Danboard" fit="contain" class="h-100"></el-image>
    </el-col>
    <el-col :span="18" :xs="16" class="border">
      <div>中间</div>
    </el-col>
    <el-col :span="4">
      <div>右边</div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "GanHead"
};
</script>