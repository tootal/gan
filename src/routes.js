import GanIndex from './pages/GanIndex.vue'
import GanForum from './pages/GanForum.vue'
import GanLocation from './pages/GanLocation.vue'
import GanError from './pages/GanError.vue'
import GanDetail from './pages/GanDetail.vue'
import GanPost from './pages/GanPost.vue'

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
    name: 'forum'
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
    path: '*',
    component: GanError,
    name: 'error'
  }
]

export default routes;