<template>
  <div>
      <el-table :data="tableData" class="forum-table">
    <el-table-column prop="topic" label="主题"></el-table-column>
    <el-table-column prop="author" label="作者" width="180"></el-table-column>
    <el-table-column prop="reply" label="回复" width="180"></el-table-column>
  </el-table>
  </div>
</template>
<script>
import {StatementGenerator, QuestionGenerator} from '../utils/QuestionGenerator.js';
import {ChineseNameGenerator} from '../utils/ChineseNameGenerator.js';
export default {
  name: "GanForum",
  computed: {
    tableData: function() {
      let d = [];
      for (let i = 0; i < 3 + Math.floor(60 * Math.random()); i++) {
        let o = {};
        o.statement = StatementGenerator();
        o.topic = QuestionGenerator(o.statement);
        o.author = ChineseNameGenerator();
        o.reply = Math.floor(50 * Math.random());
        d.push(o);
      }
      return d;
    }
  }
};
</script>
<style scoped>
.forum-table {
  max-width: 1024px;
  margin: 20px auto;
}
</style>