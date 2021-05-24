var myVar = '';

function startTimer(duration, display) {
    var timer = duration,
        minutes,
        seconds;
    myVar = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (-- timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function Start() {

    var display = document.querySelector('#timer');
    var currentButton = document.getElementById('start').innerHTML;
    var currentTime = display.textContent;
    console.log(currentTime);
    if (currentButton === "Start") {
        var minutes = 60 * currentTime.replace(':', '.');
        document.querySelector('#start').innerHTML = 'Stop';

        startTimer(minutes, display);

    } else {
        document.querySelector('#start').innerHTML = 'Start';
        clearInterval(myVar);

        // currrentTime = display;

    }


}


function Pomodoro(data) {

    document.getElementById('timer').innerHTML = data + ':00';
    if (data == 25) {
        document.body.style.backgroundColor = 'rgb(219, 82, 77)';
    } else if (data == 5) {
        document.body.style.backgroundColor = 'rgb(70, 142, 145)';
    } else {

        document.body.style.backgroundColor = 'rgb(67, 126, 168)';
    }


}

function addTask() {
    document.getElementById("addTask").style.display = "none"
    document.getElementById("card").style.display = "block";


}

function cancelTask() {
    document.getElementById("addTask").style.display = "block"
    document.getElementById("card").style.display = "none";
    document.getElementById("inputEst").value = 0;


}

function inc() {
    var est = parseInt(document.getElementById("inputEst").value);
    if (est < 25) {
        document.getElementById("inputEst").value = est + 1;
    }


}

function dec() {
    var est = parseInt(document.getElementById("inputEst").value);
    if (est > 0) {
        document.getElementById("inputEst").value = est - 1;
    }

}

var task = [];
function save(){
var item = document.getElementById("placeholder").value;
task.push(item);

if (task.length > 0){
    document.getElementById('currentTask').innerHTML = "";

    for (var i =0 ; i < task.length; i++){
        var node = document.createElement("div");
        node.className = "taskStyle";
        node.innerHTML = "<i class='fa fa-check iconStyle' aria-hidden='true'></i><span id = "+i+">"+task[i]+"</span>";
        //document.getElementById('currentTask').innerHTML = ""
        document.getElementById('currentTask').appendChild(node);
      

      
    }
    document.getElementById("addTask").style.display = "block";
    document.getElementById("card").style.display = "none";
    document.getElementById("inputEst").value = 0;
    document.getElementById("placeholder").value = "";
}
}
