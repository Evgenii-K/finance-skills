import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
  Router
} from 'vue-router';
import { StateInterface } from '../store';
import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export let apiRouter: Router

export default route<StateInterface>(({ store }) => {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(
      process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE
    ),
  });

  Router.beforeEach((to) => {
    if (to.meta?.title) {
      store.commit('app/setTitle', to.meta.title)
    }

    // const publicPages = ['auth/login', 'auth/register', '/']
    // const authRequired = !publicPages.includes(to.path)
    // const loggedIn = localStorage.getItem('user-token')
  
    // if (authRequired && !loggedIn) {
    //   next('auth/login')
    // } else {
    //   next()
    // }
  })

  apiRouter = Router

  return Router;
});
