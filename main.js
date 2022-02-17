// tady je místo pro náš program
console.log ("jsem nalinkovan");

let nadpis = document.querySelector('h1');
nadpis.classList.add('zluty');

let ctverecek = document.querySelector('div.zluty');
ctverecek.classList.add('ctverecek');

let odstavec = document.querySelector('p');
odstavec.style.fontSize = '1em'

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
  odstavec.style.fontSize = parseFloat(odstavec.style.fontSize) + 0.625 + "em"
  console.log(odstavec.style.fontSize)
}

function startAudio() {
  let audioFile = document.getElementById('zvukovaStopa');
  console.log('Zapínám píseň...');
  audioFile.play();
} 
function pauzni () {
  zvukovaStopa.pause();
}

function ztis() {
  zvukovaStopa.volume = 0;
}

function dejAkorat () {
  zvukovaStopa.volume = 0.5;
}

function dejNahlas() {
  zvukovaStopa.volume = 1;
}
 
function dejNaZacatek () {
  zvukovaStopa.currentTime = 0;
}
