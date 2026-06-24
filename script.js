const consoleBox = document.getElementById("console");
const consoleInput = document.getElementById("consoleInput");

function logConsole(msg) {
  consoleBox.innerHTML += <div> ${msg}</div>;
  consoleBox.scrollTop = consoleBox.scrollHeight;
}