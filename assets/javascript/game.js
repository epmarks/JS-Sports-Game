// Audio Files, if I can get them to work  --Nope!
// const gobWin = document.querySelector("#gob-laugh");
// const barbWin = document.querySelector("#barb-laugh");
// const draw = document.querySelector("#draw");

// Barbarians (Team 1) Shots and Goals
let bShots = 0;
let bGoals = 0;
const barbShoot = document.querySelector("#barb-shoot-button");
const barbShots = document.querySelector("#barb-numshots");
const barbGoals = document.querySelector("#barb-numgoals");
barbShoot.addEventListener("click", function () {
  bShots++;
  barbShots.innerHTML = bShots;

  let shoot = Math.random();
  if (shoot < 0.4) {
    bGoals++;
    barbGoals.innerHTML = bGoals;
  }
  console.log(barbShots.innerHTML);
});

// Goblins (Team 2) Shots and Goals
let gShots = 0;
let gGoals = 0;
const gobShoot = document.querySelector("#gob-shoot-button");
const gobShots = document.querySelector("#gob-numshots");
const gobGoals = document.querySelector("#gob-numgoals");
gobShoot.addEventListener("click", function () {
  gShots++;
  gobShots.innerHTML = gShots;

  let shoot = Math.random();
  if (shoot < 0.4) {
    gGoals++;
    gobGoals.innerHTML = gGoals;
  }
});

// Reset Button and Stats Reset
let resetNum = 0;
const restartNum = document.querySelector("#num-resets");
const restart = document.querySelector("#reset-button");
restart.addEventListener("click", function () {
  if (bGoals === gGoals) {
    alert("It's a Draw!");
  }
  if (bGoals > gGoals) {
    alert("Barbarians Win!");
  }
  if (bGoals < gGoals) {
    alert("Goblins Win!");
  }

  barbShots.innerHTML = 0;
  barbGoals.innerHTML = 0;
  gobShots.innerHTML = 0;
  gobGoals.innerHTML = 0;
  bShots = 0;
  bGoals = 0;
  gShots = 0;
  gGoals = 0;

  resetNum++;
  restartNum.innerHTML = resetNum;
});
