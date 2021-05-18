<template>
  <div class="navigator" @click.self="navigationMenuView = false">
    <div class="navigator-bar">
      <button
        class="navigator-button"
        @click="navigationMenuView = !navigationMenuView"
      >
        <i class="fab fa-windows"></i>
      </button>
    </div>
    <div class="detail">
      <i class="fas fa-chevron-up"></i>
      <i class="fas fa-microphone"></i>
      <i class="fas fa-battery-three-quarters"></i>
      <i class="fas fa-wifi"></i>
      <i class="fas fa-volume-up"></i>
      <p>ENG</p>
      <p class="time">{{ time }}</p>
    </div>
    <transition name="fade">
      <NavigatorMenu @sleep="sleep = $event" v-if="navigationMenuView" />
    </transition>
    <transition name="opacity">
      <div class="shut-down" v-if="sleep"></div>
    </transition>
  </div>
</template>

<script>
import NavigatorMenu from "./NavigatorMenu.vue";
export default {
  name: "Navigator",
  data() {
    return {
      time: null,
      navigationMenuView: false,
      sleep: false
    };
  },
  components: { NavigatorMenu },
  created() {
    setInterval(() => {
      const date = new Date();
      const hours =
        date.getHours().toString().length < 2
          ? "0" + date.getHours()
          : date.getHours();
      const minutes =
        date.getMinutes().toString().length < 2
          ? "0" + date.getMinutes()
          : date.getMinutes();
      this.time = hours + ":" + minutes;
    }, 100);
  },
};
</script>

<style lang="scss" scoped>
*::selection {
  background: none;
}
.navigator {
  height: 40px;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-bar {
    height: 100%;
    .navigator-button {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      &:hover i {
        color: #00a2ed;
      }
      i {
        transition: 150ms;
        font-size: 25px;
      }
    }
  }

  .detail {
    height: 100%;
    display: flex;
    padding-right: 20px;
    i {
      font-size: 14px;
    }
    & > * {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      cursor: default;
      padding: 0 7px;
      transition: 150ms;
      &:hover {
        background: lighten(#ddd, 7%);
      }
    }
  }
}

.shut-down {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: black;
  top: 0;
  left: 0;
  z-index: 9999;
  cursor: none;
}

.fade-enter-active,
.fade-leave-active {
  transform: scale(1);
  transition: 250ms;
}
.fade-enter,
.fade-leave-to {
  transform: translate(-30px, 50px) scale(0.8);
  opacity: 0;
}

.opacity-enter-active,
.opacity-leave-active {
  transition: 300ms;
}
.opacity-enter,
.opacity-leave-to {
  opacity: 0;
  transition: 800ms;
}
</style>
