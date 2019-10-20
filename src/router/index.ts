import Board from '@/components/Board.vue';
import Login from '@/components/Login.vue';
import Router from 'vue-router';
import Scoring from '@/components/Scoring.vue';
import Vue from 'vue';

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
