<template>
  <div class="navigation-menu">
    <div class="left-bar">
      <button>
        <i class="fas fa-grip-lines"></i>
        <span>Start</span>
      </button>
      <div class="actions">
        <button>
          <i class="fas fa-user-circle"></i>
          <span>User</span>
        </button>
        <button>
          <i class="far fa-file"></i>
          <span>Documents</span>
        </button>
        <button>
          <i class="fas fa-download"></i>
          <span>Downloads</span>
        </button>
        <button>
          <i class="fas fa-music"></i>
          <span>Music</span>
        </button>
        <button>
          <i class="fas fa-image"></i>
          <span>Pictures</span>
        </button>
        <button>
          <i class="fas fa-video"></i>
          <span>Videos</span>
        </button>
        <button>
          <i class="fas fa-desktop"></i>
          <span>Network</span>
        </button>
        <button>
          <i class="fas fa-id-card-alt"></i>
          <span>Personal Folder</span>
        </button>
        <button>
          <i class="fas fa-file"></i>
          <span>File Explorer</span>
        </button>
        <button>
          <i class="fas fa-cog"></i>
          <span>Settings</span>
        </button>
        <button class="open-btn">
          <div class="open-btn-modal">
            <button @click="sleep">
              <i class="far fa-moon"></i>
              <span>Sleep</span>
            </button>
            <button @click="shutDown">
              <i class="fas fa-power-off"></i>
              <span>Shut down</span>
            </button>
            <button @click="reload">
              <i class="fas fa-undo"></i>
              <span>Restart</span>
            </button>
          </div>
          <i class="fas fa-power-off"></i>
          <span>Power</span>
        </button>
      </div>
    </div>
    <div class="container">
      <div
        class="folder"
        v-for="folder in this.$store.getters.getInstalledApps"
        :key="folder.id"
        @click="openFolder(folder.path, folder.icon, folder.title)"
      >
        <img
          :src="require(`/src/assets/folder-icons/${folder.icon}.svg`)"
          width="20"
          :alt="folder.title"
        />
        {{ folder.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { setFolder } from "../../helpers/folders";
import { getLocal } from "../../helpers/local";
export default {
  name: "NavigationMenu",
  props: ["menuView"],
  methods: {
    reload() {
      this.$emit("reloadStatus", true);
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    },
    sleep() {
      this.$emit("sleep", true);
      document.addEventListener("keydown", () => {
        this.$emit("sleep", false);
      });
    },
    shutDown() {
      this.$emit("shutDownStatus", true);
      setTimeout(() => {
        this.$emit("sleep", true);
        document.addEventListener("keydown", () => {
          this.$emit("sleep", false);
        });
        setTimeout(() => {
          this.$emit("shutDownStatus", false);
        }, 100);
      }, 4000);
    },
    openFolder(path, icon, title) {
      this.isActive = false;
      if (path && icon && title) {
        setFolder(title, icon, path);
        this.$store.dispatch("fetchFolders", getLocal("windows-folders"));
        this.$emit("hideMenu", false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
html.dark {
  .navigation-menu {
    background: rgba(#111, 0.9);
    color: #e9e9e9;

    .container .folder:hover {
      background: linear-gradient(to left, rgba(#333, 0.5), transparent);
    }

    .left-bar {
      background: #111;
      * {
        color: #e9e9e9;
      }
      button:hover {
        background: #333;
      }
    }

    .open-btn .open-btn-modal {
      background: #222;
    }
  }
}
.navigation-menu {
  position: absolute;
  left: 0;
  bottom: 30px;
  height: 500px;
  width: 330px;
  background: rgba(#ddd, 0.9);
  display: flex;
  z-index: 9999;
  backdrop-filter: blur(2px);
  .left-bar {
    height: 100%;
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #ddd;

    &:hover {
      position: absolute;
      width: 230px;

      button {
        justify-content: start;
        span {
          visibility: visible;
          position: relative;
        }
        i {
          margin-right: 15px;
        }
      }
    }

    button {
      height: 35px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        min-width: 50px;
        font-size: 15px;
        color: rgba(#000, 0.8);
      }
      span {
        visibility: hidden;
        position: absolute;
      }
      &:hover {
        color: black;
        background: #fff;
      }
    }

    .actions {
      width: 100%;
    }
  }
  .container {
    flex: 1;
    height: 100%;
    overflow: auto;
    padding: 10px 0;

    .folder {
      height: 45px;
      display: flex;
      align-items: center;
      padding: 0 15px;
      cursor: pointer;
      &:hover {
        background: linear-gradient(to left, rgba(#fff, 0.5), transparent);
      }
      img {
        margin-right: 10px;
      }
    }
  }
  .open-btn {
    position: relative;
    &:hover .open-btn-modal {
      display: block;
    }
    .open-btn-modal {
      display: none;
      position: absolute;
      right: 0;
      top: -300%;
      background: #ddd;
      box-shadow: -4px 0 15px rgba(#000, 0.2);
      width: 100%;
    }
  }
}
</style>
