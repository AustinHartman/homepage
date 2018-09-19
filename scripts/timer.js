var cancelled = false;

function countdown(minutes) {
  // set call to function count timer every second
  var totalSeconds = 0;
  var remainingSeconds = 0;

  var timeVar = setInterval(function() {
    if (totalSeconds >= minutes*60) {
      document.title = "Finished!";
      clearInterval(timeVar);
    } else {
      ++totalSeconds;
      remainingSeconds = minutes * 60 - totalSeconds;
      var hour    = Math.floor(remainingSeconds / 3600);
      var minute  = Math.floor((remainingSeconds - hour * 3600) / 60);
      var seconds = Math.floor(remainingSeconds - (hour * 3600 + minute * 60));

      if (hour < 10) {
        hour = '0' + hour;
      }
      if (minute < 10) {
        minute = '0' + minute;
      }
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      var text = hour + ":" + minute + ":" + seconds;
      console.log(hour);
      document.title = text;
      document.getElementById("timer").innerHTML = text;
    }
  }, 1000);
}

function getMinutes() {
  var m = document.getElementById("minuteInput").value;
  m = parseFloat(m);
  console.log(m);
  console.log(typeof(m));
  countdown(m);
}
