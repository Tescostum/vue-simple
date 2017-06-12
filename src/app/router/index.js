import Vue from 'vue';
import VueRouter from 'vue-router';

import AppContent from '../appContent';
import AppContent2 from '../appContent2';

Vue.use(VueRouter);

export default new VueRouter({
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