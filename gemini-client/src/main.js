import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'

import firebase from 'firebase'

Vue.config.productionTip = false;
Vue.use(ElementUI, {locale});

var config = {
    apiKey: "************************",
    authDomain: "************** Firebaseapp.Com ********** ".,
    DatabaseURL: ". ************************ Firebaseio.Com ",
    ProjectId: "************************",
    storageBucket: "******************* *****. appspot.com ",
    messagingSenderId: " ************************ "
};
firebase.initializeApp(config);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
