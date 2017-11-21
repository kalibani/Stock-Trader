import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PortFolio from '@/components/portfolio/Portfolio'
import Stocks from '@/components/stocks/Stocks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'PortFolio',
      component: PortFolio
    },
    {
      path: '/stocks',
      name: 'Stocks',
      component: Stocks
    }
  ],
  mode: 'history'
})
