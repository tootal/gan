<template>
  <div>
    <baidu-map id="map" :center="center" :zoom="zoom" @ready="handler"></baidu-map>
  </div>
</template>
<script>
export default {
  name: "GanLocation",
  data() {
    return {
      center: {
        lng: 115.3,
        lat: 25.07
      },
      zoom: 8.5
    };
  },
  methods: {
    handler({ BMap, map }) {
      map.enableScrollWheelZoom(true);
      var bdy = new BMap.Boundary();
      bdy.get("赣州市", function(r) {
        var ply = new BMap.Polygon(r.boundaries[0], {
          fillOpacity: 0.1
        });
        map.addOverlay(ply);
      });
    }
  }
};
</script>
<style scoped>
#map {
  height: 700px;
}
</style>
<style>
/* .anchorBL {
  display: none;
} */
</style>