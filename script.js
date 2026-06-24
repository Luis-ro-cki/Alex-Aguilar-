const consoleBox = document.getElementById("console");
const consoleInput = document.getElementById("consoleInput");

function logConsole(msg) {
  consoleBox.innerHTML += <div> ${msg}</div>;
  consoleBox.scrollTop = consoleBox.scrollHeight;
}

consoleInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = consoleInput.value.trim();
    runCommand(command);
    consoleInput.value = "";
  }
});