import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AboutUs from '@/components/AboutUs'
import A from '@/components/AboutUs'
import B from '@/components/A'
import C from '@/components/B'
import D from '@/components/C'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
     },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUs
    },
    {
      path: '/a',
      name: 'a',
      component: A
    },
    {
      path: '/b',
      name: 'b',
      component:B 
    },
    {
      path: '/c',
      name: 'c',
      component:C 
    },
    {
      path: '/d',
      name: 'd',
      component:D 
    }
    
  ],
  mode: 'history'

})
