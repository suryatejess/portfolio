function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Update Experience Years
const startDate = new Date("2024-07-20");
const currentDate = new Date();
const differenceInMilliseconds = currentDate - startDate;
const millisecondsInAYear = 365.25 * 24 * 60 * 60 * 1000;
const yearsPassed =
  1 + Math.floor(differenceInMilliseconds / millisecondsInAYear);

console.log(yearsPassed);

document.querySelector(".years-passed").textContent = yearsPassed;
