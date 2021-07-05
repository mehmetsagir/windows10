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
    <ChangeBackground v-if="comp == 'changeBackground'" />
    <LiveCSS v-if="comp == 'LiveCSS'" />
    <CardGame v-if="comp == 'CardGame'" />
    <Whatsapp v-if="comp == 'Whatsapp'" />
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
import ChangeBackground from "./ChangeBackground";
import CardGame from "./CardGame";
import LiveCSS from "./LiveCSS";
import Whatsapp from "./Whatsapp";
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
    Whatsapp,
  },
};
</script>
