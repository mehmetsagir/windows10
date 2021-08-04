<template>
  <ul id="rmenu" class="context-menu" v-click-outside="hide">
    <li>
      <button>
        Sort By
        <svg width="10" viewBox="0 0 256 512">
          <path
            fill="#ccc"
            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
          ></path>
        </svg>
      </button>
      <ul class="sub">
        <li
          :class="item === sortType && 'selected'"
          v-for="item in sortTypes"
          :key="item"
        >
          <button @click="sortType = item">{{ item }}</button>
        </li>
      </ul>
    </li>
    <li>
      <button @click="reload">Refresh</button>
    </li>
    <li>
      <button
        @click="
          changeBackgroundShow(
            'changeBackground',
            'thisPC',
            'Change Background'
          )
        "
      >
        Change Background
      </button>
    </li>
  </ul>
</template>

<script>
import { setFolder } from "../helpers/local";
export default {
  name: "ContextMenu",
  data() {
    return {
      sortType: null,
      sortTypes: ["Name", "Size"],
    };
  },
  methods: {
    hide() {
      document.getElementById("rmenu").classList.remove("show");
    },
    reload() {
      window.location.reload();
    },
    changeBackgroundShow(path, icon, title) {
      if (path && icon && title) {
        setFolder(title, icon, path);
        this.$store.dispatch(
          "fetchFolders",
          JSON.parse(localStorage.getItem("windows-folders"))
        );
      }
      this.hide();
    },
    folderSort() {
      if (this.sortType === null) return null;

      this.$store.dispatch("updateFolderSortType", this.sortType);
      if (localStorage.getItem("windows-settings")) {
        const settings = JSON.parse(localStorage.getItem("windows-settings"));
        settings.folderSortType = this.sortType;
        localStorage.setItem("windows-settings", JSON.stringify(settings));
      } else {
        const settings = {
          folderSortType: this.sortType,
        };
        localStorage.setItem(JSON.stringify("windows-settings", settings));
      }
    },
  },
  watch: {
    sortType() {
      this.folderSort();
    },
  },
  created() {
    if (localStorage.getItem("windows-settings")) {
      const settings = JSON.parse(localStorage.getItem("windows-settings"));
      this.sortType = settings.folderSortType;
    }
  },
};
</script>

<style lang="scss" scoped>
.context-menu {
  z-index: 50;
  display: none;
  flex-direction: column;
  width: 230px;
  padding: 5px 0;
  position: absolute;
  top: 150px;
  left: 150px;
  background: #f8f8f8;
  box-shadow: 5px 5px 10px -5px #000;
  &.show {
    display: flex;
  }
  li {
    position: relative;
    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 26px;
      width: 100%;
      padding: 0 15px;
      text-align: left;
      font-size: 12px;
    }
    &:hover,
    &:focus {
      background: #ccc;
      .sub {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
    }
    .sub {
      z-index: 100;
      flex-direction: column;
      width: 230px;
      padding: 5px 0;
      position: absolute;
      top: 0;
      left: 98%;
      background: #f8f8f8;
      border: 1px solid rgba(0, 0, 0, 0.4);
      box-shadow: 5px 5px 10px -5px #000;
      opacity: 0;
      visibility: hidden;
      transform: translateY(4px);
      transition: 250ms;
      li {
        position: relative;
        button {
          padding: 0 30px;
        }
        &.selected {
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 15px;
            transform: translateY(-50%);
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: black;
          }
        }
      }
    }
  }
}
</style>
