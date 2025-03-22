let gameseq = [];
let userseq = [];
let level = 0;
let started = false;
let h2 = document.querySelector("h2");
let btns = ["pink", "yellow", "green", "blue"];
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
  level++;
  h2.innerText = `Level ${level}`;
  //   random button to flash
  let randIdx = Math.floor(Math.random() * btns.length);
  let randclr = btns[randIdx];
  let randBtn = document.querySelector(`.${randclr}`);
  gameseq.push(randclr)
  console.log(gameseq)
  gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr level:",level)

    if (userseq[idx]==gameseq[idx]){
        if (userseq.length==gameseq.length){
            levelup()
        }
        console.log("same value")
    }
    else{
       h2.innerText="Game over!Press any key to start.")
    }
}
function btnPress() {
  console.log(this);
  let btn = this;
  userFlash(btn);
  let userColor=btn.getAttribute("id")
  userseq.push(userColor)
  checkAns(userseq.length-1)
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
