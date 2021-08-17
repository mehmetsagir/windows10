import { getLocal, setLocal } from "./local";

export const setFolderSort = (sortType) => {
  if (getLocal("windows-settings")) {
    const settings = getLocal("windows-settings");
    settings.folderSortType = sortType;
    setLocal("windows-settings", settings);
  } else {
    const settings = {
      folderSortType: sortType,
    };
    setLocal("windows-settings", settings);
  }
};

export const getFolderSort = () => {
  if (getLocal("windows-settings")) {
    const settings = getLocal("windows-settings");
    if (settings.folderSortType) {
      return settings.folderSortType;
    } else {
      setLocal("windows-settings", {
        folderSortType: "Size",
      });
      return "Size";
    }
  } else {
    setLocal("windows-settings", {
      folderSortType: "Size",
    });
    return "Size";
  }
};
