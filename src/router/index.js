import Vue from 'vue'
import Router from 'vue-router'
//首页
const Index = r => require.ensure([], () => r(require('../page/index/index')), '');
// import Index from '@/page/index/index'
const Recommend = r => require.ensure([], () => r(require('../page/index/recommend')), '');

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Index,
        children: [{
            path: '',
            name: 'recommend',
            component: Recommend
        }]
    }]
})