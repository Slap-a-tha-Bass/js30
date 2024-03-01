// need to rotate the seconds hand 360 degrees every 60 seconds
// need to rotate the minutes hand 360 degrees every 60 minutes
// need to rotate the hours hand 360 degrees every 12 hours

function rotateHands() {
  const secondsHand = document.querySelector(".seconds");
  const minutesHand = document.querySelector(".minutes");
  const hoursHand = document.querySelector(".hours");

  const currentTime = new Date();
  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours();
  console.log(seconds, minutes, hours);

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const hoursDegrees = (hours / 12) * 360 + 90;

  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
  // TODO: add additional rotation if the minutes hand is passed 30 minutes
}

setInterval(rotateHands, 1000);

rotateHands();
