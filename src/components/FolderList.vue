<template>
  <div>
    <Folder icon="chrome" title="Google Chrome" path="Chrome" />
    <Folder icon="twitter" title="Twitter" path="Twitter" />
    <Folder icon="fastTyping" title="Fast Typing" path="FastTyping" />
    <Folder
      icon="vueCountriesCities"
      title="Vue Countries Cities"
      path="VueCountriesCities"
    />
    <Folder icon="instagram" title="Instagram" path="Instagram" />
    <Folder icon="todoApp" title="Todo App" path="TodoApp" />
    <Folder icon="vSvgIcons" title="Vue Svg Icons" path="VSvgIcons" />
    <Folder icon="animateCSS" title="Animate CSS" path="AnimateCSS" />
    <Folder icon="githubFinder" title="Github Finder" path="GithubFinder" />
    <Folder icon="liveCSS" title="Live CSS" path="LiveCSS" />
    <Folder icon="cardGame" title="Card Game" path="CardGame" />
    <Folder icon="whatsapp" title="Whatsapp" path="Whatsapp" />
  </div>
</template>

<script>
import Folder from "./FolderButton.vue";
export default {
  name: "FolderList",
  components: { Folder },
};
</script>

<style lang="scss" scoped>
div {
  width: max-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 5px;
}
</style>
