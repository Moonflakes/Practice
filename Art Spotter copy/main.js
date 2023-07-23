document
  .getElementById("click-menu")
  .addEventListener("click", () => controlMenuAnimation("open"));

document
  .getElementById("click-close-menu")
  .addEventListener("click", () => controlMenuAnimation("close"));

function controlMenuAnimation(status) {
  const toRemove = status === "close" ? "open-animation" : "close-animation";
  const toAdd = status === "close" ? "close-animation" : "open-animation";
  const menu = document.querySelector("#menu-main");
  const background = document.querySelector("#menu-overlay");
  menu.classList.remove(toRemove);
  background.classList.remove(toRemove);
  setTimeout(() => {
    menu.classList.add(toAdd);
    background.classList.add(toAdd);
  }, 0);
}
