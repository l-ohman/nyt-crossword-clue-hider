document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const toggleCheckbox = document.getElementById("toggleCheckbox");

  toggleCheckbox.addEventListener("change", function () {
    const checked = toggleCheckbox.checked;
    container.className = checked ? "myborder" : "";
  });
});
