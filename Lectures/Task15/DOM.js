// greeting ------------------------------------
const greeting = document.querySelector("header .greeting");
const button = document.getElementById("btn");

greeting.innerHTML = "Hello";
button.addEventListener("click", () => {
  if (greeting.innerHTML === "Hello")
    greeting.innerHTML += `, ${document.getElementById("name").value}`;
});

// Colors--------------------------------------
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");

red.addEventListener("click", () => {
  red.style.backgroundColor = "red";
});

blue.addEventListener("click", () => {
  blue.style.backgroundColor = "blue";
});

green.addEventListener("click", () => {
  green.style.backgroundColor = "green";
});

yellow.addEventListener("click", () => {
  yellow.style.backgroundColor = "yellow";
});
