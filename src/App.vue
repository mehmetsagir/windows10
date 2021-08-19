<template>
  <div id="app">
    <Home class="home" />
    <Navigation />
    <ContextMenu />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Home from "./components/Home.vue";
import ContextMenu from "./components/ContextMenu";
import { getLocal } from "./helpers/local";
export default {
  name: "App",
  components: { ContextMenu, Navigation, Home },
  created() {
    this.$store.dispatch(
      "setFolderSort",
      getLocal("windows-settings").folderSortType
    );
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
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 99px;
    display: none;
  }
  &:hover::-webkit-scrollbar-thumb {
    display: block;
  }
}

.dark * {
  &::-webkit-scrollbar-thumb {
    background: #333;
  }
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
