import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlotView from '../views/PlotView.vue'
import CharacterView from '../views/CharacterView.vue'
import WorldView from '../views/WorldView.vue'
import TimelineView from '../views/TimelineView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: '首页' }
    },
    {
      path: '/plot',
      name: 'plot',
      component: PlotView,
      meta: { title: '剧情大纲' }
    },
    {
      path: '/characters',
      name: 'characters',
      component: CharacterView,
      meta: { title: '人物设定' }
    },
    {
      path: '/world',
      name: 'world',
      component: WorldView,
      meta: { title: '世界观' }
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: TimelineView,
      meta: { title: '时间线' }
    }
  ]
})

export default router
