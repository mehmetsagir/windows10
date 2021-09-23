<template>
  <div id="app">
    <Home class="home" />
    <Navigation />
    <ContextMenu />
    <MobileWarning v-if="mobileWarning" @continue="mobileWarning = $event" />
    <div id="brightness-overlay" />
  </div>
</template>

<script>
import Navigation from "./components/Navigation/";
import Home from "./components/Home.vue";
import ContextMenu from "./components/ContextMenu";
import { getLocal } from "./helpers/local";
import MobileWarning from "./components/MobileWarning.vue";
export default {
  name: "App",
  data() {
    return {
      mobileWarning: window.innerWidth > 540 ? false : true,
    };
  },
  components: { ContextMenu, Navigation, Home, MobileWarning },
  created() {
    this.$store.dispatch(
      "setFolderSort",
      getLocal("windows-settings").folderSortType
    );
    document.body.setAttribute(
      "night-light",
      getLocal("windows-settings").nightLight || false
    );
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  font-family: "Roboto", sans-serif;
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

body[night-light]::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(red, 0.13);
  z-index: 99999;
  pointer-events: none;
  opacity: 0;
  transition: all 1500ms ease;
}

body[night-light="true"]::before {
  opacity: 1;
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

#brightness-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(black, 0.8);
  z-index: 99999;
  opacity: 0;
  pointer-events: none;
  transition: all 1s ease;
}
</style>
