<template>
  <Layout folderName="Store" :overflow="true">
    <div class="header">
      <h3>
        {{
          this.selections.filter(
            (selected) => selected.value === this.listingType
          )[0].title
        }}
      </h3>
      <select v-model="listingType">
        <option
          v-for="selection in selections"
          :key="selection.value"
          :value="selection.value"
        >
          {{ selection.title }}
        </option>
      </select>
    </div>
    <div class="store-content" v-if="folderList.length">
      <div
        v-for="folder in folderList"
        :class="`card ${activeClass === folder.id ? 'active' : ''}`"
        :key="folder.id"
      >
        <img
          :src="require(`/src/assets/folder-icons/${folder.icon}.svg`)"
          :alt="folder.path"
        />
        <p>{{ folder.title }}</p>
        <div class="actions">
          <button
            class="install-btn"
            v-if="!folder.installed"
            @click="installApp(folder.id)"
          >
            Install
          </button>
          <button
            class="open-btn"
            v-if="folder.installed"
            @click="openFolder(folder.path, folder.icon, folder.title)"
          >
            Open
          </button>
          <button
            class="remove-btn"
            v-if="folder.installed && folder.id !== 0"
            @click="removeApp(folder.id)"
          >
            Remove
          </button>
        </div>
        <div :class="`progress ${actionType}`"></div>
      </div>
    </div>
    <p v-else class="not-found-warning">
      {{
        this.selections.filter(
          (selected) => selected.value === this.listingType
        )[0].title
      }}
      Not Found!
    </p>
  </Layout>
</template>

<script>
import Layout from "../Layouts/FolderLayout";
import { setFolder } from "../../helpers/folders";
import { getLocal, setLocal } from "../../helpers/local";
export default {
  name: "Store",
  components: { Layout },
  data() {
    return {
      activeClass: null,
      actionType: "",
      listingType: "all",
      selections: [
        {
          value: "all",
          title: "All Apps",
        },
        {
          value: "installed",
          title: "Installed Apps",
        },
        {
          value: "notInstalled",
          title: "Not Installed Apps",
        },
      ],
    };
  },
  methods: {
    openFolder(path, icon, title) {
      this.isActive = false;
      if (path && icon && title) {
        setFolder(title, icon, path);
        this.$store.dispatch("fetchFolders", getLocal("windows-folders"));
        this.$emit("hideMenu", false);
      }
    },
    installApp(id) {
      if (this.activeClass !== null) return;
      this.activeClass = id;
      this.actionType = "install";
      setTimeout(() => {
        const apps = getLocal("apps");
        const newApps = apps.filter((app) =>
          app.id === id ? { ...(app.installed = true) } : app
        );
        setLocal("apps", newApps);
        this.$store.dispatch("updateApps", newApps);
        this.activeClass = null;
        this.actionType = "";
      }, 1100);
    },
    removeApp(id) {
      if (this.activeClass !== null) return;
      this.activeClass = id;
      this.actionType = "remove";
      setTimeout(() => {
        const apps = getLocal("apps");
        const newApps = apps.filter((app) =>
          app.id === id ? { ...(app.installed = false) } : app
        );
        setLocal("apps", newApps);

        this.$store.dispatch("updateApps", newApps);
        this.activeClass = null;
        this.actionType = "";
      }, 1100);
    },
  },
  computed: {
    folderList() {
      if (this.listingType === "installed") {
        return this.$store.state.apps.filter((app) => app.installed === true);
      } else if (this.listingType === "notInstalled") {
        return this.$store.state.apps.filter((app) => app.installed === false);
      }
      return this.$store.state.apps;
    },
  },
};
</script>

<style lang="scss" scoped>
.dark {
  $color: lighten(#111111, 7%);
  .header {
    background: #111111;
    border-color: $color;
    select {
      background: #111111;
      border: 1px solid $color;
    }
  }
  .store-content .card {
    border-color: $color;
    .actions button.remove-btn {
      color: #ccc;
    }
    &.active,
    &:hover {
      border-color: lighten(#111111, 15%);
    }
    .progress {
      background: $color;
    }
  }
}
.header {
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 35px;
  border-bottom: 1px solid rgba(#ddd, 0.8);

  select {
    padding: 6px 15px;
    width: 200px;
    border: 1px solid #ddd;
    appearance: none;
    border-radius: 3px;
    position: relative;
    background-image: url(../../assets/angle-down.svg);
    background-repeat: no-repeat;
    background-position: calc(100% - 15px);
    background-size: 13px;
  }
}
.store-content {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 25px 35px;

  .card {
    flex: 1;
    min-width: 220px;
    max-width: 420px;
    padding: 34px 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border: 1px solid rgba(#ccc, 0.5);
    opacity: 0.6;
    transition: 250ms;

    img {
      width: 45px;
      filter: grayscale(100%);
      transition: 250ms;
    }

    .actions {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-left: auto;
      gap: 0;
      button {
        padding: 5px 8px;
        border-radius: 3px;
        font-size: 13px;
        color: #fff;
        &.install-btn,
        &.open-btn {
          background: #0067b8;
        }
        &.remove-btn {
          color: black;
          width: 0;
          overflow: hidden;
          padding: 0;
          transition: 250ms;
        }
      }
    }

    .progress {
      width: 80%;
      height: 4px;
      border-radius: 4px;
      background: #ddd;
      overflow: hidden;
      position: relative;
      visibility: hidden;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        transition: 1s;
      }

      &.install::before {
        background: green;
      }
      &.remove::before {
        background: red;
      }

      @keyframes progres {
        0% {
          width: 0;
        }
        25% {
          width: 10%;
        }
        100% {
          width: 100%;
        }
      }
    }

    &.active .progress {
      visibility: visible;
      &::before {
        animation: progres 1s forwards;
      }
    }

    &:hover,
    &.active {
      opacity: 1;
      border-color: rgba(#ccc, 0.7);
      img {
        filter: grayscale(0);
      }
      .actions {
        gap: 5px;
        button.remove-btn {
          width: max-content;
          overflow: auto;
          padding: 5px 8px;
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
}
.not-found-warning {
  font-size: 15px;
  margin-top: 40px;
  text-align: center;
  opacity: 0.6;
}
</style>
