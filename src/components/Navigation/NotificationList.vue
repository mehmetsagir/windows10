<template>
  <div
    :class="`notification-wrapper ${
      !$store.state.showDesktopNotifications ? 'relative' : ''
    }`"
  >
    <NotificationItem
      v-for="(notification, key) in $store.state.notifications"
      :key="key"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationItem from "./NotificationItem.vue";

export default {
  name: "NotificationList",
  props: {
    relative: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: { NotificationItem },
};
</script>

<style lang="scss" scoped>
.notification-wrapper {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  &.relative {
    position: relative;
    bottom: 0;
    right: 0;
    .notification-item {
      width: 100%;
    }
  }
}
</style>
