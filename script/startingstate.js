"use strict";

//SELECTING
const startState = document.querySelector(".starting");
const startingBtn = document.querySelector(".starting__btn");

//CLOSING WITH BUTTON
startingBtn.addEventListener("click", function () {
  startState.classList.add("animate__close__popup");
});

//
// CLOSING WITH PRESS ENTER
document.addEventListener("keydown", function (e) {
  !startState.classList.contains("animate__close__popup") &&
    e.key === "Enter" &&
    startState.classList.add("animate__close__popup");
});
