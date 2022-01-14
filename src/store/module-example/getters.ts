import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ExampleStateInterface } from './state';

const getters: GetterTree<ExampleStateInterface, StateInterface> = {
  someGetters (context) {
    const { cash } = context
    return cash * 10
  }
};

export default getters;
