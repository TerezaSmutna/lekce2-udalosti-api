let nadpis = document.querySelector('h1');
nadpis.classList.add('zluty');

let ctverecek = document.querySelector('div.zluty');
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
let computedSize = window.getComputedStyle(odstavec, null);
computedSize = computedSize.getPropertyValue('font-size');
odstavec.style.fontSize = (parseInt(computedSize) + 1) + 'px';
}


let audioFile = document.getElementById('zvukovaStopa');

function startAudio() {
  console.log('Zapínám píseň...');
  audioFile.play();
} 
function pauzni () {

  audioFile.pause();
}

function ztis() {
  audioFile.volume = 0;
}

function dejAkorat () {
  audioFile.volume = 0.5;
}

function dejNahlas() {
  audioFile.volume = 1;
}
 
function dejNaZacatek () {
  audioFile.currentTime = 0;
}
