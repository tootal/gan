import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import './styles/gan.scss'

const GanIndex = () => import('./pages/GanIndex.vue')
const GanForum = () => import('./pages/GanForum.vue')
const GanLocation = () => import('./pages/GanLocation.vue')

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: process.env.VUE_APP_ROUTER_MODE || 'history',
  routes: [
    {
      path: '/index',
      component: GanIndex,
      name: 'index',
      alias: '/'
    },
    {
      path: '/forum',
      component: GanForum,
      name: 'forum'
    },
    {
      path: '/location',
      component: GanLocation,
      name: 'location'
    }
  ]
})
new Vue({
  el: '#app',
  router,
  data: {
    menus: {
      index: "首页",
      forum: "论坛",
      location: "位置",
      economy: "经济",
      education: "教育",
      culture: "文化",
      history: "历史",
      about: "关于"
    }
  },
  render: h => h(App),
})
