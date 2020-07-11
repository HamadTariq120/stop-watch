var min=0
var sec=0;
var mili=0;
var minhead=document.getElementById("min")
var sechead=document.getElementById("sec")
var milihead=document.getElementById("mili")
var interval;
 function timer(){
     mili++
     milihead.innerHTML=mili
     if(mili>=100){
         sec++
         sechead.innerHTML=sec
         mili=0
     }
     else if(sec>=60){
         min++
         minhead.innerHTML=min
         sec=0
     }
 }
 function start(){
 interval=setInterval(timer,10)


}

function stop(){
    clearInterval(interval)

}

function reset(){
    min=0
    sec=0
    mili=0
    minhead.innerHTML=min
    sechead.innerHTML=sec
    milihead.innerHTML=mili
    stop()
}