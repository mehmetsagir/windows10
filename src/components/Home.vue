<template>
  <div id="home">
    <div v-if="$store.state.folders">
      <div v-for="(folder, index) in $store.state.folders" :key="index">
        <div v-if="folder.show">
          <Folder :comp="folder.path" />
        </div>
      </div>
    </div>
    <FolderList />
  </div>
</template>

<script>
import FolderList from "./FolderList.vue";
import Folder from "./Folders";
import changeBackground from "../helpers/changeBackground";
import { getLocal } from "../helpers/local";
export default {
  name: "Home",
  components: { Folder, FolderList },
  mounted() {
    if (getLocal("windows-settings")) {
      const settings = getLocal("windows-settings");
      changeBackground(settings.background);
    } else {
      changeBackground();
    }
  },
};
</script>

<style lang="scss">
.home {
  height: 100%;
  width: 100%;
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
