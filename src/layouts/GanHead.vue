<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="border border-primary">这里是网页头部</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'GanHead',
}
</script>
<style scoped>
.border {
  border: 1px solid #dee2e6!important;
}
.border-primary {
  border-color: #007bff!important;
}
</style>