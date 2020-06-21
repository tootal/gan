import Vue from 'vue'
import VueRouter from 'vue-router'
import BaiduMap from 'vue-baidu-map'
import App from './App.vue'
import './styles/gan.scss'
import routes from './routes.js'
import directives from './directives.js'
import './element.js'
Vue.use(VueRouter)
Vue.use(BaiduMap, {
  ak: '8PaUE4G35Llhnl3CHPTBhqu6oK2aIHXD'
})
Vue.config.productionTip = false

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}
const router = new VueRouter({
  mode: process.env.VUE_APP_ROUTER_MODE || 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes
})

for (let d in directives) {
  Vue.directive(d, directives[d]);
}

var _hmt = _hmt || [];
window._hmt = _hmt;
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?4e69e35683f7297b606b84516aacefbf";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

router.beforeEach((to, from, next) => {
  if (_hmt) {
    if (to.path) {
      _hmt.push(['_trackPageview', to.fullPath]);
    }
  }
  next();
});

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
window.app = app

export default app;