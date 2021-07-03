<template>
  <ul id="rmenu" class="context-menu" v-click-outside="hide">
    <li>
      <button @click="reload">Refresh</button>
    </li>
    <li>
      <button
        @click="
          changeBackgroundShow(
            'changeBackground',
            'thisPC',
            'Change Background'
          )
        "
      >
        Change Background
      </button>
    </li>
  </ul>
</template>

<script>
import { setFolder } from "../assets/js/local";
export default {
  name: "ContextMenu",
  methods: {
    hide() {
      document.getElementById("rmenu").classList.remove("show");
    },
    reload() {
      window.location.reload();
    },
    changeBackgroundShow(path, icon, title) {
      if (path && icon && title) {
        setFolder(title, icon, path);
        this.$store.state.folders = JSON.parse(
          localStorage.getItem("windows-folders")
        );
      }
      this.hide();
    },
  },
};
</script>

<style lang="scss" scoped>
.context-menu {
  z-index: 9999;
  display: none;
  flex-direction: column;
  width: 230px;
  padding: 5px 0;
  position: absolute;
  top: 150px;
  left: 150px;
  background: #f8f8f8;
  box-shadow: 5px 5px 10px -5px #000;
  &.show {
    display: flex;
  }
  li {
    button {
      display: block;
      height: 26px;
      width: 100%;
      padding: 0 15px;
      text-align: left;
      font-size: 12px;
      &:hover {
        background: #ccc;
      }
    }
  }
}
</style>
