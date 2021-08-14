<template>
  <button
    @dblclick="openFolder(path, icon, title)"
    @click="isActive = true"
    :class="$store.state.folderSize.shortName"
    v-click-outside="notActive"
  >
    <img
      :src="require(`/src/assets/folder-icons/${icon}.svg`)"
      :width="$store.state.folderSize.size"
      :alt="title"
    />
    <p>{{ title }}</p>
  </button>
</template>

<script>
import { setFolder } from "../helpers/local";
export default {
  name: "FolderButton",
  data() {
    return {
      isActive: false,
    };
  },
  props: {
    icon: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    path: {
      required: true,
      type: String,
    },
  },
  methods: {
    openFolder(path, icon, title) {
      this.isActive = false;
      if (path && icon && title) {
        setFolder(title, icon, path);
        this.$store.dispatch(
          "fetchFolders",
          JSON.parse(localStorage.getItem("windows-folders"))
        );
      }
    },
    notActive() {
      this.isActive = false;
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  max-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 5px;
  margin-right: 5px;
  &.md {
    width: 85px;
    min-height: 85px;
  }
  &.lg {
    width: 95px;
    min-height: 95px;
  }
  &.sm {
    width: 85px;
    min-height: 75px;
  }
  &.active {
    background: rgba(#0080ff, 0.3);
    border: 1px solid rgba(#0080ff, 0.8);
  }
  p {
    margin-top: 4px;
    font-size: 13px;
    color: white;
    line-height: 17px;
  }
}
</style>
