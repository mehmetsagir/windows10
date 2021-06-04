<template>
  <div>
    <div class="home">
      <div v-if="$store.state.folders">
        <div v-for="(folder, index) in $store.state.folders" :key="index">
          <div v-if="folder.show">
            <Folder :comp="folder.path" />
          </div>
        </div>
      </div>
      <FolderList />
    </div>
  </div>
</template>

<script>
import FolderList from "./FolderList.vue";
import Folder from "./Folders";
export default {
  name: "Home",
  components: { Folder, FolderList },
};
</script>

<style lang="scss">
.home {
  height: 100%;
  background: url("../assets/wallpaper.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;
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
