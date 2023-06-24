main();

function main() {
  const menu = document.querySelector("#nyt-clue-hider-settings-menu");
  if (!menu) {
    renderSettingsMenu();
  } else {
    const menuHidden = menu.style.display === "none";
    menu.style.display = menuHidden ? "block" : "none";
  }
}

function renderSettingsMenu() {
  const puzzle = document.getElementById("puzzle");
  const settingsMenu = createSettingsMenu();
  const hrElement = document.createElement("hr");
  const clueLists = document.querySelector(".xwd__layout--cluelists");

  const newContainer = document.createElement("div");
  newContainer.style.display = "block";
  newContainer.appendChild(settingsMenu);
  newContainer.appendChild(hrElement);
  newContainer.appendChild(clueLists);
  clueLists.style.display = "flex";

  puzzle.appendChild(newContainer);
  if (puzzle.lastChild?.class === ".xwd__layout--cluelists") {
    puzzle.removeChild(clueLists);
  }
}

function toggleClues() {
  const solvedClues = document.querySelectorAll(".xwd__clue--filled");

  solvedClues.forEach((clue) => {
    const visible = clue.style.display !== "none";
    clue.style.display = visible ? "none" : "block";
  });
}

// can't seem to properly import the `setting.html` via background, so I will just be creating it from scratch
function createSettingsMenu() {
  const divElement = document.createElement("div");
  divElement.id = "nyt-clue-hider-settings-menu";
  divElement.style.paddingLeft = "10px";

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
    labelElement.style.display = "flex";

    const inputElement = document.createElement("input");
    inputElement.type = "radio";
    inputElement.name = "clue-hider-radio-group";
    const labelText = document.createElement("p");
    labelText.innerText = labelName;
    labelText.style.marginLeft = "8px";

    labelElement.appendChild(inputElement);
    labelElement.appendChild(labelText);
    buttonsContainer.appendChild(labelElement);
  });

  divElement.appendChild(headerText);
  divElement.appendChild(buttonsContainer);
  return divElement;
}
