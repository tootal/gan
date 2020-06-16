<template>
  <div>
    <el-container>
      <el-header height="50px"></el-header>
      <el-main class="border border-primary"></el-main>
      <el-footer height="90px">
        <gan-foot></gan-foot>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import GanFoot from './GanFoot.vue'
export default {
  name: 'GanMain',
  components: {
    GanFoot,
  }
}
</script>