import Vue from "vue";
import Vuex from "vuex";
import { getFolders } from "../helpers/local";
import FolderList from "../database/folders.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    folders: getFolders(),
    folderSortType: null,
    folderList: FolderList,
  },
  mutations: {
    setFolders(state, data) {
      state.folders = data;
    },
    setFolderSortType(state, type) {
      state.folderSortType = type;

      if (type == "Name") {
        state.folderList = FolderList.sort(function (a, b) {
          var nameA = a.title.toUpperCase();
          var nameB = b.title.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      } else {
        state.folderList = FolderList.sort(function (a, b) {
          return a.id - b.id;
        });
      }
    },
  },
  actions: {
    fetchFolders(context, folders) {
      context.commit("setFolders", folders);
    },
    updateFolderSortType(context, type) {
      context.commit("setFolderSortType", type);
    },
  },
});
