// alert("Hello world");

function toggleBorder() {
  const divs = document.querySelectorAll("div");
  divs.forEach((div) => {
    const border = "1px solid red";
    const alreadyHasBorder = div.style.border === border;
    div.style.border = alreadyHasBorder ? "" : border;
  });
}

toggleBorder();
