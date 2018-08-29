import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import Home from '@/components/Home/Home'
import Book from '@/components/Book/Book'
import Broadcast from "@/components/Broadcast/Broadcast"
import Group from '@/components/Group/Group'
import My from '@/components/My/My'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: "Group",
      component: Group
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
