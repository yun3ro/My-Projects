 window.onload = function(){
var seconds = 00;
var tens = 00;
var OutputSeconds = document.getElementById('second');
var OutputTens = document.getElementById('tens');
var buttonStart = document.getElementById('btn-start');
var buttonStop = document.getElementById('btn-stop');
var buttonReset = document.getElementById('btn-reset');
var Interval; // <<--- amit irtveba
//html tan davakavshire id - is sashualebit yoveli variable

buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});
//mausis dacheris shemdeg daiwyebs atvlas 0.01 dan

buttonStop.addEventListener('click', () => {
   clearInterval(Interval);
});
//aq dapauzdeba 

buttonReset.addEventListener('click', () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    OutputSeconds.innerHTML = seconds;
    OutputSeconds.innerHTML = tens;
 });

 function startTime(){
    tens++; //gazrdis erti ateulit
    if(tens <= 9){
        OutputTens.innerHTML = "0" + tens;
    } 
    if (tens > 9){
        OutputTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        OutputSeconds.innerHTML = "0" + seconds;
        tens = 0;
        OutputTens.innerHTML = "0" + tens;
    }
    if(seconds > 9) {
        OutputSeconds.innerHTML = seconds;
    }
 }
 }
