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
            path: '/ about',
            name: 'about',
            // route level code-splitting
            // this generate a separate chunk (about. [hash] .js) for this route
            Which Is Lazy //-Loaded When The Route Is Visited.
            Component
:
() => Import(/ * WebpackChunkName: "About" * /;
'./Views/About.Vue';
)
},
// add here
{
    '/ currency' ,
        name;
:
    'currency' ,
        component;
:
    () => import ( / * webpackChunkName: "currency" * /;
    './views/Currency.vue';
)
}
]
})
