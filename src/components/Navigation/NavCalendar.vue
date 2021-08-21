<template>
  <div class="calendar">
    <div class="time">{{ timeSecond }}</div>
    <v-calendar
      class="v-calendar"
      :attributes="attrs"
      title-position="left"
      is-expanded
      :is-dark="$store.state.theme === 'dark'"
    />
  </div>
</template>

<script>
export default {
  name: "Calendar",
  props: ["timeSecond"],
  data() {
    return {
      attrs: [
        {
          key: "today",
          backgroundColor: "#000",
          dates: new Date(),
          highlight: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.dark .calendar {
  background: #111;
  border-color: rgba(#333, 0.5);

  .time {
    border-bottom-color: rgba(#333, 0.5);
    color: #e9e9e9;
  }
}

.calendar {
  position: absolute;
  bottom: 35px;
  right: 0;
  background: rgba(#fff, 0.9);
  width: 300px;
  padding-bottom: 20px;
  border: 1px solid #ccc;

  .time {
    border-bottom: 1px solid rgba(#ccc, 0.7);
    padding: 20px;
    font-size: 35px;
    color: rgba(black, 0.6);
    margin-bottom: 10px;
  }

  .v-calendar {
    border-radius: 0;
    border: 0;
    background: transparent;
  }
}
</style>
