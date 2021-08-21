import Vue from "vue";
import Vuex from "vuex";
import { getFolders } from "../helpers/folders";
import FolderList from "../database/folders.json";
import { getShowFolders, setShowFolders } from "../helpers/showFolders";
import { getFolderSize, setFolderSize } from "../helpers/folderSize";
import { getFolderSort, setFolderSort } from "../helpers/folderSort";
import { getTheme, setTheme } from "../helpers/theme";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: getTheme(),
    folders: getFolders(),
    folderSortType: getFolderSort(),
    folderList: FolderList,
    showDesktopIcons: getShowFolders(),
    folderSize: getFolderSize(),
    folderSizeList: [
      {
        name: "Large",
        shortName: "lg",
        size: "45px",
      },
      {
        name: "Medium",
        shortName: "md",
        size: "35px",
      },
      {
        name: "Small",
        shortName: "sm",
        size: "25px",
      },
    ],
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
    setFolderSort(context, type) {
      setFolderSort(type);
      context.commit("setFolderSortType", type);
      context.state.folderSortType = getFolderSort();
    },
    setShowFolders(context, value) {
      setShowFolders(value);
      context.state.showDesktopIcons = getShowFolders();
    },
    setFoldersSize(context, value) {
      setFolderSize(value);
      context.state.folderSize = getFolderSize();
    },
    setTheme(context, value) {
      setTheme(value);
      context.state.theme = getTheme();
    },
  },
});
