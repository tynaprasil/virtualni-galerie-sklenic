const traumas = [
  "tatinek je nejlepsi",
  "Nedostatek sebevědomí",
  "Obavy z budoucnosti",
  "Pocit osamělosti",
  "Tlak na výkon",
  "Strach z neúspěchu",
  "Nedostatek sebevědomí",
  "Obavy z budoucnosti",
  "Pocit osamělosti",
  "Tlak na výkon"
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
    currentJar.classList.add("fade-out"); 
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