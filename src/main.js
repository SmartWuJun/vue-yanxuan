// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'vue2-animate/dist/vue2-animate.css'

Vue.use(MintUI)
Vue.use(iView)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})