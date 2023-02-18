let yearly = document.getElementById("yearly");
let monthly = document.getElementById("monthly");

monthly.addEventListener("click", function () {
  monthly.style.cssText =
    "background-color: var(--main-Color); color : white !important";
  yearly.style.cssText = "background-color: #f7f7fb; color : black !important";
});

yearly.addEventListener("click", function () {
  yearly.style.cssText =
    "background-color: var(--main-Color); color : white !important";
  monthly.style.cssText = "background-color: #f7f7fb; color : black !important";
});
