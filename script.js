var myVar = '' ;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    myVar = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function Start() {
	
	var display = document.querySelector('#timer');
    var currentButton = document.getElementById('start').innerHTML;
    var currentTime = display.textContent;
    console.log(currentTime);
    if (currentButton === "Start"){
        var minutes = 60 * currentTime.replace(':', '.');
        document.querySelector('#start').innerHTML = 'Stop';

        startTimer(minutes, display);
        
    }
    else {
        document.querySelector('#start').innerHTML = 'Start';
        clearInterval(myVar);

        //currrentTime = display;
        
    }   


}


function Pomodoro(data){

    document.getElementById('timer').innerHTML = data + ':00';
    if (data == 25){
        document.body.style.backgroundColor = 'rgb(219, 82, 77)' ;
    }
    else if (data == 5){
        document.body.style.backgroundColor = 'rgb(70, 142, 145)' ;
    }
    else {

        document.body.style.backgroundColor = 'rgb(67, 126, 168)' ;
    }
    

}

/*
1 - Find out why it's lagging (Hint - Display)
2 - Get Stop to work (Hint - Value of button changes but not the ID)
3 - Make button throw a parameter depending on current time (EX: if current time is 25:00 then throw 25:00 into Start function 
*/