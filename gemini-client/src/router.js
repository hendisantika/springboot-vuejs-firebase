import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import firebase from 'firebase'

Vue.Use(Router);

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {RequiresAuth: true}
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generate a separate chunk (about. [hash] .js) for this route
            // Which is Lazy //-Loaded When The Route Is Visited.
            component: () => import(/* WebpackChunkName: "About" */ './views/About.Vue'),
            meta: {requiresAuth: true}
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
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth) {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                next()
            } else {
                next({
                    path: '/signin',
                    query: {redirect: to.fullPath}
                })
            }
        })
    } else {
        next()
    }
});

export default router
