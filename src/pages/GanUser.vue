<template>
  <div>
    <gan-content max-width="200px" content-padding="95px 0" card-padding="120px 0">
      <div class="text-center">
        <div>
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div>
        <div class="user-name">{{ $route.params.id }}</div>
      </div>
    </gan-content>
  </div>
</template>
<script>
import GanContent from "../layouts/GanContent.vue";
export default {
  name: "GanUser",
  components: {
    GanContent
  }
};
</script>
<style scoped>
.user-name {
  font-weight: bold;
}
</style>