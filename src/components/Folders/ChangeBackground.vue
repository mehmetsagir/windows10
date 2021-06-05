<template>
  <Layout folderName="changeBackground" :overflow="true">
    <div class="change-background">
        <div class="images-container">
          <div class="images">
            <div class="image" :class="selectedImage === imageName && 'active'" v-for="(imageName, key) in imagesName" :key="key" @click="selectedImage = imageName">
              <img :src="imageName" alt="">
            </div>
          </div>
        </div>
        <div class="actions">
          <button @click="changeBackground">Uygula</button>
        </div>
      </div>
  </Layout>
</template>

<script>
import changeBackground from "../../assets/js/changeBackground";
import Layout from "../FolderLayout";
export default {
  name: "ChangeBackground",
  components: { Layout },
  data() {
    return {
      selectedImage: '',
      imagesName: [
          "https://mehmetsagir.com/wallpaper/macos-big-sur-5120x2880-night-apple-october-2020-event-5k-23099.jpg",
          "https://mehmetsagir.com/wallpaper/2560x1600.jpg",
          "https://mehmetsagir.com/wallpaper/Anti%20Coding%20Coding%20Club.png",
          "https://mehmetsagir.com/wallpaper/cameron-venti-khqkxdDvs-M-unsplash.jpg",
          "https://mehmetsagir.com/wallpaper/jordan-whitfield-sm3Ub_IJKQg-unsplash.jpg",
          "https://mehmetsagir.com/wallpaper/marco-xu-zcvWUNrmPBQ-unsplash.jpg",
          "https://mehmetsagir.com/wallpaper/no-man-s-sky-wallpaper-8k-110377.jpg",
          "https://mehmetsagir.com/wallpaper/pexels-eberhard-grossgasteiger-1367192.jpg",
          "https://mehmetsagir.com/wallpaper/pexels-jeremy-bishop-2923595.jpg",
          "https://mehmetsagir.com/wallpaper/pexels-jonathan-petersson-1237119.jpg",
          "https://mehmetsagir.com/wallpaper/pexels-mengliu-di-3064079.jpg",
          "https://mehmetsagir.com/wallpaper/pexels-roberto-nickson-2559941.jpg",
          "https://mehmetsagir.com/wallpaper/pexels-roberto-shumski-1903702.jpg",
          "https://mehmetsagir.com/wallpaper/pexels-stefan-stefancik-919606.jpg",
          "https://mehmetsagir.com/wallpaper/sci_fi_science_space_fantasy_art_artwork_artistic_futuristic_12000x6000.jpg"
      ]
    }
  },
  methods: {
    changeBackground() {
      changeBackground(this.selectedImage)
    }
  }
};
</script>

<style lang="scss" scoped>
.change-background {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .images-container {
    flex: 1;
    .images {
      width: 100%;
      padding: 25px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 30px;
      .image {
        width: 300px;
        height: 150px;
        border-radius: 15px;
        overflow: hidden;
        position: relative;
        &.active {
          opacity: .4;
        }
        img {
          object-position: center;
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .actions {
    background: #fafafa;
    position: sticky;
    width: 100%;
    bottom: 0;
    text-align: right;
    padding: 10px 25px;
    button {
      background: #3b70ff;
      padding: 10px 50px;
      font-size: 15px;
      border-radius: 3px;
      color: #fafafa;
    }
  }
}
</style>
