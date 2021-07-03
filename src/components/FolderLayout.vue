<template>
  <div
    class="container folder-container"
    :class="fullScreenStatus ? `fullScreen ${folderName}` : folderName"
  >
    <div class="resizer nw"></div>
    <div class="resizer ne"></div>
    <div class="resizer sw"></div>
    <div class="resizer se"></div>
    <div class="folder-header" @dblclick="fullScreen">
      <div class="info" v-if="folder">
        <img
          :src="require(`/src/assets/folder-icons/${folder.icon}.svg`)"
          :alt="folder.path"
        />
        <p>{{ folder.title }}</p>
      </div>
      <ul>
        <li>
          <button @click="updateShowModal">
            <img src="../assets/line.svg" width="10" alt="line icon" />
          </button>
        </li>
        <li>
          <button @click="fullScreen">
            <img src="../assets/squares.svg" width="10" alt="line icon" />
          </button>
        </li>
        <li>
          <button @click="closeFolder">
            <img src="../assets/cancel.svg" width="10" alt="line icon" />
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
import folderResize from "./../assets/js/folderResize";
import folderDrag from "./../assets/js/folderDrag";
import {
  getFolders,
  closeFolder,
  updateShowFolder,
  updateFullScreen,
} from "../assets/js/local";
export default {
  name: "FolderLayout",
  data() {
    return {
      fullScreenStatus: false,
      folder: null,
    };
  },
  props: ["folderName", "overflow"],
  methods: {
    closeFolder() {
      if (localStorage.getItem("windows-folders")) {
        closeFolder(this.folderName);
        this.$store.state.folders = getFolders();
      }
    },
    updateShowModal() {
      updateShowFolder(this.folderName);
      this.$store.state.folders = getFolders();
    },
    fullScreen() {
      updateFullScreen(this.folderName);
      this.$store.state.folders = getFolders();
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
  width: 50%;
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
    border-bottom: 1px solid rgba(#ccc, 0.4);
    font-family: sans-serif;
    *::selection {
      background: none;
    }
    .info {
      display: flex;
      align-items: center;
      img {
        width: 18px;
        margin: 0 7px 0 10px;
      }
    }
    ul {
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
