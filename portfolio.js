window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
}

function openNav() {
  document.getElementById("minSidebar").classList.add("open");
}

function closeNav() {
  document.getElementById("minSidebar").classList.remove("open");
}

function scrollToTop() {
  console.log("scrollToTop");
  window.scrollTo(0, 0);
}
