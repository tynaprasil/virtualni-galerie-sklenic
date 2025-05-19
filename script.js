const traumas = [
  "To, že vše rozebereš do posledního detailu a zhodnotíš z každého možného úhlu, neznamená, že je tvůj závěr odpovídající realitě.",
  "S tvým talentem by mohl do reprezentace každý.",
  "Jsi pro mě jediný člověk, kterého na světě potřebuju, jsi moje výjimečná holčička, o kterou se budu starat už navždycky. – o měsíc později ztratil zájem a začal být na mě zlý",
  "Že tě vyhodili z repre nic neznamená, a nekončí svět. Tvé důvody vyhození byly stejné jako ti říkáme neustále s Ivetou.",
  "Nemusíš tolik mluvit.",
  "I když to nikdy nikomu nepřiznám, chybíš mi.",
  "Ukaž mi tvoje nohy, sundej si kalhoty.",
  "Roztrhnuté vazy v koleni.",
  "Chtěla bych být něčí první volba.",
  "Mám tě rád, budeš mi chybět. Buď hodný na mamku, pomáhej jí, ona tě potřebuje moc. Jsi hodný kluk, ale polepši se, víš. Měl bys mamince moc pomáhat. Opatruj se, synku, mám tě moc rád. – vzkaz, který mi otec zanechal ve videu před tím, než spáchal sebevraždu“,
  "Vymlouváš se na své psychické poruchy.",
  "Ty jsi tak sobecká, že i kdyby ses snažila to změnit, nedokážeš to.",
  "Jeho smrt mě bolí víc, než jsem dokázala komukoli říct. Byl mojím bezpečím… a najednou tu nebyl.",
  "Rodina by mě nikdy nepřijala, kdyby věděli, že se mi líbí kluci.",
  "Řekla bych: 'NE!'",
  "Jsi jako tvůj otec. ☹️“,
  "Že mi v 15 letech z hodiny na hodiny náhle umřel taťka, nestihli jsme se rozloučit... prostě nic.",
  "To, že se usmívám a že se zdám na první pohled pozitivní, neznamená, že jsem v pořádku, bez starostí, bez smutku a bez špatných myšlenek.",
  "A tobě ty XS legíny neprasknou přes ten tvůj pupek?",
  "Ty jsi zhubla, vypadáš dobře, řekla mi trenérka nečekaně. Problém ale byl, že to nebylo zdravou životosprávou a pohybem, ale stresem, úzkostí a nedostatkem času na to sednout si a v klidu se najíst.“,
  "Lidi jako ty to daleko nedotáhnou. (po mém coming outu)“,
  "Asi že jsem vyrostl ve stínu svého staršího úspěšnějšího bratra a proto se ode mě očekávalo hodně a nikdy jsem neslyšel, že by na mě byl někdo hrdý.",
  "Muž, kterého miluju, mě má jen na sex.",
  "2 roky mě šikanovali a škola dělala, že to nic není, že si děti jen hrají.",
  "V pěti se rozvedli rodiče, nepamatuju si život v normální rodině.",
  "Znamená pro mě vše, i když já neznamenám vše pro něj."
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
