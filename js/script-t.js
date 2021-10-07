const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');



const NewYear = '1 Jan 2022';


function countDown(){
    const newYearDate = new Date(NewYear);
    const currDate = new Date();

    const totalSeconds=(newYearDate - currDate)/1000;

    const days=Math.floor(totalSeconds/ 3600 / 24);
    const hours=Math.floor(totalSeconds/3600) % 24;
    const minutes=Math.floor(totalSeconds/60) % 60;
    const seconds=Math.floor(totalSeconds) % 60;


    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

countDown();

function formatTime(time){
    return time<10 ? `0${time}` : time;
}

setInterval(countDown, 1000);

