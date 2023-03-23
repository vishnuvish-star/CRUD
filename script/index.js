"use strict";
const formEl = document.getElementById("form");
const teamEl = document.getElementById("team");
const playerEl = document.getElementById("player");
const displayEl = document.getElementById("display-container");

// Functions
let randomIndex = () => {
  const aa = Math.random();
  return aa;
};
console.log(randomIndex());
// Events

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let teamValue = teamEl.value;
  let playerValue = playerEl.value;
  // console.log(teamValue);
  // console.log(playerValue);
  if (teamValue === "" && playerValue === "") {
    // alert("Fill The Fields");
  } else {
    let createNew = document.createElement("p");
    createNew.className = "displayList";
    createNew.innerHTML = `
     <small class="displayValue">${teamValue}</small>
     <small class="displayValue">${playerValue}</small> 
     <small class="bin-icon">🗑️</small>
     <small class="edit-icon">✎</small>`;
    displayEl.appendChild(createNew);
    // console.log(createNew);
    randomIndex();
  }
});
