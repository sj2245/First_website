
console.log(`Connected: Initiate Rizzing of the females via Javascript`);
// review with rakib !!!!!!
// async function DoSomething() {
//   count += idlepoints;
// }
// DoSomething();
function getdoc(selector) {
  return document.querySelector(selector);
}
function toggleFail(item){
  item.classList.toggle(`basicButtonFail`);
}
function perSecPoints(Modifier) {
  count += idlepoints * Modifier;
}
// for FUTURE WORK
let curMod = 0;
// Get docs
let pntNumbero = getdoc(`.points`);
let OGbutt = getdoc(`#theOGButton`);
let pntDisplay = getdoc(`#pointDisplay`);
let upgCursor = getdoc(`#UpgCursor`);
let pntGainDisplay = getdoc(`#pointClickDisplay`);
let upgIdle = getdoc(`#UpgIdle`);
// others
let count = 0;
let buttString = `Current points:0`;
let upgCost = 10;
let pointGain = 1;
// idle things
let idleGen = 0;
let idlepoints = 1;
let idleUpgCost = 10;
if(OGbutt){
  OGbutt.addEventListener(`click`, function (e) {
    // count = parseInt(pntNumbero.innerHTML);
    count = count + pointGain;
  
    // OGbutt.classList.toggle(`circleButton`);
    
    // if (buttswap != `programmer`) {
    //   buttswap = `programmer`;
    // } 
    // else {
    //   buttswap = `gamer`;
    // }
    
    // buttString = `Current Points: ${count}`;
    // pntDisplay.innerHTML = buttString;
  
    pntNumbero.innerHTML = count;
  })
}
if(upgCursor){
  upgCursor.addEventListener(`click`, function (e) {
    count = parseInt(pntNumbero.innerHTML);
  if(count >= upgCost){
    
    count -= upgCost;
    pointGain *= 2;
    upgCost *= 2;
    
    pntGainDisplay.innerHTML = `Points gained per click: ${pointGain}`;
    upgCursor.innerHTML = `Upgrade Cursor! Cost: ${upgCost} points`;
    pntNumbero.innerHTML = count;
    // buttString = `Current Points: ${count}`;
    // pntDisplay.innerHTML = buttString;
  }
  else{
    //upgCursor.classList.toggle(`basicButtonFail`);
    toggleFail(upgCursor)
    setTimeout(toggleFail,3000,upgCursor);
  }
})
}
