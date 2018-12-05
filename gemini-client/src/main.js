import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'

import firebase from 'firebase'

Vue.config.productionTip = false;
Vue.use(ElementUI, {locale});

var config = {
    apiKey: "AIzaSyDH_QFL1NXy8H8Lw4JIgGYFwc6xR2KhaGE",
    authDomain: "gemini-e2c6d.firebaseapp.com",
    databaseURL: "https://gemini-e2c6d.firebaseio.com",
    projectId: "gemini-e2c6d",
    storageBucket: "gemini-e2c6d.appspot.com",
    messagingSenderId: "1066268677949"
};
firebase.initializeApp(config);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');


