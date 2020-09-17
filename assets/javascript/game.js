let bShots = 0;
let bGoals = 0;
const barbShots = document.querySelector("#barb-numshots");
const barbShoot = document.querySelector("#barb-shoot-button");
const barbGoals = document.querySelector("#barb-numgoals");
barbShoot.addEventListener("click", function () {
  bShots++;
  barbShots.innerHTML = bShots;

  let shoot = Math.random();
  if (shoot < 0.3) {
    bGoals++;
    barbGoals.innerHTML = bGoals;
  }
});

let gShots = 0;
let gGoals = 0;
const gobShots = document.querySelector("#gob-numshots");
const gobShoot = document.querySelector("#gob-shoot-button");
const gobGoals = document.querySelector("#gob-numgoals");
gobShoot.addEventListener("click", function () {
  gShots++;
  gobShots.innerHTML = gShots;

  let shoot = Math.random();
  if (shoot < 0.3) {
    gGoals++;
    gobGoals.innerHTML = gGoals;
  }
});

let resetNum = 0;
const restartNum = document.querySelector("#num-resets");
const restart = document.querySelector("#reset-button");
restart.addEventListener("click", function () {
  if (bGoals > gGoals) {
    alert("Barbarians Win!");
    resetNum++;
    restartNum.innerHTML = resetNum;
    document.querySelector("#gob-numshots").innerHTML = 0;
    document.querySelector("#gob-numgoals").innerHTML = 0;
    document.querySelector("#barb-numshots").innerHTML = 0;
    document.querySelector("#barb-numgoals").innerHTML = 0;
  }
  if (bGoals < gGoals) {
    alert("Goblins Win!");
    resetNum++;
    restartNum.innerHTML = resetNum;
    document.querySelector("#gob-numshots").innerHTML = 0;
    document.querySelector("#gob-numgoals").innerHTML = 0;
    document.querySelector("#barb-numshots").innerHTML = 0;
    document.querySelector("#barb-numgoals").innerHTML = 0;
  }

  if (bGoals === gGoals) {
    alert("It's a Draw!");
    resetNum++;
    restartNum.innerHTML = resetNum;
    document.querySelector("#gob-numshots").innerHTML = 0;
    document.querySelector("#gob-numgoals").innerHTML = 0;
    document.querySelector("#barb-numshots").innerHTML = 0;
    document.querySelector("#barb-numgoals").innerHTML = 0;
  }
});
