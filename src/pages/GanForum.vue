<template>
  <div class="forum">
    <el-card class="forum-card">
      <el-table :data="tableData" class="forum-table">
        <el-table-column type="index" min-width="5px"></el-table-column>
        <el-table-column prop="topic" label="主题" min-width="160px" v-slot="{ row }">
          <router-link :to="'/forum/' + row.index" class="topic-link">{{ row.topic }}</router-link>
        </el-table-column>
        <el-table-column prop="author" label="作者" min-width="60px" v-slot="{ row }">
          <router-link :to="'/user/' + row.author" class="topic-link">{{ row.author }}</router-link>
        </el-table-column>
        <el-table-column prop="reply" label="回复" min-width="60px" sortable></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
import {
  StatementGenerator,
  QuestionGenerator
} from "../utils/QuestionGenerator.js";
import { ChineseNameGenerator } from "../utils/ChineseNameGenerator.js";
export default {
  name: "GanForum",
  computed: {
    tableData: function() {
      if (localStorage["forumData"]) {
        return JSON.parse(localStorage["forumData"]);
      }
      let d = [];
      for (let i = 0; i < 3 + Math.floor(60 * Math.random()); i++) {
        let o = {};
        o.index = i + 1;
        o.statement = StatementGenerator();
        o.topic = QuestionGenerator(o.statement);
        o.author = ChineseNameGenerator();
        o.reply = Math.floor(50 * Math.random());
        d.push(o);
      }
      return d;
    }
  },
  mounted() {
    this.$root.forumData = this.tableData;
    localStorage.setItem("forumData", JSON.stringify(this.tableData));
  }
};
</script>
<style scoped>
.forum {
  background-color: #f6f6f6;
  padding-top: 10px;
  padding-bottom: 10px;
}
.forum-card {
  max-width: 1024px;
  margin: 0 auto;
}
.el-table {
  margin-top: 0;
  margin-bottom: 0;
}
.el-table__row:hover {
  cursor: pointer;
}
.topic-link {
  text-decoration: none;
  color: black;
}
</style>