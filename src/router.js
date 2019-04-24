import Vue from 'vue';
import VueRouter from 'vue-router';

window.isLogin = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
      path: '*',
      redirect: '/films/nowPlaying'
    },
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      children: [{
          path: '',
          redirect: '/films/nowPlaying'
        },
        {
          path: 'films',
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
          path: 'cinemas',
          component: () => import('./views/Cinema.vue')
        },
        {
          path: 'center',
          component: () => import('./views/Center.vue')
        }
      ]
    },
    {
      path: '/film/:filmId',
      name: 'detail',
      component: () => import('./views/Detail.vue')
    },
    {
      path: '/city',
      component: () => import('./views/City.vue')
    },
    {
      path: '/card',
      component: () => import('./views/Card.vue'),
      beforeEnter: (to, from, next) => {
        if (!window.isLogin) {
          next({
            path: '/login',
            query: {
              redirect: to.path
            }
          });
        } else {
          next();
        }
      }
    },
    {
      path: '/money',
      component: () => import('./views/Money.vue'),
      beforeEnter: (to, from, next) => {
        if (!window.isLogin) {
          next({
            path: '/login',
            query: {
              redirect: to.path
            }
          });
        } else {
          next();
        }
      }
    },
    {
      path: '/login',
      component: () => import('./views/Login.vue')
    }
  ]
});

export default router;