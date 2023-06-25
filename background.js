let inited = false;

// todo: init should automatically run, rather than needed to be clicked
chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.startsWith("https://www.nytimes.com/crosswords/") || inited)
    return;
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: addPuzzleEventListener,
  });
});

// Add event listener to puzzle to automatically update as clues are solved/selected
function addPuzzleEventListener() {
  function setSolvedClueVisibility(visible) {
    const clueClass = ".xwd__clue--li";
    const primarySelectedClass = "xwd__clue--selected";
    const secondarySelectedClass = "xwd__clue--highlighted";
    const solvedClass = "xwd__clue--filled";

    // Need to check all clues, in the case that a clue becomes un-solved
    const clues = document.querySelectorAll(clueClass);
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
    console.log("Updated clues");
    // e.stopPropagation();
  }

  const puzzle = document.getElementById("puzzle");
  puzzle.addEventListener("keydown", handleUpdate);
  puzzle.addEventListener("click", handleUpdate);

  console.log("Event listeners added successfully");
}
