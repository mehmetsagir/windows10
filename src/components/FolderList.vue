<template>
  <div class="folder-wrapper">
    <div v-for="(folder, key) in this.$store.state.folderList" :key="key">
      <Folder :icon="folder.icon" :title="folder.title" :path="folder.path" />
    </div>
  </div>
</template>

<script>
import Folder from "./FolderButton.vue";
export default {
  name: "FolderList",
  components: { Folder },
};
</script>

<style lang="scss" scoped>
.folder-wrapper {
  width: max-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 5px;
}
</style>
