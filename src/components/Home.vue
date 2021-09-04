<template>
  <div id="home">
    <div v-if="$store.state.folders">
      <div v-for="(folder, index) in $store.state.folders" :key="index">
        <div v-if="folder.show">
          <Folder :comp="folder.path" />
        </div>
      </div>
    </div>
    <div class="select-container">
      <FolderList />
      <VueSelecto
        :selectableTargets="['.folder']"
        :selectByClick="true"
        :selectFromInside="true"
        :hitRate="30"
        @select="onSelect"
      />
    </div>
  </div>
</template>

<script>
import { VueSelecto } from "vue-selecto";
import FolderList from "./FolderList.vue";
import Folder from "./Folders";
import changeBackground from "../helpers/changeBackground";
import { getLocal } from "../helpers/local";
export default {
  name: "Home",
  components: { Folder, FolderList, VueSelecto },
  mounted() {
    if (getLocal("windows-settings")) {
      const settings = getLocal("windows-settings");
      changeBackground(settings.background);
    } else {
      changeBackground();
    }
  },
  methods: {
    onSelect(e) {
      e.added.forEach((el) => {
        el.classList.add("active");
      });
      e.removed.forEach((el) => {
        el.classList.remove("active");
      });
    },
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

.select-container {
  height: 100%;
  width: 100%;
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
