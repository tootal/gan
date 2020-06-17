import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import './styles/gan.scss'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
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
