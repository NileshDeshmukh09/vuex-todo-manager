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
    },
     
    async addTodo({ commit }, title ) {
        const response  = await axios.post(`https://jsonplaceholder.typicode.com/todos` , { title , completed : false });
        commit('newTodo', response.data);
    },

    async deleteTodo({ commit }, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`),
        commit('removeTodo' , id);
    },

    async filterTodos({ commit } , e){
        console.log(e);
        const response  = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setTodos', response.data);

    }


};

const mutations = {
    setTodos : ( state , TodosList ) => ( state.TodosList = TodosList ),
    newTodo : ( state , todo ) => state.TodosList.unshift(todo),
    removeTodo : (state, id) =>state.TodosList = state.TodosList.filter(todo => todo.id !== id)
};

export default {
    state,
    getters,
    actions,
    mutations
}