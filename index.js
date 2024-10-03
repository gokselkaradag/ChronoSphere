function clock() {
    let hoursElem = document.getElementById("hours");
    let minutesElem = document.getElementById("minutes");
    let secondsElem = document.getElementById("seconds");

    let now = new Date();

    let hours = now.getHours();  
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    
    hoursElem.textContent = (hours < 10 ? '0' : '') + hours;
    minutesElem.textContent = (minutes < 10 ? '0' : '') + minutes;
    secondsElem.textContent = (seconds < 10 ? '0' : '') + seconds;
}


setInterval(clock, 1000);


clock();
