import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/components/Login';
import Board from '@/components/Board';
import Scoring from '@/components/Scoring';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/boards',
      name: 'boards',
      component: Board,
    },
    {
      path: '/boards/:id',
      name: 'scoring',
      component: Scoring,
    },
  ],
});
