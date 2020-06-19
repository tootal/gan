import GanIndex from './pages/GanIndex.vue'
import GanForum from './pages/GanForum.vue'
import GanLocation from './pages/GanLocation.vue'
import GanError from './pages/GanError.vue'
import GanDetail from './pages/GanDetail.vue'
import GanPost from './pages/GanPost.vue'
import GanAbout from './pages/GanAbout.vue'
import GanRegister from './pages/GanRegister.vue'
import GanLogin from './pages/GanLogin.vue'
import GanHistory from './pages/GanHistory.vue'
import GanCulture from './pages/GanCulture.vue'
import GanEconomy from './pages/GanEconomy.vue'
import GanUser from './pages/GanUser.vue'

let routes = [
  {
    path: '/index',
    component: GanIndex,
    name: 'index',
    alias: '/'
  },
  {
    path: '/forum',
    component: GanForum,
    name: 'forum',
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/forum/:id',
    component: GanDetail,
    name: 'detail',
  },
  {
    path: '/post',
    component: GanPost,
    name: 'post',
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/location',
    component: GanLocation,
    name: 'location'
  },
  {
    path: '/about',
    component: GanAbout,
    name: 'about'
  },
  {
    path: '/register',
    component: GanRegister,
    name: 'register',
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/login',
    component: GanLogin,
    name: 'login',
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/user/:id',
    component: GanUser,
    name: 'user',
  },
  {
    path: '/history',
    component: GanHistory,
    name: 'history',
  },
  {
    path: '/culture',
    component: GanCulture,
    name: 'culture',
  },
  {
    path: '/economy',
    component: GanEconomy,
    name: 'economy',
  },
  {
    path: '*',
    component: GanError,
    name: 'error'
  }
]

export default routes;