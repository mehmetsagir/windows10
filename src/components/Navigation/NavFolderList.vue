<template>
  <div v-if="$store.state.folders" class="folders">
    <div
      v-for="(folder, key) in $store.state.folders"
      :key="key"
      class="folder"
    >
      <NavFolder :folder="folder" />
    </div>
  </div>
</template>

<script>
import NavFolder from "./NavFolder.vue";
export default {
  name: "NameFolders",
  components: { NavFolder },
};
</script>

<style lang="scss" scoped>
.folders {
  display: flex;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
