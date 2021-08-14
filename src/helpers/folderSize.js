const defaultValue = {
  name: "Medium",
  shortName: "md",
  size: "35px",
};

export const setFolderSize = (value) => {
  if (!value) return null;
  if (localStorage.getItem("windows-settings")) {
    const settings = JSON.parse(localStorage.getItem("windows-settings"));
    settings.folderSize = value;
    localStorage.setItem("windows-settings", JSON.stringify(settings));
  } else {
    localStorage.setItem(
      "windows-settings",
      JSON.stringify({
        folderSize: value,
      })
    );
  }
};

export const getFolderSize = () => {
  if (localStorage.getItem("windows-settings")) {
    const settings = JSON.parse(localStorage.getItem("windows-settings"));
    if (settings.folderSize) {
      return settings.folderSize;
    } else {
      localStorage.setItem(
        "windows-settings",
        JSON.stringify({
          folderSize: defaultValue,
        })
      );
      return defaultValue;
    }
  } else {
    localStorage.setItem(
      "windows-settings",
      JSON.stringify({
        folderSize: defaultValue,
      })
    );
    return defaultValue;
  }
};
