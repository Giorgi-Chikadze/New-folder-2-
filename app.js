console.log("dagi");

let burger = document.getElementById("burger");
let nav = document.getElementById("navigation");

burger.addEventListener("click", function () {
  console.log(nav);
  if (nav.style.display === "block") {
    nav.style.display = "none";
    nav.style.fontSize = "40px";
  } else {
    nav.style.display = "block";
    nav.style.fontSize = "20px";
  }
});
