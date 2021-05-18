<template>
  <div>
    <div class="home">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
.home {
  height: calc(100vh - 40px);
  background: url("../assets/wallpaper.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  padding: 45px;
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: 300ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
