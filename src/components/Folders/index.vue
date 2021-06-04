<template>
  <div>
    <Chrome v-if="comp == 'Chrome'" />
    <Twitter v-if="comp == 'Twitter'" />
    <FastTyping v-if="comp == 'FastTyping'" />
    <VueCountriesCities v-if="comp == 'VueCountriesCities'" />
    <Instagram v-if="comp == 'Instagram'" />
    <TodoApp v-if="comp == 'TodoApp'" />
    <VSvgIcons v-if="comp == 'VSvgIcons'" />
    <AnimateCSS v-if="comp == 'AnimateCSS'" />
    <GithubFinder v-if="comp == 'GithubFinder'" />
  </div>
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
export default {
  name: "Folder",
  props: {
    comp: {
      required: true,
      type: String
    }
  },
  components: { GithubFinder, AnimateCSS, VSvgIcons, TodoApp, Instagram, VueCountriesCities, FastTyping, Chrome, Twitter }
};
</script>
