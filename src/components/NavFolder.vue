<template>
  <div class="navFolder" @click="updateShowFolder">
    <img
      :src="require(`/src/assets/folder-icons/${folder.icon}.svg`)"
      width="15px"
      :alt="folder.title"
    />
    <p>
      {{
        folder.title.length > 18
          ? folder.title.slice(0, 17) + "..."
          : this.folder.title
      }}
    </p>
  </div>
</template>

<script>
import { getFolders, updateShowFolder } from "../helpers/local";

export default {
  name: "NavFolder",
  props: {
    folder: {
      required: true,
      type: Object,
    },
  },
  methods: {
    updateShowFolder() {
      updateShowFolder(this.folder.path);
      this.$store.dispatch("fetchFolders", getFolders());
    },
  },
};
</script>

<style lang="scss" scoped>
.navFolder {
  height: 30px;
  width: 180px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  overflow: hidden;
  transition: 300ms;
  &:hover {
    background: #ccc;
  }
  *::selection {
    background: none;
  }
  img {
    margin-right: 10px;
  }
}
</style>
