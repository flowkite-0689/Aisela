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
      component: HomeView
    },
    {
      path: '/plot',
      name: 'plot',
      component: PlotView
    },
    {
      path: '/characters',
      name: 'characters',
      component: CharacterView
    },
    {
      path: '/world',
      name: 'world',
      component: WorldView
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: TimelineView
    }
  ]
})

export default router
