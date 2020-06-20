<template>
  <a :href="href" target="_blank">
    <el-card class="gan-video" :body-style="{ padding: 0 }">
      <div class="video-content">
        <el-image :src="imgSrc" lazy>
          <div slot="error" style="font-size: 100px" class="mx-auto">
            <i class="el-icon-video-play"></i>
          </div>
        </el-image>
        <div v-if="length" class="time-tag">{{length}}</div>
      </div>
      <div>{{ desc }}</div>
    </el-card>
  </a>
</template>

<script>
export default {
  name: "GanVideo",
  props: {
    imgSrc: {
      type: String
    },
    desc: {
      type: String,
      default: "视频描述"
    },
    length: {
      type: String
    },
    href: {
      type: String,
      default: "/"
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  display: block;
  margin: 10px 0;
}
.el-image:hover {
  opacity: .8;
}
.el-card {
  width: 240px;
  height: 200px;
}
.video-content {
  position: relative;
  width: 238px;
  height: 148px;
}
.time-tag {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px 0 0 0;
  color: #fff;
}
</style>