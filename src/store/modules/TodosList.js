import axios from 'axios';

const state = {
    TodosList : []
};

const getters = {
    allTodos : state => state.TodosList,
    
};

const actions = {
    async fetchTodos({ commit }){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`);

        commit('setTodos', response.data);
    }

};

const mutations = {
    setTodos : ( state , TodosList ) => ( state.TodosList = TodosList )
};

export default {
    state,
    getters,
    actions,
    mutations
}