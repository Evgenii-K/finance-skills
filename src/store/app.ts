import { Module, MutationTree, ActionTree, GetterTree } from 'vuex';
import { StateInterface } from './index';

export interface IUser {
  id: string;
  email: string;
  status?: number;
  first_name?: string;
  last_name?: string;
}

export interface AppStateInterface {
  accessToken: string;
  isAuthenticated: boolean;
  user: IUser;
  pageTitle: string;
}

export type AppGettersType = {
  getIsAuthenticated(state: AppStateInterface): boolean;
  getAccessToken(state: AppStateInterface): string;
}

function state(): AppStateInterface {
  return {
    accessToken: '',
    isAuthenticated: false,
    user: {
      id: '',
      email: '',
    },
    pageTitle: 'Мой кабинет'
  }
}

const mutations: MutationTree<AppStateInterface> = {
  
  setTitle: (state: AppStateInterface, newTitle: string) => {
    state.pageTitle = newTitle
  },

  setToken: (state: AppStateInterface, token: string) => {
    state.accessToken = token
    state.isAuthenticated = true
  },

  removeToken: (state: AppStateInterface) => {
    state.accessToken = ''
    state.isAuthenticated = false
  },

  updateUser: (state: AppStateInterface, user: IUser) => {
    state.user = user
  }
}

const getters: GetterTree<AppStateInterface, StateInterface> & AppGettersType = {
  getIsAuthenticated: (state) => {
    return state.isAuthenticated
  },
  getAccessToken: (state) => {
    return state.accessToken
  }
}

const actions: ActionTree<AppStateInterface, StateInterface> = {
  login ({}, payload) {
    console.log(payload)
  },

  signOut ({}) {
    console.log('SignOut')
  }
};

const appStore: Module<AppStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default appStore;
