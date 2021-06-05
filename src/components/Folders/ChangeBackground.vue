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
          "https://lh3.google.com/u/0/d/1w7RAigPwIFIfbbJzcFEnB3f_XZ0-fbOA=w1920-h1009-iv1",
          "https://lh3.google.com/u/0/d/13tQ4Ta1hAtYxTKzdZ5-t4DmCJ3GtTs83=w1920-h1009-iv1",
          "https://lh3.google.com/u/0/d/1EOTn3rur86tKn9Kq2Wei0NueYTdkcXkJ=w1920-h1009-p-k-nu-iv1",
          "https://lh3.google.com/u/0/d/1cs0EO6C2ObErUxRnvdSYRT3LGBkVwsEg=w1920-h1009-p-k-nu-iv1",
          "https://lh3.google.com/u/0/d/1FzFhyV-Gh1xnS3rWYuSF7IS-v505_u7a=w1920-h1009-p-k-nu-iv1",
          "https://lh3.google.com/u/0/d/1sYygG_vHyVoC322oUBY7ztJQQQaunB8o=w1920-h1009-p-k-nu-iv1",
          "https://lh3.google.com/u/0/d/1G8oHi9pND8aCMgI24EvMgvE1eDINFf3S=w1920-h1009-p-k-nu-iv1",
          "https://lh3.google.com/u/0/d/1ozgfDJc-jYVboaaOGrevPmkjuLTcyJT8=w1920-h1009-p-k-nu-iv1",
          "https://lh3.google.com/u/0/d/1qpcGuypnNA_xs2akxven15bxHgrEPSfD=w1920-h1009-p-k-nu-iv1",
          "https://lh3.google.com/u/0/d/1p7eKLOflmyY76xes-3MtmkPXIR89Rpxb=w1920-h1009-p-k-nu-iv1",
          "https://lh3.google.com/u/0/d/1ug9j-mkb3AcDWo5uV0tMt6V4j3fq5pbb=w1920-h1009-p-k-nu-iv1",
          "https://lh3.google.com/u/0/d/11f_Ytl3hzPQJjUv4n8EcSWCeVDxDzt_c=w1920-h1009-p-k-nu-iv1",
          "https://lh3.google.com/u/0/d/1eW3KaOp-_8tSiEJE68MocW6-gPzFFSu4=w1920-h1009-p-k-nu-iv1",
          "https://steamuserimages-a.akamaihd.net/ugc/2442516254923394966/B256273E19D55D3FEF300BA458A7A5C36843D1E5/",
          "http://newevolutiondesigns.com/images/freebies/hd-wallpaper-27.jpg"
      ]
    }
  },
  methods: {
    changeBackground() {
      if (localStorage.getItem('windows-settings')) {
        const settings = JSON.parse(localStorage.getItem('windows-settings'))
        settings.background = this.selectedImage
        localStorage.setItem('windows-settings', JSON.stringify(settings))
        changeBackground(this.selectedImage)
      }
    },
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
