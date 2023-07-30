const controlMenuAnimation = () => {
  const menu = document.querySelector(".menu-main");
  const background = document.querySelector(".menu-overlay");
  ["close", "open"].map((status) => {
    // remove or add classes status for css transition activation
    menu.classList.toggle(`menu-main-${status}`);
    background.classList.toggle(`menu-overlay-${status}`);
  });
};

const animateElement = (element, fromValue, toValue, options) => {
  element.animate([{ transform: fromValue }, { transform: toValue }], options);
};

const controlEnterLeaveArrowAnimation = (animationProps) => {
  animationProps.map((props) => {
    const { element, targetPosition, animationOptions } = props;
    // get current positions
    // initial position or position during animation
    const currentElemPosition = window.getComputedStyle(element).transform;
    animateElement(
      element,
      currentElemPosition,
      targetPosition,
      animationOptions
    );
  });
};

const menuOpenButton = document.querySelector(".open-menu-button");
const menuCloseButton = document.querySelector(".close-menu-button");

menuOpenButton.addEventListener("click", controlMenuAnimation);
menuCloseButton.addEventListener("click", controlMenuAnimation);

const mouseEvents = ["mouseenter", "mouseleave"];
const buttons = document.querySelectorAll(".button");
const animationOptions = {
  duration: 400,
  easing: "ease",
  fill: "forwards",
};
const buttonSvgTargetPositions = {
  mouseenter: "translateX(0px) translateY(0px) rotate(-45deg)",
  mouseleave: "translateX(100px) translateY(-100px)",
};
const buttonTextTargetPositions = {
  mouseenter: "translateX(-30px)",
  mouseleave: "translateX(0px)",
};

Array.from(buttons).map((button) => {
  const textButton = button.firstElementChild;
  const arrowSvgButton = button.lastElementChild;
  mouseEvents.map((mouseEvent) =>
    button.addEventListener(mouseEvent, () =>
      controlEnterLeaveArrowAnimation([
        {
          element: textButton,
          targetPosition: buttonTextTargetPositions[mouseEvent],
          animationOptions,
        },
        {
          element: arrowSvgButton,
          targetPosition: buttonSvgTargetPositions[mouseEvent],
          animationOptions,
        },
      ])
    )
  );
});

const cardButtons = document.querySelectorAll(".card-button");
const cardSvgTargetPositions = {
  mouseenter: "translateX(156px) translateY(-228px) rotate(-45deg)",
  mouseleave: "translateX(338px) translateY(-338px)",
};

Array.from(cardButtons).map((cardButton) => {
  const arrowCardButton = cardButton.firstElementChild.lastElementChild;
  mouseEvents.map((mouseEvent) =>
    cardButton.addEventListener(mouseEvent, () =>
      controlEnterLeaveArrowAnimation([
        {
          element: arrowCardButton,
          targetPosition: cardSvgTargetPositions[mouseEvent],
          animationOptions,
        },
      ])
    )
  );
});
