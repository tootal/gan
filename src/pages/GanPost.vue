<template>
  <gan-content :content-style="{ padding: '40px 0' }">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="主题">
        <el-input v-model="form.topic" v-focus></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.author"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input
          type="textarea"
          :autosize="{ minRows: 8 }"
          v-model="form.content"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handlePost">发表帖子</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </gan-content>
</template>
<script>
import GanContent from "../layouts/GanContent.vue";
export default {
  name: "GanPost",
  data() {
    return {
      form: {
        topic: "",
        author: "",
        content: ""
      }
    };
  },
  methods: {
    handlePost() {
      let data = [];
      let form = this.form;
      if (localStorage["forumData"]) {
        data = JSON.parse(localStorage["forumData"]);
      }
      form.reply = 0;
      form.index = data.length + 1;
      data.push(form);
      localStorage.setItem("forumData", JSON.stringify(data));
      this.$router.push('/forum');
    }
  },
  components: {
    GanContent
  }
};
</script>