import Vue from 'vue'
import Router from 'vue-router'
import SourceComponent from '@/components/main/SourceComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SourceComponent',
      component: SourceComponent
    }
  ]
})
