<template>
  <div class="head">
    <div class="head-bg"></div>
    <div class="head-logo">
      <router-link to="/">
        <img
          :src="require('../assets/danboard.png')"
          alt="Danboard"
          class="fit-contain"
          height="50px"
        />
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "GanHead"
};
</script>
<style scoped>
@import "~element-ui/lib/theme-chalk/display.css";

.head-bg {
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  background-color: white;
  z-index: 9;
  box-shadow: 0 0 5px #888;
}
.head-logo {
  position: fixed;
  top: 0;
}

.head-logo,
.head-button {
  z-index: 11;
}
</style>