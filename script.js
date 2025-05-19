const traumas = [
  "Nemám pocit, že někam patřím",
  "Bojuju s úzkostí každý den",
  "Bojím se mluvit o svých problémech",
  "Pořád se porovnávám s ostatními",
  "Neumím si říct o pomoc",
  "Mám pocit, že nejsem dost dobrý",
  "Často přemýšlím, co by bylo, kdybych tu nebyl",
  "Mám pocit, že všechno kazím",
  "Nosím masku, aby mě ostatní měli rádi",
  "Mám strach, že nikdy nebudu šťastný",
  "Stydím se za svoje emoce",
  "Mám problém s důvěrou v lidi",
  "Mám pocit, že moje pocity nikoho nezajímají",
  "Obviňuju se za věci, které jsem nemohl ovlivnit"
];

const container = document.getElementById("container");

let currentJar = null;

traumas.forEach((text, index) => {
  const img = document.createElement("img");
  img.src = "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1FAD9.png";



  img.className = "jar";
  img.dataset.index = index;

 
  img.addEventListener("click", () => {
    currentJar = img;
    document.getElementById("note-text").innerText = traumas[index];
    const popup = document.getElementById("popup");
    popup.classList.remove("hidden");
    popup.classList.remove("fade-out");
  });

  container.appendChild(img);
});

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

function releaseJar() {
  const popup = document.getElementById("popup");
  popup.classList.add("fade-out");

  if (currentJar) {
    currentJar.classList.add("fly-away");
  }

  setTimeout(() => {
    popup.classList.add("hidden");
    popup.classList.remove("fade-out");

    if (currentJar) {
      currentJar.remove();
      currentJar = null;
    }
  }, 1000); 
}
