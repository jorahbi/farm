import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index/index.vue'
import activity from '../pages/activity/activity.vue'
import category from '../pages/category/category.vue'
import parts from '../pages/parts/parts.vue'
import items from '../pages/items/items.vue'
import discount from '../pages/discount/discount.vue'
import comment from '../pages/comment/comment.vue'
import members from '../pages/members/members.vue'
import ad from '../pages/ad/ad.vue'
import sys from '../pages/sys/sys.vue'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/index',
      name: '仪表盘',
      component: index
    },
    {
      path: '/',
      name: '仪表盘',
      component: index
    },
    {
      path: '/category',
      name: '菜品-分类列表',
      component: category
    },
    {
      path: '/parts',
      name: '菜品-配菜列表',
      component: parts
    },
    {
      path: '/items',
      name: '菜品-菜品列表',
      component: items
    },
    {
      path: '/discount',
      name: '优惠-优惠券',
      component: discount
    },
    {
      path: '/activity',
      name: '优惠-活动',
      component: activity
    },
    {
      path: '/members',
      name: '会员-会员列表',
      component: members
    },
    {
      path: '/comment',
      name: '内容-评论列表',
      component: comment
    },
    {
      path: '/ad',
      name: '内容-广告列表',
      component: ad
    },
    {
      path: '/sys',
      name: '系统-系统设置',
      component: sys
    }
  ]
})
export default router
