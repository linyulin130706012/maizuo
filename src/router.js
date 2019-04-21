import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
      path: '/films',
      component: () => import('./views/Film.vue'),
      children: [{
          path: '',
          redirect: '/films/nowPlaying'
        },
        {
          path: 'nowPlaying',
          component: () => import('./components/nowPlaying.vue')
        },
        {
          path: 'comingSoon',
          component: () => import('./components/comingSoon.vue')
        }
      ]
    },
    {
      path: '/cinemas',
      component: () => import('./views/Cinema.vue')
    },
    {
      path: '/center',
      component: () => import('./views/Center.vue')
    },
    {
      path: '/film/:filmId',
      name: 'detail',
      component: () => import('./views/Detail.vue')
    },
  ]
})