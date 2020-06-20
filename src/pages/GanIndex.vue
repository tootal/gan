<template>
  <div class="index">
    <gan-content card-padding="0">
      <el-carousel :height="autoHeight" indicator-position="none">
        <el-carousel-item v-for="i in pics" :key="i">
          <el-image
            :src="require('../assets/scenic/' + i + '.jpg')"
            :alt="i"
            :title="i"
            style="width: 100%; height: 100%"
          />
        </el-carousel-item>
      </el-carousel>
    </gan-content>
    <div class="videos">
      <div class="videos-content">
        <gan-video
          v-for="i in 22" :key="i"
          href="https://www.bilibili.com/video/BV1tt411x7K6"
          :img-src="require('../assets/video/BV1tt411x7K6.jpg')"
          desc="♡家乡Vlog 我回家啦! 江西赣州/各种特色小吃/朋友聚会/陪伴家人"
          length="13:41"></gan-video>
      </div>
    </div>
  </div>
</template>
<script>
import GanContent from "../layouts/GanContent.vue";
import GanVideo from "../components/GanVideo.vue";
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
    GanContent,
    GanVideo
  }
};
</script>
<style scoped>
.videos {
  background-color: #f6f6f6;
}
.videos-content {
  margin: 0 auto;
  padding: 20px 0;
  max-width: 1024px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 240px);
}
.gan-video {
  margin: 5px 0px;
}
</style>