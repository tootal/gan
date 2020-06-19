<template>
  <gan-content>
    <vue-markdown>{{historyDoc}}</vue-markdown>
  </gan-content>
</template>
<script>
import GanContent from "../layouts/GanContent.vue";
import VueMarkdown from "vue-markdown";
import historyDoc from '../assets/history.md';
export default {
  name: "GanHistory",
  data() {
    return  {
      historyDoc: historyDoc
    }
  },
  components: {
    GanContent,
    VueMarkdown
  }
};
</script>