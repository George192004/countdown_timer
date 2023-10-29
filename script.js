"use strict";

function startCountdown() {
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  let days = parseInt(daysElement.textContent);
  let hours = parseInt(hoursElement.textContent);
  let minutes = parseInt(minutesElement.textContent);
  let seconds = parseInt(secondsElement.textContent);

  const countdown = setInterval(function () {
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(countdown);
    } else {
      seconds--;

      if (seconds < 0) {
        seconds = 59;
        minutes--;

        if (minutes < 0) {
          minutes = 59;
          hours--;

          if (hours < 0) {
            hours = 23;
            days--;
          }
        }
      }

      daysElement.textContent = days < 10 ? "0" + days : days;
      hoursElement.textContent = hours < 10 ? "0" + hours : hours;
      minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
      secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;
    }
  }, 1000);
}

startCountdown();
