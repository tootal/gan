import Vue from 'vue'
import VueRouter from 'vue-router'
import BaiduMap from 'vue-baidu-map'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import './styles/gan.scss'
import routes from './routes.js'
import directives from './directives.js'

Vue.use(VueRouter)
Vue.use(BaiduMap, {
  ak: '8PaUE4G35Llhnl3CHPTBhqu6oK2aIHXD'
})
Vue.use(ElementUI)
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

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
