import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'

const Index = resolve => require.ensure([], () => resolve(require('../views/login/index')), 'Index')
const Login = resolve => require.ensure([], () => resolve(require('../views/login/index')), 'Login')
const Signup = resolve => require.ensure([], () => resolve(require('../views/signup/index')), 'Signup')
const Authorize = resolve => require.ensure([], () => resolve(require('../views/authorize/index')), 'Authorize')

Vue.use(Router)

/**
  * icon : the icon show in the sidebar
  * hidden : if hidden:true will not show in the sidebar
  * redirect : if redirect:noredirect will not redirct in the levelbar
  * noDropdown : if noDropdown:true will not has submenu
  * meta : { role: ['admin'] }  will control the page role
  **/

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    hidden: true,
    children: [{
      path: '/',
      component: Index,
      meta: { title: '午安网 - 过你想过的生活' }
    }]
  },
  {
    path: '/login',
    component: Layout,
    children: [{ path: '', name: 'login', component: Login, meta: { title: '登录 - 午安网 - 过你想过的生活' } }]
  },
  {
    path: '/signup',
    component: Layout,
    children: [{ path: '', name: 'signup', component: Signup, meta: { title: '注册 - 午安网 - 过你想过的生活' } }]
  },
  {
    path: '/authorize',
    component: Authorize
  },
  {
    path: '*',
    redirect: '/404'
  }
]

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
