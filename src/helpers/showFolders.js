import { getLocal, setLocal } from "./local";

export const setShowFolders = (value) => {
  if (getLocal("windows-settings")) {
    const settings = getLocal("windows-settings");
    settings.showFolders = value;
    setLocal("windows-settings", settings);
  } else {
    setLocal("windows-settings", {
      showFolders: value,
    });
  }
};

export const getShowFolders = () => {
  if (getLocal("windows-settings")) {
    const settings = getLocal("windows-settings");
    if (settings.showFolders || settings.showFolders === false) {
      return settings.showFolders;
    } else {
      settings.showFolders = true;
      setLocal("windows-settings", settings);
      return true;
    }
  } else {
    setLocal("windows-settings", {
      showFolders: true,
    });
    return true;
  }
};
