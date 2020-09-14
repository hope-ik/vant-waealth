import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'Login',
        meta: {
            // 页面标题title
            title: '登录'
        },
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/',
        name: 'Discovery',
        meta: {
            title: '发现',
            requireAuth: true //创建权限
        },
        component: () =>
            import ('../views/Discovery.vue')
    },
    {
        path: '/optional',
        name: 'Optional',
        meta: {
            // 页面标题title
            title: '自选'
        },
        component: () =>
            import ('../views/Optional.vue'),
        redirect: '/optional/opt_stock',
        children: [{
                path: '/optional/opt_stock',
                name: 'opt_stock',
                component: () =>
                    import ('../components/opt_stock.vue')
            },
            {
                path: '/optional/opt_fund',
                name: 'opt_fund',
                component: () =>
                    import ('../components/opt_fund.vue')
            },
        ]
    },
    {
        path: '/community',
        name: 'Community',
        meta: {
            // 页面标题title
            title: '社区'
        },
        component: () =>
            import ('../views/Community.vue')
    },
    {
        path: '/property',
        name: 'Property',
        meta: {
            // 页面标题title
            title: '资产'
        },
        component: () =>
            import ('../views/Property.vue')
    }
]


const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => { //挂载全局导航守卫
    if (to.meta.requireAuth) { //判断to.meta.requireAuth是否为true
        if (localStorage.getItem("222")) { //判断储存是否有"东西" 如果有保存就继续
            next()
        } else { //没有就跳转到登录页
            next({
                path: '/Login',
                query: { //需要重定向的路由 传参过去
                    redirect: to.fullpath0
                }
            })
        }
    } else {
        next()
    }

})

export default router