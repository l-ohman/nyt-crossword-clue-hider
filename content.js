function main() {
  // check if settings menu is rendered, and toggle 'display' accordingly
}

// can't seem to properly import the `setting.html` via background, so I will just be creating it from scratch
function createSettingsMenu() {
  const divElement = document.createElement("div");

  const headerText = document.createElement("p");
  headerText.textContent = "Settings menu";
  headerText.style.fontWeight = "bold";

  const buttonsContainer = document.createElement("div");
  buttonsContainer.style.display = "flex";
  buttonsContainer.style.flexDirection = "column";

  const labelNames = [
    "Hide all solved clues",
    "Hide solved clues manually",
    "Disable hiding clues",
  ];
  labelNames.forEach((labelName) => {
    const labelElement = document.createElement("label");
    labelElement.setAttribute("name", "setting");
    labelElement.textContent = labelName;

    const inputElement = document.createElement("input");
    inputElement.type = "radio";
    inputElement.style.paddingLeft = "5px";

    labelElement.appendChild(inputElement);
    buttonsContainer.appendChild(labelElement);
  });

  divElement.appendChild(headerText);
  divElement.appendChild(buttonsContainer);

  return divElement;
}

function renderSettingsMenu() {
  const settingsMenu = createSettingsMenu();
  const clueLists = document.querySelector(".xwd__layout--cluelists");
  clueLists.insertBefore(settingsMenu, clueLists.firstChild);
}

function toggleClues() {
  const solvedClues = document.querySelectorAll(".xwd__clue--filled");

  solvedClues.forEach((clue) => {
    const visible = clue.style.display !== "none";
    clue.style.display = visible ? "none" : "flex";
  });
}

renderSettingsMenu();
