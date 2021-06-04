<template>
  <div id="app">
    <Home class="home" />
    <Navigator />
  </div>
</template>

<script>
import Navigator from "./components/Navigator";
import Home from "./components/Home.vue";
export default {
  name: "App",
  components: { Navigator, Home }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: none;
}

html,
body {
  background: black;
  max-height: 100vh;
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
