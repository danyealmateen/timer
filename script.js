const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const divTimerContainer = document.getElementById("divTimerContainer");

const countDown = () => {
  const birthday = new Date("01/01/2024");
  let todaysDate = new Date();
  let timeSpan = birthday - todaysDate;
  let interval;

  if (timeSpan <= -todaysDate) {
    console.log("We have past the event day");
    clearInterval(interval);
  } else if (timeSpan <= 0) {
    console.log("Happy birthday mama Juliee");
    clearInterval(interval);
    return;
  } else {
    const days = Math.floor(timeSpan / day);
    const hours = Math.floor((timeSpan % day) / hour);
    const minutes = Math.floor((timeSpan % hour) / minute);
    const seconds = Math.floor((timeSpan % minute) / second);

    console.log(days + ":" + hours + ":" + minutes + ":" + seconds);
    divTimerContainer.innerHTML = `${days} days  ${hours} hours  ${minutes} minutes ${seconds} seconds`;
  }
  everySecond = setInterval(countDown, second);
};
everySecond = setInterval(countDown, second);
everyMinute = setInterval(countDown, minute);
everyHour = setInterval(countDown, hour);

countDown(everySecond);
