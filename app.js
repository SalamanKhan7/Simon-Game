let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["navy-blue", "blue-green", "blue", "blue-baby"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("key pressed");
    started = true;
    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randomIdx = Math.floor(Math.random() * 3);
  let randomColor = btns[randomIdx];
  gameSeq.push(randomColor);
  console.log(gameSeq);
  let randBtn = document.querySelector(`.${randomColor}`);

  btnFlash(randBtn);
}
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

let btnAll = document.querySelectorAll(".btn");
for (btn of btnAll) {
  btn.addEventListener("click", presskey);
}
function presskey() {
  let btn = this;
  let id = btn.getAttribute("id");

  userSeq.push(id);
  console.log(userSeq);
  btnFlash(btn);
  checkSeq(userSeq.length - 1);
}
function checkSeq(idx) {
  // let idx = level - 1;
  if (gameSeq[idx] == userSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
      console.log("match the sequence");
    }
  } else {
    let score = [];
    // let curScore = level;

    score.push(level);
    console.log(score);
    // let max = Math.max(...score);
    // console.log(max);

    let max = score.reduce((level, el) => {
      if (el > level) {
        return el;
      } else {
        return level;
      }
    });
    h2.innerHTML = `Game Over!Your score was <b>${level}</b> <br>
     Press any key to restart the game`;
    //  Your maximum score of all your game was ${max} <br>
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}
function reset() {
  started = false;
  userSeq = [];
  gameSeq = [];
  level = 0;
}
// let score = [];
// // let curScore = level;
// for (let i = 0; i < 4; i++) {
//   score.push(i);
// }
// let level = "10";
// score.push(level);

// let max = score.reduce((level, el) => {
//   if (el > level) {
//     return el;
//   } else {
//     return level;
//   }
// });
// // console.log(max);
// let level = 1;
// let score = [];
// // let curScore = level;
// score.push(level);
// console.log(score);
// let max = Math.max(...score);

// console.log(max);
