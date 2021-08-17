import { getLocal, setLocal } from "./local";

export const getFolders = () => {
  if (getLocal("windows-folders")) {
    return getLocal("windows-folders");
  } else {
    return [];
  }
};

export const setFolder = (title, icon, path) => {
  if (getLocal("windows-folders")) {
    const folders = getLocal("windows-folders");
    const result = folders.find((item) => item.title === title);

    if (result) {
      return false;
    } else {
      folders.push({
        title,
        icon,
        path,
        fullScreen: false,
        show: true,
      });
      setLocal("windows-folders", folders);
      return true;
    }
  } else {
    const folders = [];
    folders.push({
      title,
      icon,
      path,
      fullScreen: false,
      show: true,
    });
    setLocal("windows-folders", folders);
    return true;
  }
};

export const closeFolder = (folderName) => {
  if (getLocal("windows-folders")) {
    const folders = getLocal("windows-folders").filter(
      (folder) => folder.path !== folderName
    );
    setLocal("windows-folders", folders);
  }
};

export const updateShowFolder = (folderName) => {
  if (getLocal("windows-folders")) {
    const lastFolders = getLocal("windows-folders");
    const folders = [];
    lastFolders.map((folder) => {
      if (folder.path === folderName) {
        folders.push({
          title: folder.title,
          icon: folder.icon,
          path: folder.path,
          fullScreen: folder.fullScreen,
          show: !folder.show,
        });
      } else {
        folders.push(folder);
      }
    });
    setLocal("windows-folders", folders);
  }
};

export const updateFullScreen = (folderName) => {
  if (getLocal("windows-folders")) {
    const lastFolders = getLocal("windows-folders");
    const folders = [];
    lastFolders.map((folder) => {
      if (folder.path === folderName) {
        folders.push({
          title: folder.title,
          icon: folder.icon,
          path: folder.path,
          show: folder.path,
          fullScreen: !folder.fullScreen,
        });
      } else {
        folders.push(folder);
      }
    });
    setLocal("windows-folders", folders);
  }
};
