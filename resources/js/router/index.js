import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    linkActiveClass: 'active',
    mode: 'hash',
    scrollBehavior() {
        return {x:0,y:0}
    },
    routes: [
        {
            path: '/',
            component: () => import('../views/app/main'),
            children: [
                {
                    path: '/',
                    component: () => import('../views/app/main'),
                    name: 'Главная',
                }
            ]
        },
        {
            path: 'app/Dislocation',
            component: () => import('../views/app/Dislocation'),
            redirect: '/app/Dislocation/TableRes',
            children: [
                {
                    path: 'VslMap',
                    component: () => import('../views/app/Dislocation/VslMap'),
                    name: 'Карта судов ВП'
                },
                {
                    path: 'TableResult',
                    component: () => import('../views/app/Dislocation/TableRes'),
                    name: 'Текущая дислокация'
                }
            ]


        }
    ]
})

export default router
