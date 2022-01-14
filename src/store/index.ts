import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import { createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex'

import app, {AppStateInterface} from './app'
// import { AppStoreModuleTypes } from './app.types'
import { ExampleStateInterface } from './module-example/state';
import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  app: AppStateInterface
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> = Symbol('vuex-key')

export let Store: VuexStore<StateInterface>

export default store(function (/* { ssrContext } */) {
  Store = createStore<StateInterface>({
    modules: {
      app,
      example,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING
  })


  return Store;
})

export function useStore() {
  return vuexUseStore(storeKey)
}

