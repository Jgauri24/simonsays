let gameseq=[];
let userseq=[];
let level=0;
let started=false;
let h2=document.querySelector("h2")
document.addEventListener("keypress",function(){
    if(started == false){
console.log("game started!")
started=true
levelup()
    }
})
function levelup(){
    level++
h2.innerText=`Levwl ${level}`
btnflash()
}
function btnflash(btn){
    btn.classList.add("flash")
    }


