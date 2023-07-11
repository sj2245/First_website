console.log(`idle production script ready`);
//purposely no space
// rakib doo doo
if (pntNumbero) {
  let pointGen = setInterval(function () {
  

    count = count + idleGen;
    pntNumbero.innerHTML = count;
  }, 1000) 
}
if (upgIdle) {
  upgIdle.addEventListener(`click`, function (e) {
    
    if(idleGen == 0 && count >= idleUpgCost){
      count = count - idleUpgCost;
      idleGen += 1;
      idleUpgCost = 5;
      pntNumbero.innerHTML = count;
      upgIdle.innerHTML = `Upgrade idle point gain! Cost: ${idleUpgCost}`;
    }
    else if (count >= idleUpgCost){
      count = count - idleUpgCost;
      idleGen *= 2;
      idleUpgCost < 20 ? idleUpgCost *= 2 : idleUpgCost *= 2.5
      // if(idleUpgCost < 20){
      //   idleUpgCost = idleUpgCost * 2;
      // }
      // else{
      //   idleUpgCost = idleUpgCost * 2.5;
      // }
      pntNumbero.innerHTML = count;
      upgIdle.innerHTML = `Upgrade idle point gain! Cost: ${idleUpgCost}`;
    }
    
    else{
     
      console.log({       
        failure:`No A+`,
        count,
        
      })
      toggleFail(upgIdle);

      setTimeout(3000, toggleFail(upgIdle));
    }
  })
}