let inited = false;

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.startsWith("https://www.nytimes.com/crosswords/") || inited)
    return;
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: addPuzzleEventListener,
    args: [true],
  });
  inited = true;
});

function addPuzzleEventListener(debug) {
  debug && console.log("Initializing 'NYT Crossword Clue Hider'");

  function setSolvedClueVisibility(visible) {
    const clues = document.querySelectorAll(".xwd__clue--li");

    const primarySelectedClass = "xwd__clue--selected";
    const secondarySelectedClass = "xwd__clue--highlighted";
    const solvedClass = "xwd__clue--filled";

    clues.forEach((clue) => {
      if (
        clue.classList.contains(primarySelectedClass) ||
        clue.classList.contains(secondarySelectedClass)
      ) {
        clue.style.display = "flex";
      } else if (clue.classList.contains(solvedClass)) {
        clue.style.display = visible ? "flex" : "none";
      } else {
        clue.style.display = "flex";
      }
    });
  }

  function handleUpdate(e) {
    setSolvedClueVisibility(false);
    debug && console.log("Updated clues");
  }

  const puzzle = document.getElementById("puzzle");
  puzzle.addEventListener("keydown", handleUpdate);
  puzzle.addEventListener("click", handleUpdate);

  function updateClueListHeaders() {
    const headers = document.querySelectorAll(".xwd__clue-list--title");
    headers.forEach((header) => {
      header.innerHTML = `${header.innerHTML} (solved clues hidden)`;
    });
  }
  updateClueListHeaders();

  debug && console.log("Event listeners added successfully");
}
