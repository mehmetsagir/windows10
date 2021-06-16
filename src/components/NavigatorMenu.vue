<template>
  <div class="navigator-menu">
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
    <transition name="fade">
      <div class="reload-animation" v-if="reloadStatus">
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>Restarting</p>
      </div>
    </transition>
    <transition name="fade">
      <div class="reload-animation" v-if="shutDownStatus">
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>Shutting Down</p>
      </div>
    </transition>
    <div class="container">
      <div class="folder" v-for="(i, index) in 50" :key="index">
        <i class="fas fa-folder-open"></i> Folder
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigatorMenu",
  props: ["menuView"],
  data() {
    return {
      reloadStatus: false,
      shutDownStatus: false
    }
  },
  methods: {
    reload() {
      this.reloadStatus = true
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
      this.shutDownStatus = true
      setTimeout(() => {
        this.$emit("sleep", true);
        document.addEventListener("keydown", () => {
          this.$emit("sleep", false);
        })
        setTimeout(() => {
          this.shutDownStatus = false
        }, 100);
      }, 4000);
    }
  }
};
</script>

<style lang="scss" scoped>
.navigator-menu {
  position: absolute;
  left: 0;
  bottom: 30px;
  height: 500px;
  width: 330px;
  background: rgba(#ddd, 0.9);
  display: flex;
  z-index: 99;

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

    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: black;
      border-radius: 99px;
      display: none;
    }
    &:hover::-webkit-scrollbar-thumb {
      display: block;
    }
    .folder {
      height: 45px;
      display: flex;
      align-items: center;
      padding: 0 15px;
      cursor: pointer;
      &:hover {
        background: lighten(#ddd, 1%);
      }
      i {
        font-size: 20px;
        margin-right: 10px;
        color: orange;
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
.reload-animation {
  cursor: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 22px;
    margin-top: 10px;
    font-weight: 500;
    color: #ddd;
  }
  background: rgb(62, 62, 189);
}
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
  }
  div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    margin: -4px 0 0 -4px;
  }
  div:nth-child(1) {
    animation-delay: -0.036s;
  }
  div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  div:nth-child(2) {
    animation-delay: -0.072s;
  }
  div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  div:nth-child(3) {
    animation-delay: -0.108s;
  }
  div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  div:nth-child(4) {
    animation-delay: -0.144s;
  }
  div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  div:nth-child(5) {
    animation-delay: -0.18s;
  }
  div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  div:nth-child(6) {
    animation-delay: -0.216s;
  }
  div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  div:nth-child(7) {
    animation-delay: -0.252s;
  }
  div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  div:nth-child(8) {
    animation-delay: -0.288s;
  }
  div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
}

@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
