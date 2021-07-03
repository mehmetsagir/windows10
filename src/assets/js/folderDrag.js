const folderDrag = (elClass) => {
  const folderItem = document.querySelector(`.${elClass} .folder-header`);

  folderItem.addEventListener("mousedown", (e) => {
    const el = document.querySelector(`.${elClass}`);

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mouseMove(e) {
      el.style.opacity = "0.7";
      el.querySelector(".content").style.display = "none";

      let newX = prevX - e.clientX;
      let newY = prevY - e.clientY;

      const rect = el.getBoundingClientRect();

      el.style.left = rect.left - newX + "px";
      el.style.top = rect.top - newY + "px";

      prevX = e.clientX;
      prevY = e.clientY;
    }

    function mouseUp() {
      el.style.opacity = "1";
      el.querySelector(".content").style.display = "block";
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    }
  });
};

export default folderDrag;
