"use strict";

//SELECTİONS
const continentBtn = document.querySelector(".trait__menu");
const continentContent = document.querySelector(".bottombar__continent");
const overlay = document.querySelector(".overlay");
const btnCross = document.querySelector(".bottombar__cross");

continentBtn.addEventListener("click", function () {
  continentContent.classList.remove("continent__display");
  overlay.classList.remove("disp__none");
});

const popUpCloser = function () {
  continentContent.classList.add("continent__display");
  overlay.classList.add("disp__none");
};

btnCross.addEventListener("click", popUpCloser);
overlay.addEventListener("click", popUpCloser);

document.addEventListener("keydown", function (e) {
  !continentContent.classList.contains("continent__display") &&
    e.key === "Escape" &&
    popUpCloser();
});
