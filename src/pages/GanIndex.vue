<template>
  <div>
    <el-carousel
      :height="autoHeight"
      style="max-width: 1024px"
      class="mx-auto"
      indicator-position="outside"
    >
      <el-carousel-item v-for="i in pics" :key="i">
        <el-image
          :src="require('../assets/scenic/' + i + '.jpg')"
          :alt="i"
          :title="i"
          style="width: 100%; height: 100%"
        />
      </el-carousel-item>
    </el-carousel>
    <p>测试文字</p>
    <p>测试文字</p>
    <p>测试文字</p>
    <p>测试文字</p>
  </div>
</template>
<script>
export default {
  name: "GanIndex",
  data() {
    return {
      width: document.body.clientWidth,
      pics: ["七里窑", "东河浮桥", "八境台", "翠微峰", "赣州中央公园", "郁孤台"]
    };
  },
  mounted() {
    console.log(document.body.clientWidth);
  },
  computed: {
    autoHeight() {
      if (this.width <= 1024) return this.width / 4 + "px";
      else return 1024 / 4 + "px";
    }
  }
};
</script>
<style scoped>
p {
  text-align: center;
  margin-top: 400px;
  margin-bottom: 400px;
}
</style>