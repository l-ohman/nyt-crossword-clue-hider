let clueVisibility = false;

chrome.action.onClicked.addListener((tab) => {
  if (tab.url.startsWith("https://www.nytimes.com/crosswords/")) {
    clueVisibility = !clueVisibility;
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: setSolvedClueVisibility,
      args: [clueVisibility],
    });
  }
});

function setSolvedClueVisibility(visible) {
  const clueClass = ".xwd__clue--li";
  const primarySelectedClass = "xwd__clue--selected";
  const secondarySelectedClass = "xwd__clue--highlighted";
  const solvedClass = "xwd__clue--filled";

  let debugVal = 0;
  // Need to check all clues, in the case that a clue becomes un-solved
  const clues = document.querySelectorAll(clueClass);
  clues.forEach((clue) => {
    debugVal += 1;
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
  // alert(`Iterating through ${debugVal} clues`);
}
