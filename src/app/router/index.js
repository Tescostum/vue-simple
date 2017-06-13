import Vue from 'vue';
import VueRouter from 'vue-router';

import AppContent from '../components/appContent';
import AppContent2 from '../components/appContent2';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: AppContent
        },
        {
            path: '/content2',
            component: AppContent2
        }
    ]
})