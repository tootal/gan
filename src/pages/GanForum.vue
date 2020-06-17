<template>
  <div>
    <el-table :data="tableData" class="forum-table">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="topic" label="主题" v-slot="{ row }">
        <router-link :to="'/forum/' + row.index" class="topic-link">{{ row.topic }}</router-link>
      </el-table-column>
      <el-table-column prop="author" label="作者" width="180" v-slot="{ row }">
        <router-link :to="'/user/' + row.author" class="topic-link">{{ row.author }}</router-link>
      </el-table-column>
      <el-table-column prop="reply" label="回复" width="180" sortable></el-table-column>
    </el-table>
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
  }
};
</script>
<style scoped>
.forum-table {
  max-width: 1024px;
  margin: 20px auto;
}
.el-table__row:hover {
  cursor: pointer;
}
.topic-link {
  text-decoration: none;
  color: black;
}
</style>