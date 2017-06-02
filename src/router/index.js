import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Article from '@/components/Article'
import Articles from '@/components/Articles'

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
            path: '/articles/:id',
            name: 'Article',
            component: Article
        },
        {
            path: '/articles',
            name: 'Articles',
            component: Articles
        }
    ]
})
