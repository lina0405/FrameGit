import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Layout from './views/Layout.vue'
import Setting from './views/Setting.vue'
import ShopInfo from './views/ShopInfo.vue'
import ShopClass from './views/ShopClass.vue'
import ShopList from './views/ShopList.vue'
import Code from './views/Code.vue'
import ActionMember from './views/ActionMember.vue'
import ActionList from './views/ActionList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'index',
      component: Layout
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/shopClass',
      name: 'shopClass',
      component: ShopClass
    },
    {
      path: '/shopList',
      name: 'shopList',
      component: ShopList
    },
    {
      path: '/shopInfo/:id',
      name: 'shopInfo',
      component: ShopInfo
    },
    {
      path: '/code',
      name: 'code',
      component: Code
    },
    {
      path: '/actionMember/:id',
      name: 'actionMember',
      component: ActionMember
    },
    {
      path: '/actionList',
      name: 'actionList',
      component: ActionList
    },
  ]
})
