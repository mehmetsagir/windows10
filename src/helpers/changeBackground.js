import { getLocal, setLocal } from "./local";

const changeBackground = (
  imageName = "https://mehmetsagir.com/wallpaper/3.webp"
) => {
  if (getLocal("windows-settings")) {
    const settings = getLocal("windows-settings");
    settings.background = imageName;
    setLocal("windows-settings", settings);
  } else {
    setLocal("windows-settings", {
      background: imageName,
    });
  }

  const el = document.getElementById("home");
  el.style.background = `url(${imageName})`;
  el.style.backgroundPosition = "center";
  el.style.backgroundRepeat = "no-repeat";
  el.style.backgroundSize = "cover";
};

export default changeBackground;
