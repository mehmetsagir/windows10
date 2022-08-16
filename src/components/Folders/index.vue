<template>
  <component v-if="comp" :is="comp" />
</template>

<script>
import Chrome from "./Chrome";
import Twitter from "./Twitter";
import FastTyping from "./FastTyping";
import VueCountriesCities from "./VueCountriesCities";
import Instagram from "./Instagram";
import TodoApp from "./TodoApp";
import VSvgIcons from "./VSvgIcons";
import AnimateCSS from "./AnimateCSS";
import GithubFinder from "./GithubFinder";
import ChangeBackground from "./ChangeBackground";
import CardGame from "./CardGame";
import LiveCSS from "./LiveCSS";
import Minecraft from "./Minecraft";
import Store from "./Store.vue";
export default {
  name: "Folder",
  props: {
    comp: {
      required: true,
      type: String,
    },
  },
  components: {
    ChangeBackground,
    GithubFinder,
    AnimateCSS,
    VSvgIcons,
    TodoApp,
    Instagram,
    VueCountriesCities,
    FastTyping,
    Chrome,
    Twitter,
    CardGame,
    LiveCSS,
    Minecraft,
    Store,
  },
};
</script>
