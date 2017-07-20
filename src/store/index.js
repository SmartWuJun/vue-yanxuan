import Vue from 'vue'
import Vuex from 'vuex'

import footer from './modules/footer'

import headerTabs from './modules/headertab'
import shopCart from './modules/shopCart'

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        footer,
        headerTabs,
        shopCart
    }
})