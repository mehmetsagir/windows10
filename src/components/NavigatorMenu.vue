<template>
  <div class="navigator-menu">
    <div class="left-bar">
      <button>
        <i class="fas fa-grip-lines"></i>
        <span>Başlangıç</span>
      </button>
      <div class="actions">
        <button>
          <i class="fas fa-user-circle"></i>
          <span>User</span>
        </button>
        <button>
          <i class="far fa-file"></i>
          <span>Belgeler</span>
        </button>
        <button>
          <i class="fas fa-download"></i>
          <span>İndirmeler</span>
        </button>
        <button>
          <i class="fas fa-music"></i>
          <span>Müzik</span>
        </button>
        <button>
          <i class="fas fa-image"></i>
          <span>Resimler</span>
        </button>
        <button>
          <i class="fas fa-video"></i>
          <span>Videolar</span>
        </button>
        <button>
          <i class="fas fa-desktop"></i>
          <span>Ağ</span>
        </button>
        <button>
          <i class="fas fa-id-card-alt"></i>
          <span>Kişisel Klasör</span>
        </button>
        <button>
          <i class="fas fa-file"></i>
          <span>Dosya Gezgini</span>
        </button>
        <button>
          <i class="fas fa-cog"></i>
          <span>Ayarlar</span>
        </button>
        <button>
          <i class="fas fa-power-off"></i>
          <span>Aç/Kapa</span>
        </button>
      </div>
    </div>

    <div class="container">
      <div class="folder" v-for="(i, index) in 50" :key="index">
        <i class="fas fa-folder-open"></i> Folder
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigatorMenu",
};
</script>

<style lang="scss" scoped>
.navigator-menu {
  position: absolute;
  left: 0;
  bottom: 50px;
  height: 500px;
  width: 330px;
  background: rgba(#ccc, 0.9);
  display: flex;

  .left-bar {
    height: 100%;
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #ccc;
    &:hover {
      position: absolute;
      width: 230px;

      button {
        justify-content: start;
        span {
          visibility: visible;
          position: relative;
        }
        i {
          margin-right: 15px;
        }
      }
    }

    button {
      height: 35px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        min-width: 50px;
        font-size: 15px;
        color: rgba(#000, 0.8);
      }
      span {
        visibility: hidden;
        position: absolute;
      }
      &:hover {
        color: black;
        background: #fff;
      }
    }

    .actions {
      width: 100%;
    }
  }
  .container {
    flex: 1;
    height: 100%;
    overflow: auto;
    padding: 10px 0;

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
    .folder {
      height: 45px;
      display: flex;
      align-items: center;
      padding: 0 15px;
      cursor: pointer;
      &:hover {
        background: lighten(#ccc, 1%);
      }
      i {
        font-size: 20px;
        margin-right: 10px;
        color: orange;
      }
    }
  }
}
</style>
