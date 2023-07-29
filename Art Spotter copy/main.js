document
  .getElementById("click-menu")
  .addEventListener("click", () => controlMenuAnimation("open"));

document
  .getElementById("click-close-menu")
  .addEventListener("click", () => controlMenuAnimation("close"));

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

const button = document.querySelector("#find-me");
const text = document.querySelector("#find-me-text");
const svg = document.querySelector("#arrow-svg");

button.addEventListener("mouseenter", () => {
  // get current positions
  const currentSvgPosition = window.getComputedStyle(svg).transform;
  const currentTextPosition = window.getComputedStyle(text).transform;

  text.animate(
    [
      {
        // from the current text's position in animation (initial position on mouse enter 0px => translateX(0px))
        transform: currentTextPosition,
      },
      {
        // to
        transform: "translateX(-30px)",
      },
    ],
    { duration: 400, fill: "forwards" }
  );
  svg.animate(
    [
      {
        // from the current svg's position in animation (initial position on mouse enter = transform: translateX(100px) translateY(-100px);)
        transform: currentSvgPosition,
      },
      {
        // to translateX(0px) translateY(0px) rotate(-45deg) in matrix
        transform: "matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0)",
      },
    ],
    { duration: 400, fill: "forwards" }
  );
});

button.addEventListener("mouseleave", () => {
  // get current positions
  const currentSvgPosition = window.getComputedStyle(svg).transform;
  const currentTextPosition = window.getComputedStyle(text).transform;

  text.animate(
    [
      {
        // from the current text's position in animation (initial position on mouse leave -30px => translateX(-30px))
        transform: currentTextPosition,
      },
      {
        // to
        transform: "translateX(0px)",
      },
    ],
    { duration: 400, fill: "forwards" }
  );
  svg.animate(
    [
      {
        // from the current svg's position in animation (initial position on mouse leave transform: translateX(0px) translateY(0px) rotate(-45deg))
        transform: currentSvgPosition,
      },
      {
        // to translateX(100px) translateY(-100px) in matrix
        transform: `matrix(1, 0, 0, 1, 100, -100)`,
      },
    ],
    { duration: 400, fill: "forwards" }
  );
});
