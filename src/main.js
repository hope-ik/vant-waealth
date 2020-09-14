import Vue from 'vue'
import App from './App.vue'
import router from './router'
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
import store from './store'
// import 'normalize.css'

import 'amfe-flexible';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')