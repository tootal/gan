<template>
  <div :style="contentStyle">
    <el-card :style="cardStyle" class="content-card" :body-style="cardBodyStyle">
      <slot></slot>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "GanContent",
  props: {
    cardStyle: {
      type: Object,
      default() {
        return {
          maxWidth: "1024px",
          margin: "0 auto"
        };
      }
    },
    cardBodyStyle: {
      type: Object,
      default() {
        return {
          padding: "20px"
        };
      }
    },
    contentStyle: {
      type: Object,
      default() {
        return {
          backgroundColor: "#f6f6f6",
          paddingTop: "10px",
          paddingBottom: "10px"
        };
      }
    }
  }
};
</script>