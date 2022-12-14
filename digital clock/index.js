const HourEl = document.getElementById("hour")
const Minutes = document.getElementById("minutes")
const Seconds = document.getElementById("seconds")
const ampm = document.getElementById("ampm")


function updateClock(){
    let  h = new Date().getHours()
    let  m = new Date().getMinutes()
    let  h = new Date().getSeconds()
    let ampm ="AM"

    if(h > 12){
        h = h - 12
        ampm = "PM"
    }
    HourEl.innerText = h;
    minuteEl.innerText = m;
    SecondEl.innerText = s
    ampmEl, (innerText = ampm);
}
updateClock();


