"use strict";
const formEl = document.getElementById("form");
const teamEl = document.getElementById("team");
const playerEl = document.getElementById("player");
const displayEl = document.getElementById("display-container");
// console.log(formEl);
// console.log(teamEl);
// console.log(playerEl);
// let fn = (teamValue, playerValue) => {
//   let eee = document.createElement("ul");
//   console.log(eee);
//   let ff = document.createTextNode(`<small>${teamValue}</small>
//   <small>${playerValue}</small>`);
//   console.log(ff);
//   let rr = eee.appendChild(ff);
//   console.log(rr);
// };
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let teamValue = teamEl.value;
  let playerValue = playerEl.value;
  // console.log(teamValue);
  // console.log(playerValue);
  if (teamValue === "" && playerValue === "") {
    alert("Fill The Fields");
  } else {
    let createNew = document.createElement("li");
    createNew.className = "displayList";
    displayEl.appendChild();
  }
});
