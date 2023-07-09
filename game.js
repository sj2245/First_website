function getdoc(selector) {
  return document.querySelector(selector);
}
console.log(`idle production script ready`);

let pntNumbero = getdoc(`.points`);
//purposely no space
// rakib doo doo
if (pntNumbero2) {
  let pointGen = setInterval(function () {
    pntNumbero2.innerHTML = parseInt(pntNumbero2.innerHTML) + 1;
  }, 1000) 
}