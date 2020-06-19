<template>
  <div>
    <gan-content>
      用户{{ $route.params.id }}
    </gan-content>
  </div>
</template>
<script>
import GanContent from "../layouts/GanContent.vue";
export default {
  name: "GanUser",
  components: {
    GanContent
  },
};
</script>
