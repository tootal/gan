<template>
  <div>
    <el-container>
      <el-header height="50px">
        <gan-head></gan-head>
      </el-header>
      <el-main class="border border-primary" style="padding-bottom: 500px"></el-main>
      <el-footer height="90px">
        <gan-foot></gan-foot>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import GanHead from './GanHead.vue'
import GanFoot from './GanFoot.vue'
export default {
  name: 'GanMain',
  components: {
    GanHead,
    GanFoot,
  }
}
</script>