import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Alunos from '../views/Alunos.vue'
import Professores from '../views/Professores.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/alunos',
    name: 'Alunos',
    component: Alunos
  },
  {
    path: '/professores',
    name: 'Professores',
    component: Professores
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
