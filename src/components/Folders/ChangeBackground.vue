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
          <svg viewBox="0 0 24 24">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect x="0" y="0"></rect>
              <path
                d="M14,16 L12,16 L12,12.5 C12,11.6715729 11.3284271,11 10.5,11 C9.67157288,11 9,11.6715729 9,12.5 L9,17.5 C9,19.4329966 10.5670034,21 12.5,21 C14.4329966,21 16,19.4329966 16,17.5 L16,7.5 C16,5.56700338 14.4329966,4 12.5,4 L12,4 C10.3431458,4 9,5.34314575 9,7 L7,7 C7,4.23857625 9.23857625,2 12,2 L12.5,2 C15.5375661,2 18,4.46243388 18,7.5 L18,17.5 C18,20.5375661 15.5375661,23 12.5,23 C9.46243388,23 7,20.5375661 7,17.5 L7,12.5 C7,10.5670034 8.56700338,9 10.5,9 C12.4329966,9 14,10.5670034 14,12.5 L14,16 Z"
                fill="#000000"
                fill-rule="nonzero"
                transform="translate(12.500000, 12.500000) rotate(-315.000000) translate(-12.500000, -12.500000)"
              ></path>
            </g>
          </svg>
          <input type="file" id="file" @change="handleImage" accept="image/*" />
        </button>
        <button @click="changeBackground" class="apply">Apply</button>
      </div>
    </div>
  </Layout>
</template>

<script>
import background from "../../helpers/changeBackground";
import Layout from "../Layouts/FolderLayout";
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
.dark {
  .change-background .actions {
    background: #111;
    border-top-color: #222;

    .get-file-image svg path {
      fill: #e9e9e9;
    }
  }
}
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
      transition: all 150ms;
      &:hover {
        background: darken(#3b70ff, 10%);
      }
    }
    .get-file-image {
      padding: 0 20px;
      margin-right: 10px;
      position: relative;
      svg {
        width: 30px;
        cursor: pointer;
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
