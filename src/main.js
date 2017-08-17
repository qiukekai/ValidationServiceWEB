import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
// import VueResource from 'vue-resource'


Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(iView);
// Vue.use(VueResource);


// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});


const store = new Vuex.Store({
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    created: function () {
        // `this` 指向 vm 实例
        Util.base.get('/api/v1/service/certification/result/b9b63f20-33a4-4334-acf0-b0c5baf323dc').then(
            function(data) {
                console.info('mian.js ************** ' + data);
                let arr = [];
                arr.filter((item) => {
                    return item > 3;
                });
                arr.map((item) => {
                    return item * 3;
                });
            },
            function(error) {
                console.info('mian.js  error ************** ' + error);
            });
    },
    render: h => h(App)
});