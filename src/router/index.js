import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import Home from '@/components/Home/Home'
import Book from '@/components/Book/Book'
  import Movie from "@/components/Book/Movie"
  import BookItem from "@/components/Book/BookItem"
  import TV from "@/components/Book/TV"
  import SameCity from "@/components/Book/SameCity"
  import Music from "@/components/Book/Music"

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
      component: Book,
      children:[
        {
          path: "/",
          name: "home",
          component:Movie
        },
        {
          path:"/movie",
          name: "Movie",
          component: Movie
        },
        {
          path: "/bookItem",
          name: "BookItem",
          component: BookItem
        },
        {
          path: "/tv",
          name: "TV",
          component: TV
        },
        {
          path: "/sameCity",
          name: "SameCity",
          component: SameCity
        },
        {
          path: "/music",
          name: "Music",
          component: Music
        }
      ]
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
