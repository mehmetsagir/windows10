export const setShowFolders = (value) => {
  if (localStorage.getItem("windows-settings")) {
    const settings = JSON.parse(localStorage.getItem("windows-settings"));
    settings.showFolders = value;
    localStorage.setItem("windows-settings", JSON.stringify(settings));
  } else {
    localStorage.setItem(
      "windows-settings",
      JSON.stringify({
        showFolders: true,
      })
    );
  }
};

export const getShowFolders = () => {
  if (localStorage.getItem("windows-settings")) {
    const settings = JSON.parse(localStorage.getItem("windows-settings"));
    if (settings.showFolders || settings.showFolders === false) {
      return settings.showFolders;
    }
    return true;
  }
};
