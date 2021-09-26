<template>
  <div
    class="notification-item"
    v-if="$store.state.showDesktopNotifications === notification.show"
  >
    <div class="notification-header">
      <button
        class="title"
        @click="
          openFolder(
            notification.actionFolder.title,
            notification.actionFolder.icon,
            notification.actionFolder.path
          )
        "
      >
        {{ notification.title }}
      </button>
      <button v-if="notification.show" @click="hideNotification" class="close">
        <i class="fas fa-arrow-right"></i>
      </button>
      <button v-else @click="removeNotification" class="close">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <div class="notification-content">
      <p class="notification-subtitle">
        {{ notification.description }}
      </p>
    </div>
  </div>
</template>

<script>
import { setFolder } from "../../helpers/folders";
import { getLocal, setLocal } from "../../helpers/local";
export default {
  name: "NotificationItem",
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  methods: {
    hideNotification() {
      this.$store.state.notifications.forEach((item) => {
        if (item.title === this.notification.title) {
          item.show = false;
        }
      });
      setLocal("notifications", this.$store.state.notifications);
    },
    removeNotification() {
      this.$store.dispatch("removeNotification", this.notification);
    },
    openFolder(title, icon, path) {
      if (title && icon && path) {
        this.$store.dispatch("closeShowDesktopNotifications");
        setFolder(title, icon, path);
        this.$store.dispatch("fetchFolders", getLocal("windows-folders"));
        this.removeNotification();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.dark .notification-item {
  background: rgba(lighten(black, 20%), 0.9);
  * {
    color: #f0f4fa;
  }
}
.notification-item {
  background: rgba(#f0f4fa, 0.9);
  text-align: left;
  width: 400px;
  border-radius: 2px;

  .notification-header {
    position: relative;
    padding: 20px 15px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      font-size: 17px;
      font-weight: 400;
    }

    .close {
      position: absolute;
      top: 5px;
      right: 10px;
      font-size: 15px;
      padding: 5px;
      opacity: 0;
      transition: 250ms;
    }
  }

  .notification-content {
    padding: 5px 15px 20px;
    font-size: 13px;
    opacity: 0.8;
  }

  &:hover {
    .notification-header button {
      opacity: 1;
    }
  }
}
</style>
