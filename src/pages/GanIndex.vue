<template>
  <gan-layout>
    <gan-body></gan-body>
  </gan-layout>
</template>
<script>
import GanLayout from "../layouts/GanLayout.vue";
import GanBody from "../layouts/GanBody.vue";
export default {
  name: "GanIndex",
  components: {
    GanLayout,
    GanBody
  }
};
</script>