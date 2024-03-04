window.addEventListener("load", sidenVises);

//Jeg starter ud med en console.log for at være sikker på at der er forbindelse til min Javascript.

function sidenVises() {
  console.log("sidenVises");
}

// Her rammer jeg et element inde i min HTML ved at sigte efter dens ID.
// Jeg tilføjer class'en "open", for at åbne op for min burger menu.
// Den er kædet sammen med min html, hvor jeg har en "onclick()" sat på min menu.

function openNav() {
  document.getElementById("minSidebar").classList.add("open");
}

// Jeg fjerner class'en "open", for at åbne op for min burger menu.

function closeNav() {
  document.getElementById("minSidebar").classList.remove("open");
}

// scrollTo scroller efter kordinator, hvor at den lander tilbage på 0 (starten) både horisontalt og vertikalt.

function scrollToTop() {
  console.log("scrollToTop");
  window.scrollTo(0, 0);
}
