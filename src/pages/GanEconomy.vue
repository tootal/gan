<template>
  <gan-content>
    <vue-markdown>{{economyDoc}}</vue-markdown>
  </gan-content>
</template>
<script>
import GanContent from "../layouts/GanContent.vue";
import VueMarkdown from "vue-markdown";
import economyDoc from '../assets/economy.md';
export default {
  name: "GanHistory",
  data() {
    return  {
      economyDoc: economyDoc
    }
  },
  components: {
    GanContent,
    VueMarkdown
  }
};
</script>