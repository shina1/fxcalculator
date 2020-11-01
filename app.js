import content from "./modules/cotent.js";
import calcEvent from "./modules/event.js";

const rootDir = document.querySelector(".root");

const app = () => {
  return `
        ${content()}
    `;
};

rootDir.innerHTML = app();
calcEvent();
