"use strict";

const navToggle = document.querySelector("#mobile-navigation-button");
const nav = document.querySelector("#primary-navigation");
const overlay = document.querySelector(".overlay");
const html = document.documentElement;

navToggle.addEventListener("click", () => {
  const isExpanded = nav.getAttribute("aria-expanded");

  if (isExpanded === "true") {
    nav.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("data-expanded", "false");
    overlay.classList.remove("overlay-visible");
    html.classList.remove("scroll-lock");
  } else {
    nav.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("data-expanded", "true");
    overlay.classList.add("overlay-visible");
    html.classList.add("scroll-lock");
  }
});
