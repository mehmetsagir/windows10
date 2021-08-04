const rmenu = document.getElementById("rmenu");

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  let prevX = e.clientX;
  let prevY = e.clientY;
  rmenu.classList.add("show");
  rmenu.style.top = prevY + "px";
  rmenu.style.left = prevX + "px";
});
