<template>
  <gan-content :card-body-style="{ padding: '0' }">
    <el-carousel :height="autoHeight" indicator-position="outside">
      <el-carousel-item v-for="i in pics" :key="i">
        <el-image
          :src="require('../assets/scenic/' + i + '.jpg')"
          :alt="i"
          :title="i"
          lazy
          style="width: 100%; height: 100%"
        />
      </el-carousel-item>
    </el-carousel>
    <p v-for="i in 4" :key="i" style="padding: 400px 0" class="text-center">测试文字{{i}}</p>
  </gan-content>
</template>
<script>
import GanContent from "../layouts/GanContent.vue";
export default {
  name: "GanIndex",
  data() {
    return {
      width: document.body.clientWidth,
      pics: ["七里窑", "东河浮桥", "八境台", "翠微峰", "赣州中央公园", "郁孤台"]
    };
  },
  computed: {
    autoHeight() {
      if (this.width <= 1024) return this.width / 4 + "px";
      else return 1024 / 4 + "px";
    }
  },
  components: {
    GanContent
  }
};
</script>