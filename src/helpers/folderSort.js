export const setFolderSort = (sortType) => {
  if (localStorage.getItem("windows-settings")) {
    const settings = JSON.parse(localStorage.getItem("windows-settings"));
    settings.folderSortType = sortType;
    localStorage.setItem("windows-settings", JSON.stringify(settings));
  } else {
    const settings = {
      folderSortType: sortType,
    };
    localStorage.setItem(JSON.stringify("windows-settings", settings));
  }
};

export const getFolderSort = () => {
  if (localStorage.getItem("windows-settings")) {
    const settings = JSON.parse(localStorage.getItem("windows-settings"));
    if (settings.folderSortType) {
      return settings.folderSortType;
    } else {
      localStorage.setItem(
        "windows-settings",
        JSON.stringify({
          folderSortType: "Size",
        })
      );
      return "Size";
    }
  } else {
    localStorage.setItem(
      "windows-settings",
      JSON.stringify({
        folderSortType: "Size",
      })
    );
    return "Size";
  }
};
