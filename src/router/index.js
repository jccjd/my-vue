import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect: "/home"
    },

    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/index.vue')
    },

    {
        path: '/home',
        name: 'home',
        meta:{title: '首页'},
        redirect: '/index',
        component: () => import('../views/home/index.vue'),
        children:[
            {
                path:'/index',
                name: 'index',
                meta:{title: '首页'},
                component: () => import('../views/home/index-1.vue')
            },
            {
                path:'/stats',
                name: 'stats',
                meta:{title: '数据管理'},
                component: () => import('../views/home/list.vue')
            },
            {
                path:'/list',
                name: 'list',
                meta:{title: '信息管理'},
                component: () => import('../views/home/list-1.vue'),
                children:[
                    {
                        path:'/list/hello',
                        name: 'hello',
                        meta:{title: '信息列表'},
                        component: () => import('../views/home/list-1.vue'),
                    }

                ]
            },
        ]

        
    },
    
]

const router = new VueRouter({
    routes
})

export default router