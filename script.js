console.log(`Connected: Initiate Rizzing of the females via Javascript`);

function getdoc(selector) {
  return document.querySelector(selector);
}

let count = 0;
let OGbutt = getdoc(`.theOGButton`);
let buttswap = `gamer`;
let buttString = `Guide to rizzing up females the ${buttswap} way, ${count}`;

OGbutt.addEventListener(`click`, function (e) {
  count = count + 1;
  OGbutt.classList.toggle(`circleButton`);
  
  if (buttswap != `programmer`) {
    buttswap = `programmer`;
  } 
  else {
    buttswap = `gamer`;
  }
  
  buttString = `Guide to rizzing up females the ${buttswap} way, ${count}`;
  OGbutt.innerHTML = buttString;
})