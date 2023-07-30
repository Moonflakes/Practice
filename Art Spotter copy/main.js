const menuOpenButton = document.querySelector(".open-menu-button");
const menuCloseButton = document.querySelector(".close-menu-button");

menuOpenButton.addEventListener("click", controlMenuAnimation);
menuCloseButton.addEventListener("click", controlMenuAnimation);

function controlMenuAnimation() {
  const menu = document.querySelector(".menu-main");
  const background = document.querySelector(".menu-overlay");
  ["close", "open"].map((status) => {
    // remove or add classes status
    menu.classList.toggle(`menu-main-${status}`);
    background.classList.toggle(`menu-overlay-${status}`);
  });
}

const findMeButton = document.querySelector(".button-find-me");
const text = document.querySelector(".find-me-text");
const svg = document.querySelector(".arrow-svg");

findMeButton.addEventListener("mouseenter", controlFindMeButtonAnimation);
findMeButton.addEventListener("mouseleave", controlFindMeButtonAnimation);

function controlFindMeButtonAnimation(mouseEvent) {
  const eventType = mouseEvent.type;

  // get current positions
  // initial position or position during animation
  const currentSvgPosition = window.getComputedStyle(svg).transform;
  const currentTextPosition = window.getComputedStyle(text).transform;

  // set target positions according to the eventType mouseenter or mouseleave
  let targetSvgPosition = "";
  let targetTextPosition = "";
  switch (eventType) {
    case "mouseenter":
      targetSvgPosition = "translateX(0px) translateY(0px) rotate(-45deg)";
      targetTextPosition = "translateX(-30px)";
      break;
    case "mouseleave":
      targetSvgPosition = "translateX(100px) translateY(-100px)";
      targetTextPosition = "translateX(0px)";
      break;
  }
  animateElement(text, currentTextPosition, targetTextPosition, { duration: 400, fill: "forwards" });
  animateElement(svg, currentSvgPosition, targetSvgPosition, { duration: 400, fill: "forwards" });
}

const animateElement = (element, fromValue, toValue, options) => {
  element.animate([{ transform: fromValue }, { transform: toValue }], options);
};
