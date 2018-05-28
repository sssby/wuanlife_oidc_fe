import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'

const Index = resolve => require.ensure([], () => resolve(require('../views/login/index')), 'Index')
const Login = resolve => require.ensure([], () => resolve(require('../views/login/index')), 'Login')
const Signup = resolve => require.ensure([], () => resolve(require('../views/signup/index')), 'Signup')
const personalData = resolve => require.ensure([], () => resolve(require('../views/personalData/index')), 'personalData')
const Authorize = resolve => require.ensure([], () => resolve(require('../views/authorize/index')), 'Authorize')

const userData = resolve => require.ensure([], () => resolve(require('../views/personalData/userData/index')), 'userData')
const FindPsw = resolve => require.ensure([], () => resolve(require('../views/findpsw/index')), 'FindPsw') // 找回密码
const Changepsw = resolve => require.ensure([], () => resolve(require('../views/changepsw/index')), 'Changepsw') // 修改密码

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
    children: [{
      path: '/Login',
      component: Login,
      meta: { title: '午安网 - 过你想过的生活' }
    }]
  },
  {
    path: '/signup',
    component: Layout,
    children: [{
      path: '/Signup',
      component: Signup,
      meta: { title: '午安网 - 过你想过的生活' }
    }]
  },
  {
    path: '/authorize',
    component: Authorize
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/findpsw',
    name: 'findpsw',
    component: Layout,
    redirect: '/findpsw/index',
    hidden: true,
    children: [{ path: 'index', component: FindPsw }]
  },
  {
    path: '/changepsw',
    name: 'changepsw',
    component: Layout,
    redirect: '/changepsw/index',
    hidden: true,
    children: [{ path: 'index', component: Changepsw, meta: { title: '修改密码 - 午安网 - 过你想过的生活' } }]
  }
]

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
