const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
// const resetBtn = document.getElementById("resetBtn");
let resetBtn = document.getElementById("resetBtn");
let main = document.getElementById("main");

// font size change handler
selectFontSize.addEventListener("change", function (event) {
  const font = event.target.value;
  main.style.fontSize = font;
  localStorage.setItem("fontSize", font);
});

// background color change handler
selectBgColor.addEventListener("change", function (event) {
  const color = event.target.value;
  main.style.backgroundColor = color;
  localStorage.setItem("bgColor", color);
});

// reset handler
resetBtn.addEventListener("click", function () {
  localStorage.removeItem("fontSize");
  localStorage.removeItem("bgColor");
});
