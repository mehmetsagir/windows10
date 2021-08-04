<template>
  <Layout folderName="changeBackground" :overflow="true">
    <div class="change-background">
      <div class="images-container">
        <div class="images">
          <div
            class="image"
            :class="selectedImage === imageName && 'active'"
            v-for="(imageName, key) in imagesName"
            :key="key"
            @click="selectedImage = imageName"
          >
            <img :src="imageName" alt="" />
          </div>
        </div>
      </div>
      <div class="actions">
        <button class="get-file-image">
          <img src="../../assets/attachments-icon.svg" alt="attachments-icon" />
          <input type="file" id="file" @change="handleImage" accept="image/*" />
        </button>
        <button @click="changeBackground" class="apply">Apply</button>
      </div>
    </div>
  </Layout>
</template>

<script>
import background from "../../helpers/changeBackground";
import Layout from "../FolderLayout";
export default {
  name: "ChangeBackground",
  components: { Layout },
  data() {
    return {
      selectedImage: "",
      imagesName: [
        "https://mehmetsagir.com/wallpaper/1.webp",
        "https://mehmetsagir.com/wallpaper/2.webp",
        "https://mehmetsagir.com/wallpaper/3.webp",
        "https://mehmetsagir.com/wallpaper/4.webp",
        "https://mehmetsagir.com/wallpaper/gifwallpaper.gif",
      ],
    };
  },
  methods: {
    changeBackground() {
      if (this.selectedImage.length > 0) {
        background(this.selectedImage);
      }
    },
    handleImage(e) {
      const file = e.target.files[0];

      if (file.name.toLowerCase().match(/\.jpe?g|png|webp|gif/)) {
        const reader = new FileReader();

        reader.addEventListener("load", function (e) {
          background(e.target.result);
        });
        reader.readAsDataURL(file);
      }
    },
  },
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
          opacity: 0.4;
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
    height: 60px;
    min-height: 60px;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 25px;
    border-top: 1px solid #ddd;
    button {
      height: 35px;
      border-radius: 3px;
    }
    .apply {
      background: #3b70ff;
      padding: 0 50px;
      font-size: 15px;
      color: #fafafa;
      transition: background 150ms;
      &:hover {
        background: darken(#3b70ff, 10%);
      }
    }
    .get-file-image {
      padding: 0 20px;
      margin-right: 10px;
      position: relative;
      img {
        width: 30px;
      }
      input {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        opacity: 0;
      }
    }
  }
}
</style>
