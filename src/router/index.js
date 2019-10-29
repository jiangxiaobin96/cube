import Vue from 'vue'
import Router from 'vue-router'
import cubeVue from '@/components/cubeVue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cubeVue',
      component: cubeVue
    }
  ]
})
