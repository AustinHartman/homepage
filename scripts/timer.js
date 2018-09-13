function countdown(minutes) {

  // set call to function count timer every second
  var timerVar = setInterval(countTimer, 1000);
  var totalSeconds = 0;
  var remainingSeconds = 0;
  function countTimer() {
    if (totalSeconds >= minutes*60) {
      document.title = "Finished!";
    } else {
      ++totalSeconds;
      remainingSeconds = minutes*60 - totalSeconds;
      var hour = Math.floor(remainingSeconds /3600);
      var minute = Math.floor((remainingSeconds - hour*3600)/60);
      var seconds = remainingSeconds - (hour*3600 + minute*60);
      document.title = hour + ":" + minute + ":" + seconds;
    }
  }
}

function getMinutes() {
  var m = document.getElementById("minuteInput").value;
  m = parseInt(m);
  console.log(m);
  console.log(typeof(m));
  countdown(m);
}


/*
var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
*/