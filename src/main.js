import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import './styles/gan.scss'
import GanIndex from './pages/GanIndex.vue'
import GanForum from './pages/GanForum.vue'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: GanIndex,
      name: 'index'
    },
    {
      path: '/forum',
      component: GanForum,
      name: 'forum'
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
