export const getFolders = () => {
  if (localStorage.getItem("windows-folders")) {
    return JSON.parse(localStorage.getItem("windows-folders"));
  } else {
    return [];
  }
};

export const setFolder = (title, icon, path) => {
  if (localStorage.getItem("windows-folders")) {
    const folders = JSON.parse(localStorage.getItem("windows-folders"));
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
      localStorage.setItem("windows-folders", JSON.stringify(folders));
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
    localStorage.setItem("windows-folders", JSON.stringify(folders));
    return true;
  }
};

export const closeFolder = (folderName) => {
  if (localStorage.getItem("windows-folders")) {
    const lastFolders = JSON.parse(localStorage.getItem("windows-folders"));
    const folders = [];
    lastFolders.map((folder) => {
      folder.path !== folderName && folders.push(folder);
    });
    localStorage.setItem("windows-folders", JSON.stringify(folders));
  }
};

export const updateShowFolder = (folderName) => {
  if (localStorage.getItem("windows-folders")) {
    const lastFolders = JSON.parse(localStorage.getItem("windows-folders"));
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
    localStorage.setItem("windows-folders", JSON.stringify(folders));
  }
};

export const updateFullScreen = (folderName) => {
  if (localStorage.getItem("windows-folders")) {
    const lastFolders = JSON.parse(localStorage.getItem("windows-folders"));
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
    localStorage.setItem("windows-folders", JSON.stringify(folders));
  }
};
