<template>
  <div class="foot text-center">
    <p>©2020 章又贡 版权所有</p>
    <p>本站图文内容版权属于原创作者，未经许可不得转载</p>
  </div>
</template>

<script>
export default {
  name: "GanFooter"
};
</script>
<style scoped>
p {
  margin: 0;

}
.foot {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0 2px #888;
}
</style>