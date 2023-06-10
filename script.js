function color() {
  let r = Math.floor(Math.random() * 225 + 1);
  let g = Math.floor(Math.random() * 225 + 1);
  let b = Math.floor(Math.random() * 225 + 1);

  document.getElementById("colordiv").style.backgroundColor =
    "rgb(" + r + "," + g + "," + b + ")";

  document.getElementById("p1").innerHTML =
    "rgb(" + r + "," + g + "," + b + ")";
}
