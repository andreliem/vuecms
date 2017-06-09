import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Post from '@/components/Post'
import Posts from '@/components/Posts'

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/posts/:id',
            name: 'Post',
            component: Post
        },
        {
            path: '/posts',
            name: 'Posts',
            component: Posts
        }
    ]
})
