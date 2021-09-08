<template>
  <div class="mobile-warning">
    <p>This project is not compatible for phones.</p>
    <button @click="proceedAnyway">Proceed anyway</button>
  </div>
</template>

<script>
export default {
  methods: {
    proceedAnyway() {
      this.$emit("continue", false);
    }
  }
}
</script>


<style lang="scss" scoped>
.mobile-warning {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: gray;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 0 20px;
  text-align: center;
  font-weight: 500;

  p {
    font-size: 20px;
  }

  button {
    background: darken(gray, 10%);
    padding: 15px 30px;
    color: #ddd;
    border-radius: 5px;
    font-size: 15px;
  }
  
}
</style>