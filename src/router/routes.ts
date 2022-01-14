import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/auth',
    component: () => import('layouts/Authentication.vue'),
    meta: {
      title: 'Авторизация',
    },
    children: [
      {
        path: '',
        component: () => import('pages/auth/AuthPage.vue'),
      },      
      {
        path: 'login',
        component: () => import('pages/auth/Login.vue'),
        name: 'login',
        meta: {
          title: 'Авторизация',
        },
      },
      {
        path: 'signup',
        component: () => import('pages/auth/SignUp.vue'),
        meta: {
          title: 'Регистрация',
        },
      },
      {
        path: 'recovery',
        component: () => import('pages/auth/PasswordRecovery.vue'),
        meta: {
          title: 'Восстановить пароль',
        },
      },
    ],
  },
  {
    path: '/settings',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      title: 'Настройки',
    },
    children: [
      {
        path: '',
        component: () => import('src/pages/settings/Settings.vue'),
      },
      {
        path: 'profile',
        component: () => import('pages/Profile.vue'),
        meta: {
          title: 'Профиль',
        },
      },
    ],
  },
  {
    path: '/game',
    component: () => import('layouts/GameLayout.vue'),
    meta: {
      title: 'Игра',
    },
    children: [
      {
        path: '',
        component: () => import('pages/game/Main.vue'),
      },
      {
        path: 'work',
        component: () => import('pages/game/Work.vue'),
        meta: {
          title: 'Работа',
        },
      },
      {
        path: 'learning',
        component: () => import('pages/game/Learning.vue'),
        meta: {
          title: 'Учёба',
        },
      },
      {
        path: 'statistics',
        component: () => import('pages/game/Statistics.vue'),
        meta: {
          title: 'Статистика',
        },
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
        meta: {
          title: 'Finance skills',
        },
      },
      {
        path: 'dashboard',
        component: () => import('pages/Dashboard.vue'),
        meta: {
          title: 'Мой кабинет',
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
]

export default routes;
