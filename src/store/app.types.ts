import {
  AppStateInterface,
  AppGettersType,
} from './app';
import { Store as VuexStore } from 'vuex';

export type AppStoreModuleTypes<S = AppStateInterface> = Omit<VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
>
& {
  getters: {
    [K in keyof AppGettersType]: ReturnType<AppGettersType[K]>;
  };
};