const image = document.getElementById("image");
const select = document.querySelector(".mode");
const selectMode = document.getElementById("select-mode");

function changeMode(select) {
  const value = select.options[select.selectedIndex].value;

  value === "dark"
    ? selectMode.setAttribute("href", "dark.css")
    : selectMode.setAttribute("href", "light.css");

  value === "dark"
    ? image.setAttribute("src", "./assets//vercel-icon-light.png")
    : image.setAttribute("src", "./assets//vercel-icon-dark.png");
}
