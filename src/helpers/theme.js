import { getLocal, setLocal } from "./local";

export const setTheme = (value) => {
  if (!value) return null;
  if (getLocal("windows-settings")) {
    const settings = getLocal("windows-settings");
    settings.theme = value;
    setLocal("windows-settings", settings);
  } else {
    setLocal("windows-settings", {
      theme: value,
    });
  }
};

const setClass = (value) => {
  const element = document.querySelector("html");

  if (value === "dark") {
    if (element.classList.contains("dark")) {
      element.classList.remove("dark");
    } else {
      element.classList.add("dark");
    }
  } else {
    element.classList.remove("dark");
  }
};

export const getTheme = () => {
  if (getLocal("windows-settings")) {
    const settings = getLocal("windows-settings");
    if (settings.theme) {
      setClass(settings.theme);
      return settings.theme;
    } else {
      settings.theme = "light";
      setLocal("windows-settings", settings);
      setClass(settings.theme);
      return "light";
    }
  }
  setLocal("windows-settings", {
    theme: "light",
  });
  setClass("light");
  return "light";
};
