const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/login.vue'], resolve)
},
{
    path: '/home',
    component: (resolve) => require(['./views/home.vue'], resolve)
},
{
    path: '/component/table',
    component: (resolve) => require(['./views/failTable.vue'], resolve)
}];
export default routers;