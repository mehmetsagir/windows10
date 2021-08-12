<template>
  <div
    class="container folder-container"
    :class="fullScreenStatus ? `fullScreen ${folderName}` : folderName"
  >
    <div class="resizer nw"></div>
    <div class="resizer ne"></div>
    <div class="resizer sw"></div>
    <div class="resizer se"></div>
    <div
      @dblclick="fullScreen"
      class="folder-header"
      :class="{ browser: type === 'browser' }"
    >
      <div class="info" v-if="folder && type === 'default'">
        <img
          :src="require(`/src/assets/folder-icons/${folder.icon}.svg`)"
          :alt="folder.path"
        />
        <p>{{ folder.title }}</p>
      </div>
      <ul class="tab-info" v-if="type === 'browser'">
        <li class="active">
          <div class="info">
            <img
              src="../../../src/assets/folder-icons/google.svg"
              alt="google icon"
            />
            <p>New Tab</p>
          </div>
          <button @click="closeFolder">x</button>
        </li>
        <li class="new-tab">
          <button>+</button>
        </li>
      </ul>
      <ul class="folder-actions">
        <li>
          <button @click="updateShowModal">
            <img src="../../assets/line.svg" width="10" alt="line icon" />
          </button>
        </li>
        <li>
          <button @click="fullScreen">
            <img src="../../assets/squares.svg" width="10" alt="line icon" />
          </button>
        </li>
        <li>
          <button @click="closeFolder">
            <img src="../../assets/cancel.svg" width="10" alt="line icon" />
          </button>
        </li>
      </ul>
    </div>
    <div class="action-bar" v-if="type === 'browser'">
      <ul class="actions">
        <li>
          <button>
            <i class="fas fa-arrow-left"></i>
          </button>
        </li>
        <li>
          <button>
            <i class="fas fa-arrow-right"></i>
          </button>
        </li>
        <li>
          <button>
            <i class="fas fa-redo"></i>
          </button>
        </li>
      </ul>
      <div class="search-bar">
        <input type="text" v-model="browserSearchURL" />
      </div>
      <ul class="extension">
        <li>
          <button>
            <img src="../../assets/folder-icons/google.svg" alt="Google" />
          </button>
        </li>
      </ul>
    </div>
    <div
      class="content"
      :style="overflow ? 'overflow-y: auto' : 'overflow: hidden'"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import folderResize from "../../helpers/folderResize";
import folderDrag from "../../helpers/folderDrag";
import {
  getFolders,
  closeFolder,
  updateShowFolder,
  updateFullScreen,
} from "../../helpers/local";
export default {
  name: "FolderLayout",
  data() {
    return {
      fullScreenStatus: false,
      folder: null,
      browserSearchURL: "https://google.com",
    };
  },
  props: {
    folderName: {
      require: true,
    },
    overflow: {
      require: false,
      default: false,
    },
    type: {
      require: false,
      default: "default",
    },
  },
  methods: {
    closeFolder() {
      if (localStorage.getItem("windows-folders")) {
        closeFolder(this.folderName);
        this.$store.dispatch("fetchFolders", getFolders());
      }
    },
    updateShowModal() {
      updateShowFolder(this.folderName);
      this.$store.dispatch("fetchFolders", getFolders());
    },
    fullScreen() {
      updateFullScreen(this.folderName);
      this.$store.dispatch("fetchFolders", getFolders());
      this.$store.state.folders.map((folder) => {
        if (folder.path === this.folderName)
          this.fullScreenStatus = folder.fullScreen;
      });
    },
  },
  created() {
    this.$store.state.folders.map((folder) => {
      if (folder.path === this.folderName) {
        this.fullScreenStatus = folder.fullScreen;
        this.folder = folder;
      }
    });
  },
  mounted() {
    folderResize(this.folderName);
    folderDrag(this.folderName);
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-width: 400px;
  min-height: 300px;
  width: 45%;
  height: 50%;
  display: flex;
  flex-direction: column;
  background: #fafafa;
  position: absolute;
  top: 25%;
  left: 25%;

  &.fullScreen {
    width: 100% !important;
    height: 100% !important;
    top: 0 !important;
    left: 0 !important;
  }
  .folder-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    min-height: 35px;
    border-bottom: 1px solid rgba(#ddd, 0.5);
    font-family: sans-serif;
    &.browser {
      background: rgba(#ddd, 0.4);
    }
    *::selection {
      background: none;
    }
    .tab-info {
      height: 100%;
      display: flex;
      align-items: center;
      li {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px 0 20px;
        width: 240px;
        font-size: 12px;
        cursor: pointer;
        border-top-right-radius: 5% 35%;

        &.active {
          background: #fff !important;
        }
        .info {
          p {
            display: inline-block;
          }
          img {
            width: 13px;
            margin-right: 8px;
          }
        }
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          font-family: Arial;
          transition: 250ms;
          &:hover {
            background: rgba(#ddd, 0.4);
          }
        }

        &.new-tab {
          max-width: max-content;
          display: flex;
          padding: 0 8px;

          button {
            width: 25px;
            height: 25px;
            font-size: 25px;
            &:hover {
              background: #ddd;
            }
          }
        }
      }
    }
    .info {
      display: flex;
      align-items: center;
      font-size: 15px;
      img {
        width: 15px;
        margin: 0 7px 0 10px;
      }
    }
    .folder-actions {
      display: flex;
      height: 100%;
      li {
        button {
          height: 100%;
          padding: 0 15px;
          transition: 200ms;
        }
        &:last-child:hover button {
          background: red;
        }
        &:hover button {
          background: #ccc;
        }
      }
    }
  }
  .action-bar {
    background: #fff;
    display: flex;
    align-items: center;
    padding: 8px 10px;
    border-bottom: 1px solid rgba(#ddd, 0.5);

    ul {
      display: flex;
      margin-right: 5px;

      li button {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
        transition: 250ms;

        i {
          font-size: 15px;
          color: rgba(black, 0.7);
        }
        img {
          width: 15px;
          height: 15px;
          margin: 0;
        }

        &:not(:last-child) {
          margin-right: 3px;
        }
        &:hover {
          background: #ddd;
        }
      }
    }

    .search-bar {
      margin: 0 5px;
      flex: 1;
      height: 100%;
      input {
        width: 100%;
        height: 100%;
        border: none;
        background: darken(#fff, 4%);
        border-radius: 50px;
        padding: 0 20px;
        border: 1px solid transparent;
        transition: 250ms;

        &:hover {
          background: darken(#fff, 7%);
        }

        &:focus {
          border-color: blue;
          background: no-repeat;
        }
      }
    }
  }
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    flex: 1;
  }
  .resizer {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: black;
    z-index: 1;
    opacity: 0;
    &.nw {
      top: -1px;
      left: -1px;
      cursor: nw-resize;
    }
    &.ne {
      top: -1px;
      right: -1px;
      cursor: ne-resize;
    }
    &.sw {
      bottom: -1px;
      left: -1px;
      cursor: sw-resize;
    }
    &.se {
      bottom: -1px;
      right: -1px;
      cursor: se-resize;
    }
  }
}
</style>
