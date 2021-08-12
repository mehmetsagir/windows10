<template>
  <Layout
    folderName="CardGame"
    :overflow="startGame || isGameOver ? false : true"
  >
    <div class="card-container">
      <div
        class="card"
        v-for="image in imageData"
        :key="image.id"
        :class="image.active && 'active'"
        @click="selectCard(image)"
      >
        <img :src="image.image" alt="Card" />
      </div>
      <div class="game-over" v-if="isGameOver">
        <div class="game-over-modal">
          <div class="game-over-modal-header">Game Over</div>
          <div class="game-over-modal-content">
            Congratulations, you completed the game in {{ gameTime }} seconds!
          </div>
          <div class="game-over-modal-footer">
            <button @click="sortData">PLAY</button>
          </div>
        </div>
      </div>
      <div class="startGame" v-if="startGame">
        <button @click="sortData">Play</button>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../Layouts/FolderLayout.vue";
export default {
  components: { Layout },
  name: "CardGame",
  data() {
    return {
      imageData: [
        {
          id: 0,
          imageID: 0,
          image: "https://picsum.photos/300/300?random=1",
          rowNumber: Math.floor(Math.random() * 100),
          active: false,
        },
        {
          id: 1,
          imageID: 0,
          image: "https://picsum.photos/300/300?random=1",
          rowNumber: Math.floor(Math.random() * 100),
          active: false,
        },
        {
          id: 2,
          imageID: 1,
          image: "https://picsum.photos/300/300?random=2",
          rowNumber: Math.floor(Math.random() * 100),
          active: false,
        },
        {
          id: 3,
          imageID: 1,
          image: "https://picsum.photos/300/300?random=2",
          rowNumber: Math.floor(Math.random() * 100),
          active: false,
        },
        {
          id: 4,
          imageID: 2,
          image: "https://picsum.photos/300/300?random=3",
          rowNumber: Math.floor(Math.random() * 100),
          active: false,
        },
        {
          id: 5,
          imageID: 2,
          image: "https://picsum.photos/300/300?random=3",
          rowNumber: Math.floor(Math.random() * 100),
          active: false,
        },
        {
          id: 6,
          imageID: 3,
          image: "https://picsum.photos/300/300?random=4",
          rowNumber: Math.floor(Math.random() * 100),
          active: false,
        },
        {
          id: 7,
          imageID: 3,
          image: "https://picsum.photos/300/300?random=4",
          rowNumber: Math.floor(Math.random() * 100),
          active: false,
        },
        {
          id: 8,
          imageID: 4,
          image: "https://picsum.photos/300/300?random=5",
          rowNumber: Math.floor(Math.random() * 100),
          active: false,
        },
        {
          id: 9,
          imageID: 4,
          image: "https://picsum.photos/300/300?random=5",
          rowNumber: Math.floor(Math.random() * 100),
          active: false,
        },
        {
          id: 10,
          imageID: 5,
          image: "https://picsum.photos/300/300?random=6",
          rowNumber: Math.floor(Math.random() * 100),
          active: false,
        },
        {
          id: 11,
          imageID: 5,
          image: "https://picsum.photos/300/300?random=6",
          rowNumber: Math.floor(Math.random() * 100),
          active: false,
        },
        {
          id: 12,
          imageID: 6,
          image: "https://picsum.photos/300/300?random=7",
          rowNumber: Math.floor(Math.random() * 100),
          active: false,
        },
        {
          id: 13,
          imageID: 6,
          image: "https://picsum.photos/300/300?random=7",
          rowNumber: Math.floor(Math.random() * 100),
          active: false,
        },
        {
          id: 14,
          imageID: 7,
          image: "https://picsum.photos/300/300?random=8",
          rowNumber: Math.floor(Math.random() * 100),
          active: false,
        },
        {
          id: 15,
          imageID: 7,
          image: "https://picsum.photos/300/300?random=8",
          rowNumber: Math.floor(Math.random() * 100),
          active: false,
        },
        {
          id: 16,
          imageID: 8,
          image: "https://picsum.photos/300/300?random=9",
          rowNumber: Math.floor(Math.random() * 100),
          active: false,
        },
        {
          id: 17,
          imageID: 8,
          image: "https://picsum.photos/300/300?random=9",
          rowNumber: Math.floor(Math.random() * 100),
          active: false,
        },
      ],
      firstSelected: null,
      secondSelected: null,
      isGameOver: false,
      startGame: true,
      gameTime: 0,
      gameTimeInterval: null,
    };
  },
  methods: {
    selectCard(image) {
      if (this.firstSelected == null) {
        this.firstSelected = image;
        this.imageData.filter((item) => {
          if (item === this.firstSelected) {
            item.active = true;
          }
        });
      } else if (this.secondSelected == null) {
        this.secondSelected = image;
        this.imageData.filter((item) => {
          if (item === this.secondSelected) {
            item.active = true;
          }
        });
      }
      this.gameOver();
    },
    gameOver() {
      let count = 0;
      this.imageData.map((image) => {
        if (image.active) {
          count++;
        }
      });
      if (count == this.imageData.length) {
        setTimeout(() => {
          this.isGameOver = true;
          this.imageData.map((image) => {
            image.rowNumber = Math.floor(Math.random() * 100);
            image.active = false;
          });
          clearInterval(this.gameTimeInterval);
        }, 400);
      }
    },
    sortData() {
      this.isGameOver = false;
      this.startGame = false;
      this.gameTime = 0;
      this.gameTimeInterval = setInterval(() => {
        this.gameTime++;
      }, 1000);
      this.imageData.sort(function (a, b) {
        return a.rowNumber - b.rowNumber;
      });
    },
  },
  watch: {
    secondSelected() {
      if (this.firstSelected !== null && this.secondSelected !== null) {
        if (this.firstSelected.imageID !== this.secondSelected.imageID) {
          setTimeout(() => {
            this.imageData.filter((item) => {
              if (item === this.firstSelected) {
                item.active = false;
              }
              if (item === this.secondSelected) {
                item.active = false;
              }
            });
            this.firstSelected = null;
            this.secondSelected = null;
          }, 1000);
        } else {
          this.firstSelected = null;
          this.secondSelected = null;
        }
      }
    },
  },
};
</script>

<style lang="scss">
*::selection {
  background: none;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 50px;

  .card {
    position: relative;
    height: 250px;
    width: 250px;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transform: perspective(600px) rotateY(180deg);
    transition: 300ms;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: black;
      border-radius: 10px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    &.active {
      transform: perspective(0) rotateY(0);
      pointer-events: none;
      &::before {
        opacity: 0;
      }
    }
  }
  .game-over {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(white, 0.7);
    display: grid;
    place-content: center;
    &-modal {
      width: 400px;
      background: #fff;
      border-radius: 5px;
      &-header {
        text-align: center;
        line-height: 50px;
        font-size: 20px;
        border-bottom: 1px solid #ddd;
      }
      &-content {
        padding: 15px 10px;
        font-size: 18px;
        line-height: 25px;
      }
      &-footer {
        button {
          display: block;
          width: 100%;
          height: 45px;
          cursor: pointer;
          background: #0095f6;
          border: none;
          font-size: 15px;
          color: white;
          font-weight: bold;
        }
      }
    }
  }
  .startGame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(white, 0.7);
    display: grid;
    place-content: center;
    button {
      width: 180px;
      height: 50px;
      font-size: 25px;
      font-family: Georgia, "Times New Roman", Times, serif;
      background: #0095f6;
      border: none;
      outline: none;
      color: white;
      cursor: pointer;
      border-radius: 5px;
    }
  }
}
</style>
