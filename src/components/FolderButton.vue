<template>
  <button @dblclick="openFolder(path, icon, title)"
          @click="isActive = true"
          :class="isActive && 'active'"
          v-click-outside="notActive">
    <img
      :src="require(`/src/assets/folder-icons/${icon}.svg`)"
      width="35px"
      :alt="title"
    />
    <p>{{ title }}</p>
  </button>
</template>

<script>
import { setFolder } from "../assets/js/local";
export default {
  name: "FolderButton",
  data() {
    return {
      isActive: false
    }
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
      type: String
    }
  },
  methods: {
    openFolder(path, icon, title) {
      this.isActive = false
      if (path && icon && title) {
        setFolder(title, icon, path)
        this.$store.state.folders = JSON.parse(localStorage.getItem('windows-folders'))
      }
    },
    notActive() {
      this.isActive = false
    }
  },
}
</script>

<style lang="scss" scoped>
button {
  max-width: 100px;
  min-height: 85px;
  width: 85px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
  margin-right: 10px;
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
