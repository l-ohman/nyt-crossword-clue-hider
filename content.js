function toggleClues() {
  const solvedClues = document.querySelectorAll(".xwd__clue--filled");

  solvedClues.forEach((clue) => {
    const visible = clue.style.display !== "none";
    clue.style.display = visible ? "none" : "flex";
  });
}

toggleClues();
