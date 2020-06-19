<template>
  <gan-content>
    <vue-markdown>{{cultureDoc}}</vue-markdown>
  </gan-content>
</template>
<script>
import GanContent from "../layouts/GanContent.vue";
import VueMarkdown from "vue-markdown";
import cultureDoc from '../assets/culture.md';
export default {
  name: "GanHistory",
  data() {
    return  {
      cultureDoc: cultureDoc
    }
  },
  components: {
    GanContent,
    VueMarkdown
  }
};
</script>