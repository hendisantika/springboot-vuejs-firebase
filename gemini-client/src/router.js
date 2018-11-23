import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.Use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generate a separate chunk (about. [hash] .js) for this route
            // Which is Lazy //-Loaded When The Route Is Visited.
            component: () => import(/* WebpackChunkName: "About" */ './views/About.Vue')
        },
        {
            path: '/currency',
            name: 'currency',
            component: () => import (/* webpackChunkName: "currency" */ './views/Currency.vue')
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import(/* WebpackChunkName: "Singup" */  './views/Signup.vue')
        },
        {
            path: '/signin',
            name: 'signin ',
            component: () => import (/* webpackChunkName: "singin" */' ./views/Signin.vue ')
        }
    ]
})
