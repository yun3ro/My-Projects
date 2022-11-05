window.onload = function(){
    var seconds = 00;
    var tens = 00;
    var OutputSeconds = document.getElementById("second");
    var OutputTens = document.getElementById("tens");
    var buttonStart = document.getElementById("btn-start");
    var buttonStop = document.getElementById("btn-stop");
    var buttonReset = document.getElementById("btn-reset");
    var Interval; //start variable
    //assign variables to html via id

    buttonStart.addEventListener('click', () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);  //10 = 0.01 milseconds
    });

    buttonStop.addEventListener('click', () => {
        clearInterval(Interval);
    });//stop button

    buttonReset.addEventListener('click', () => {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        OutputSeconds.innerHTML = seconds;
        OutputTens.innerHTML = tens;
    }); //reset button

    
    //function to start timer
    function startTimer(){
        tens++;
        if(tens <= 9){
            OutputTens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            OutputTens.innerHTML = tens;
        }

        if(tens > 99){
            seconds++;
            OutputSeconds.innerHTML = "0" + seconds;
            tens = 0;
            OutputTens.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            OutputSeconds.innerHTML = seconds;
        }
    }
}
