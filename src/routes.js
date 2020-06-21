import GanIndex from './pages/GanIndex.vue'

const GanForum = () => import(/* webpackChunkName: "forum" */'./pages/GanForum.vue')
const GanLocation = () => import(/* webpackChunkName: "location" */'./pages/GanLocation.vue')
const GanError = () => import(/* webpackChunkName: "other" */'./pages/GanError.vue')
const GanDetail = () => import(/* webpackChunkName: "forum" */'./pages/GanDetail.vue')
const GanPost = () => import(/* webpackChunkName: "other" */'./pages/GanPost.vue')
const GanAbout = () => import(/* webpackChunkName: "markdown" */'./pages/GanAbout.vue')
const GanRegister = () => import(/* webpackChunkName: "other" */'./pages/GanRegister.vue')
const GanLogin = () => import(/* webpackChunkName: "other" */'./pages/GanLogin.vue')
const GanHistory = () => import(/* webpackChunkName: "markdown" */'./pages/GanHistory.vue')
const GanCulture = () => import(/* webpackChunkName: "markdown" */'./pages/GanCulture.vue')
const GanEconomy = () => import(/* webpackChunkName: "markdown" */'./pages/GanEconomy.vue')
const GanUser = () => import(/* webpackChunkName: "other" */'./pages/GanUser.vue')

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
    meta: {
      keepAlive: false
    }
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