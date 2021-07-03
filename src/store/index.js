import Vue from "vue";
import Vuex from "vuex";
import { getFolders } from "../assets/js/local";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    folders: getFolders(),
  },
  mutations: {
    setFolders(state, data) {
      state.folders = data;
    },
  },
  actions: {
    fetchFolders(context, folders) {
      context.commit("setFolders", folders);
    },
  },
});
