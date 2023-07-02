console.log(`Connected:Initiate Rizzing of the females via Javascript`)
function getdoc(selector) {
  return document.querySelector(selector);
}
let OGbutt = getdoc(`.theOGButton`);
console.log(OGbutt);

OGbutt.addEventListener(`click`, function (e){
  OGbutt.classList.toggle(`circleButton`);
})