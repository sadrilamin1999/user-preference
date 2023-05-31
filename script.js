const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetBtn = document.getElementById("resetBtn");
let main = document.getElementById("main");

const setValues = (fontSize, bgColor) => {
  selectFontSize.value = fontSize;
  selectBgColor.value = bgColor;
  main.style.fontSize = fontSize;
  main.style.backgroundColor = bgColor;
};
// load local storege
const initialSetup = () => {
  const bgColor = localStorage.getItem("bgColor");
  const fontSize = localStorage.getItem("fontSize");

  if (bgColor && fontSize) {
    setValues(fontSize, bgColor);
  }
  if (!bgColor && !fontSize) {
    setValues("16px", "aqua");
  }
  if (!bgColor && fontSize) {
    setValues(fontSize, "aqua");
  }
  if (bgColor && !fontSize) {
    setValues("16px", bgColor);
  }
};

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
  setValues("16px", "aqua");
});

initialSetup();
