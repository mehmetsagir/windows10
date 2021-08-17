import { getLocal, setLocal } from "./local";

const defaultValue = {
  name: "Medium",
  shortName: "md",
  size: "35px",
};

export const setFolderSize = (value) => {
  if (!value) return null;
  if (getLocal("windows-settings")) {
    const settings = getLocal("windows-settings");
    settings.folderSize = value;
    setLocal("windows-settings", settings);
  } else {
    setLocal("windows-settings", {
      folderSize: value,
    });
  }
};

export const getFolderSize = () => {
  if (getLocal("windows-settings")) {
    const settings = getLocal("windows-settings");
    if (settings.folderSize) {
      return settings.folderSize;
    } else {
      settings.folderSize = defaultValue;
      setLocal("windows-settings", settings);
      return defaultValue;
    }
  }
  setLocal("windows-settings", {
    folderSize: defaultValue,
  });
  return defaultValue;
};
