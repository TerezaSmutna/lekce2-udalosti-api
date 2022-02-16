// tady je místo pro náš program
console.log ("jsem nalinkovan")

let nadpis = document.querySelector('h1');
nadpis.classList.add('zluty');

let ctverecek = document.querySelector('div.zluty')
ctverecek.classList.add('ctverecek');

let odstavec = document.querySelector('p');

function ztucni() {
 odstavec.style.fontWeight = "bold";
}

function ztenci() {
  odstavec.style.fontWeight = "normal";
}

function zcerven() {
  odstavec.classList.toggle('cerveny');
}

function zvets() {
  //odstavec.classList.add("vetsi");
  let neco = odstavec.style.fontSize
  neco = "5px"
  //odstavec.style.fontSize = "55px"
  console.log(odstavec.style.fontSize);
  //odstavec.style.fontSize = "1px"
  //odstavec.style.fontSize = odstavec.style.fontSize + "1px"
}

function startAudio() {
  let audioFile = document.getElementById('zvukovaStopa');
  console.log('Zapínám píseň...');
  audioFile.play();
}
function pauza () {
  zvukovaStopa.pause();
}

function potichu() {
  zvukovaStopa.volume = 0;
}

function akorat () {
  zvukovaStopa.volume = 0.5;
}

function nahlas() {
  zvukovaStopa.volume = 1;
}
 
function zacatek () {
  zvukovaStopa.currentTime = 0;
}
