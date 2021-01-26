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
        }
    ]
})

export default router
