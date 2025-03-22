let gameseq = [];
let userseq = [];
let level = 0;
let started = false;
let h2 = document.querySelector("h2");
let btns = ["pink", "yellow", "green", "blue"];
let highestScr=0
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started!");
    started = true;
    levelup();
  }
});
function gameFlash(btn) {
  btn.classList.add("gameflash");
  setTimeout(function () {
    btn.classList.remove("gameflash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}
function levelup() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;
  //   random button to flash
  let randIdx = Math.floor(Math.random() * btns.length);
  let randclr = btns[randIdx];
  let randBtn = document.querySelector(`.${randclr}`);
  gameseq.push(randclr);
  console.log(gameseq);
  gameFlash(randBtn);
}

function checkAns(idx) {
  // console.log("curr level:",level)

  if (userseq[idx] == gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 1000);
    }
    console.log("same value");
  } else {
    if (level>highestScr){
        highestScr=level;
    }
    h2.innerHTML = `Game over!Your score was <b>${level}</b>.
    <br>Highest score:${highestScr}
    <br>Press any key to start.`;
    
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout( ()=> {
      document.querySelector("body").style.backgroundColor = "blanchedalmond";
    }, 150);

    restartGame();
  }
}
function btnPress() {
  console.log(this);
  let btn = this;
  userFlash(btn);
  let userColor = btn.getAttribute("id");
  userseq.push(userColor);
  checkAns(userseq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function restartGame() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;

}
