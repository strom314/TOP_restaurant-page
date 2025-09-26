import "./style.css";
import { domManager as homePage } from "./page-load";
import { domManager as aboutPage } from "./about.js";
import { domManager as menuPage } from "./menu.js";

homePage.populateDom();

const content = document.querySelector("#content");

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

homeButton.addEventListener("click", loadHome);
menuButton.addEventListener("click", loadMenu);
aboutButton.addEventListener("click", loadAbout);

function loadHome() {
  content.innerHTML = "";
  homePage.populateDom();
}
function loadMenu() {
  content.innerHTML = "";
  menuPage.populateDom();
}
function loadAbout() {
  content.innerHTML = "";
  aboutPage.populateDom();
}
