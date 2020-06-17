<template>
  <div>
    <div id="map"></div>
  </div>
</template>
<script>
export default {
  name: "GanLocation",
  mounted() {
    /* eslint-disable */
    var map = new BMapGL.Map("map");
    map.centerAndZoom(new BMapGL.Point(115.3, 25.07), 8.5);
    map.enableScrollWheelZoom(true);
    map.setMapType(BMAP_EARTH_MAP);
    var bdy = new BMapGL.Boundary();
    bdy.get('赣州市', function(r) {
      var ply = new BMapGL.Polygon(r.boundaries[0]);
      map.addOverlay(ply);
    });
    /* eslint-enable */
  }
};
</script>
<style scoped>
#map {
  height: 700px;
}
</style>
<style>
.anchorBL {
  display: none;
}
</style>