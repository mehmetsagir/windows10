<template>
  <div id="app">
    <Home class="home" />
    <Navigator />
    <ContextMenu />
  </div>
</template>

<script>
import Navigator from "./components/Navigator";
import Home from "./components/Home.vue";
import ContextMenu from "./components/ContextMenu";
import { getLocal } from "./helpers/local";
export default {
  name: "App",
  components: { ContextMenu, Navigator, Home },
  created() {
    this.$store.dispatch(
      "setFolderSort",
      getLocal("windows-settings").folderSortType
    ); // HATALI
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  font-family: Arial, Helvetica, sans-serif;
}

html,
body {
  background: black;
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: inherit;
}

iframe {
  width: 100%;
  height: 100%;
  box-shadow: none;
  border: 0;
}

#app {
  height: 100vh;
  width: 100vw;
  overflow: auto;
  display: flex;
  flex-direction: column;

  .home {
    flex: 1;
  }
}

button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
