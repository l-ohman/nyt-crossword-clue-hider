main();

function main() {
  const menu = document.querySelector("#nyt-clue-hider-settings-menu");
  if (!menu) {
    renderSettingsMenu();
  } else {
    // this fixes the issue caused by "display: none"
    menu.remove();
  }
}

function renderSettingsMenu() {
  const settingsMenu = createSettingsMenu();
  const clueLists = document.querySelector(".xwd__layout--cluelists");
  clueLists.insertBefore(settingsMenu, clueLists.firstChild);
}

// can't seem to properly import the `setting.html` via background, so I will just be creating it from scratch
function createSettingsMenu() {
  const divElement = document.createElement("div");
  divElement.id = "nyt-clue-hider-settings-menu";
  divElement.style.minWidth = "100%";

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

  const hrElement = document.createElement("hr");

  divElement.appendChild(headerText);
  divElement.appendChild(buttonsContainer);
  divElement.appendChild(hrElement);
  return divElement;
}

function setClueVisibility(visible) {
  const solvedClues = document.querySelectorAll(".xwd__clue--filled");
  solvedClues.forEach((clue) => {
    clue.style.display = visible ? "flex" : "none";
  });
}
