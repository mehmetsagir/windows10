import Vue from "vue";
import Vuex from "vuex";
import { getFolders } from "../assets/js/local";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    folders: getFolders()
  },
  actions: {
    setFolders(context, folders) {
      context.state.folders = folders
    }
  }
});
