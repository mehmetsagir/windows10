<template>
  <ul id="rmenu" class="context-menu" v-click-outside="hide">
    <li>
      <button>
        View
        <svg width="10" viewBox="0 0 256 512">
          <path
            fill="#ccc"
            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
          ></path>
        </svg>
      </button>
      <ul class="sub">
        <li
          v-for="item in $store.state.folderSizeList"
          :class="item.size === $store.state.folderSize.size && 'selected'"
          :key="item.shortName"
          @click="setFolderSize(item)"
        >
          <button @click="folderSize = item.shortName">
            {{ item.name }} icons
          </button>
        </li>
        <li
          class="border-top"
          :class="$store.state.showDesktopIcons && 'selected'"
        >
          <button @click="showDesktopIcons">Show desktop icons</button>
        </li>
      </ul>
    </li>
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
          v-for="item in sortTypes"
          :class="item === $store.state.folderSortType && 'selected'"
          :key="item"
        >
          <button @click="folderSort(item)">{{ item }}</button>
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
    <li>
      <button @click="switchTheme">
        Switch to
        {{ $store.state.theme === "light" ? "Dark Mode" : "Light Mode" }}
      </button>
    </li>
  </ul>
</template>

<script>
import { setFolder } from "../helpers/folders";
import { getLocal } from "../helpers/local";
export default {
  name: "ContextMenu",
  data() {
    return {
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
        this.$store.dispatch("fetchFolders", getLocal("windows-folders"));
      }
      this.hide();
    },
    folderSort(value) {
      this.$store.dispatch("setFolderSort", value);
      this.hide();
    },
    showDesktopIcons() {
      this.$store.dispatch(
        "setShowFolders",
        !this.$store.state.showDesktopIcons
      );
      this.hide();
    },
    setFolderSize(size) {
      this.$store.dispatch("setFoldersSize", size);
      this.hide();
    },
    switchTheme() {
      let theme;
      if (this.$store.state.theme === "light") {
        theme = "dark";
      } else {
        theme = "light";
      }
      this.$store.dispatch("setTheme", theme);
      this.hide();
    },
  },
};
</script>

<style lang="scss" scoped>
html.dark {
  .context-menu {
    background: #111;
    * {
      color: #e0e0e0;
    }
    li {
      &:hover {
        background: #333;
      }
      .sub {
        background: #111;

        li.selected::before {
          background: #e0e0e0;
        }
      }
    }
  }
}
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
        &.border-top {
          margin-top: 3px;
          padding-top: 3px;
          border-top: 1px solid rgba(0, 0, 0, 0.2) !important;
        }
      }
    }
  }
}
</style>
