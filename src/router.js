import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue'
import Success from './pages/Success.vue';
import NotFound from './pages/NotFound.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/success',
            name: 'Success',
            component: Success
        },
        { 
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound        
        }
    ]
})