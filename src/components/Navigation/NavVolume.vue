<template>
  <div class="volumeModal">
    <h5>Speaker</h5>
    <div class="detail">
      <div class="icon" @click="volume = 0">
        <i class="fas fa-volume-mute" v-if="Number(volume) === 0"></i>
        <i class="fas fa-volume-down" v-else-if="volume < 50"></i>
        <i class="fas fa-volume-up" v-else></i>
      </div>
      <div class="input-box">
        <input type="range" min="0" max="100" v-model="volume" />
        <span :style="'width: ' + volume + '%'"></span>
      </div>
      <p>{{ volume }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavVolume",
  props: ["volume"],
  watch: {
    volume() {
      this.$emit("volume", this.volume);
    },
  },
};
</script>

<style lang="scss" scoped>
.dark .volumeModal {
  background: #111;
  color: #e9e9e9;
  h5:hover {
    background: #222;
  }
}

.volumeModal {
  position: absolute;
  right: 0;
  bottom: 35px;
  width: 320px;
  background: rgba(#fff, 0.9);
  padding: 5px 0;

  h5 {
    padding: 5px 15px;
    font-size: 18px;
    font-weight: normal;
    cursor: pointer;
    border-bottom: 1px solid rgba(black, 0.1);
    &:hover {
      background: #ddd;
    }
  }

  .detail {
    padding: 0 15px;
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    .icon {
      font-size: 20px;
      cursor: pointer;
      width: 35px;
    }
    .input-box {
      display: flex;
      align-items: center;
      flex: 1;
      position: relative;
      input {
        -webkit-appearance: none;
        width: 100%;
        height: 2px;
        background: #d3d3d3;
        outline: none;

        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 10px;
          height: 25px;
          border-radius: 10px;
          background: #04aa6d;
          cursor: pointer;
        }
      }
      span {
        position: absolute;
        height: 2px;
        background: #04aa6d;
      }
    }

    p {
      width: 35px;
      text-align: right;
      font-size: 18px;
    }
  }
}
</style>
