import Vue from 'vue';
import Vuex from 'vuex';
import VModal from 'vue-js-modal';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VModal);

export default new Vuex.Store({
  state: {
    dark: false,
    boards: [],
    activeBoard: null,
    list: [],
  },
  actions: {
    loadBoards({ commit }) {
      axios.get('/boards').then(({ data }) => commit('setBoards', data.data));
    },
    loadBoard({ commit }, id) {
      axios.get(`/boards/${id}`).then(({ data }) => commit('activeBoard', data));
    },
    addBoard({ commit }, board) {
      const { title, description } = board;
      axios.post(`/boards`, { title, description }).then(({ data }) => commit('addBoard', data));
    },
  },
  mutations: {
    // board part
    setBoards(state, boards) {
      state.boards = boards;
    },
    addBoard(state, { id, title, description }) {
      state.boards.push({ id, title, description });
    },
    activeBoard(state, { id, title, description }) {
      state.activeBoard = { id, title, description };
    },
    editActiveBoard(state, { id, title, description }) {
      state.activeBoard = { id, title, description };
      const index = state.boards.findIndex(item => item.id === id);
      Vue.set(state.boards, index, { id, title, description });
      axios.patch(`/boards/${id}`, { title, description });
    },
    closeBoard(state) {
      state.activeBoard = null;
    },

    // scoring list part
    setList(state, list) {
      state.list = list;
    },
    addItem(state, { title, desc, score }) {
      const id = `item-${state.list.length}`;
      state.list.push({ title, desc, score, id });
    },
    updateItem(state, { id, title, desc, score }) {
      const item = state.list.find(item => item.id === id);
      const index = state.list.findIndex(item => item.id === id);
      Vue.set(state.list, index, { ...item, title, desc, score });
    },
    updateItemColor(state, { id, color }) {
      const item = state.list.find(item => item.id === id);
      const index = state.list.findIndex(item => item.id === id);
      Vue.set(state.list, index, { ...item, color });
    },
    removeItem(state, item) {
      state.list.splice(state.list.indexOf(item), 1);
    },

    // setting part
    toggleDark(state) {
      state.dark = !state.dark;
    },
  },
});
