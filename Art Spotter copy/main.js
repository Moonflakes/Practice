document
  .getElementById("click-menu")
  .addEventListener("click", () => controlMenuAnimation("open"));

document
  .getElementById("click-close-menu")
  .addEventListener("click", () => controlMenuAnimation("close"));

// document
//   .getElementById("find-me")
//   .addEventListener("mouseleave", () =>
//     controlFindButtonAnimation("mouseleave")
//   );
// document
//   .getElementById("find-me")
//   .addEventListener("mouseenter", () =>
//     controlFindButtonAnimation("mouseenter")
//   );

function controlMenuAnimation(status) {
  let toRemove = "";
  let toAdd = "";
  switch (status) {
    case "close":
      toRemove = "open-animation";
      toAdd = "close-animation";
      break;
    case "open":
      toRemove = "close-animation";
      toAdd = "open-animation";
      break;
  }
  const menu = document.querySelector("#menu-main");
  const background = document.querySelector("#menu-overlay");
  menu.classList.remove(toRemove);
  background.classList.remove(toRemove);
  setTimeout(() => {
    menu.classList.add(toAdd);
    background.classList.add(toAdd);
  }, 0);
}

// function controlFindButtonAnimation(status) {
//   let toRemove = "";
//   let toAdd = "";
//   switch (status) {
//     case "mouseleave":
//       toRemove = "mouseenter-animation";
//       toAdd = "mouseleave-animation";
//       break;
//     case "mouseenter":
//       toRemove = "mouseleave-animation";
//       toAdd = "mouseenter-animation";
//       break;
//   }
//   const text = document.querySelector("#find-me-text");
//   const svg = document.querySelector("#find-me-svg");
//   text.classList.remove(toRemove);
//   svg.classList.remove(toRemove);
//   setTimeout(() => {
//     text.classList.add(toAdd);
//     svg.classList.add(toAdd);
//   }, 0);
// }
