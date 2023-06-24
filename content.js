main();

function main() {
  const menu = document.querySelector("#nyt-clue-hider-settings-menu");
  const divider = document.querySelector("#nyt-clue-hider-divider");
  if (!menu) {
    renderSettingsMenu();
  } else {
    const menuHidden = menu.style.display === "none";
    menu.style.display = menuHidden ? "block" : "none";
    divider.style.display = menuHidden ? "block" : "none";
  }
}

function renderSettingsMenu() {
  const puzzle = document.getElementById("puzzle");
  const settingsMenu = createSettingsMenu();
  const hrElement = document.createElement("hr");
  hrElement.id = "nyt-clue-hider-divider";
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

// can't seem to properly import the `setting.html` via background, so I will just be creating it from scratch
function createSettingsMenu() {
  const divElement = document.createElement("div");
  divElement.id = "nyt-clue-hider-settings-menu";
  divElement.style.paddingLeft = "10px";

  const headerText = document.createElement("p");
  headerText.textContent = "Solved Clue Hider — Settings";
  headerText.style.fontWeight = "bold";

  const buttonsContainer = document.createElement("div");
  buttonsContainer.style.display = "flex";
  buttonsContainer.style.flexDirection = "column";

  const labelNames = [
    "Hide solved clues",
    //TODO: "Hide solved clues manually",
    // should allow users to specify which solved clues they want to hide.
    "Show all clues",
  ];
  labelNames.forEach((labelName) => {
    const labelElement = document.createElement("label");
    labelElement.style.display = "flex";

    const inputElement = document.createElement("input");
    inputElement.type = "radio";
    inputElement.name = "clue-hider-radio-group";
    inputElement.addEventListener("change", () => {
      const label = labelName;
      if (label.startsWith("Show")) {
        setClueVisibility(true);
      } else {
        setClueVisibility(false);
      }
    });

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

function setClueVisibility(visible) {
  const solvedClues = document.querySelectorAll(".xwd__clue--filled");
  solvedClues.forEach((clue) => {
    clue.style.display = visible ? "flex" : "none";
  });
}
