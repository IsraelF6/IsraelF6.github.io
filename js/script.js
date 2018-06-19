const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

const CLOCKBUTTON = document.querySelector("#clockButton");
const CLOCK = document.querySelector("#clock");
const CLOCKWRITTEN = document.querySelector("#clockWritten");


let counter = 0;

/* Show or hide the clock - current is the clicked object */
function toggleClock(e) {
    /* Avoid jump to top of page */
    e.preventDefault();
    /* Controls text on the show clock button */
    if (counter++%2==0)
        CLOCKBUTTON.innerHTML = "It's LeBron Timeeeeeee!";
    else
        CLOCKBUTTON.innerHTML = "What time is it?";

    /* Add or remove hide class for the clock */
    CLOCK.classList.toggle("hide");
    CLOCKWRITTEN.classList.toggle("hide");
}

/* Event object e is passed into anonymous funct and from 
    function call inside anonymous funct to funct where it is used*/
CLOCKBUTTON.addEventListener("click", function(e){toggleClock(e); }, false);
/* Add multiple listeners to a single event */
CLOCKBUTTON.addEventListener("click", function(){console.log("button was clicked!"); }, false);

/* Add leading zero to numbers 9 or below */
function leadingZero(time) {
    if (time <=9) 
        time = "0" + time;
    return time;
}

/* Keep clock moving */
function runClock() {
    var date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    /* Avoid military clock */
    if (hour>12)
        hour -= 12;

    /* 360deg / 12hrs = 30 deg/hr */
    let hrPos = (hour * 30) + (min * 30 / 60);
    /* 360deg / 60min = 6 deg/min */
    let minPos = (min * 6) + (sec * 6 / 60);
    let secPos = sec * 6;

    /* Move the clock hands */
    HOURHAND.style.transform = "rotate(" + hrPos + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPos + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPos + "deg)";
    CLOCKWRITTEN.innerHTML = "<h3>The time is " + leadingZero(hour) + ":" + leadingZero(min) + ":" + leadingZero(sec) + " EST</h3>";
}

/* Run the clock */ 
var interval = setInterval(runClock, 1000);
