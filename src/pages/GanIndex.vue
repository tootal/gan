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
      <div class="videos-container">
      <div v-for="(value, key) in videos" :key="key">
        <h2> {{ key }}</h2>
      <div class="videos-content">
        <div v-for="(v, i) in value" :key="i">
        <gan-video
          :href="v.bv ? ('https://www.bilibili.com/video/' + v.bv) : v.href"
          :img-src="require('../assets/video/' + (v.bv ? (v.bv + '.jpg') : v.img))"
          :desc="v.desc"
          :length="v.length"
        ></gan-video>
        </div>
      </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import GanContent from "../layouts/GanContent.vue";
import GanVideo from "../components/GanVideo.vue";
import videos from './videos.js';
export default {
  name: "GanIndex",
  data() {
    return {
      videos: videos,
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
h2 {
  margin: 0;
}
.videos-container {

  margin: 0 auto;
  max-width: 1024px;
}
.videos-content {
  padding: 20px 0;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 182px);
}
.gan-video {
  margin: 5px 0px;
}
</style>