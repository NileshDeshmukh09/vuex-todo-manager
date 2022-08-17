import Vuex from 'vuex';
import Vue from 'vue';
import TodosList from './modules/TodosList';

/**
 * Load Vuex
 */
Vue.use(Vuex);

/**
 * Create store
 */
export default new Vuex.Store({
    modules : {
        TodosList
    }
});