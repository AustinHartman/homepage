var active = false;

// TO DO //

function updateTodoLinks(list) {
  localStorage.setItem("todoList", JSON.stringify(list));
}

function addTodo() {
  var td = JSON.parse(localStorage.getItem("todoList"));
  var newTask = document.getElementById("addTodoList").value;

  if (newTask.length > 0) {
    td.push(newTask);
    updateTodoLinks(td);
    document.getElementById('addTodoList').value = '';
    genTodoList();
  }
}

function removeTodoTask() {
  var tasks_storage = JSON.parse(localStorage.getItem("todoList"));
  var tasks = document.getElementsByClassName("todoItem");
  for (let i=0; i<tasks.length; i++) {
    if (tasks[i].checked) {
      tasks_storage.splice(i, 1);
      updateTodoLinks(tasks_storage);
      genTodoList();
      break;
    }
  }
}

function genTodoList() {
  var td = JSON.parse(localStorage.getItem("todoList"));
  var result = "<label class='check'>";
  for (var i = 0; i < td.length; i++) {
      result += "<input type='checkbox' class='todoItem' onclick='removeTodoTask()' value='" + td[i] + "'>" + td[i] + "</input><br>";
  }
  result += "<div class='box'></div></label>";
  document.getElementById('todoList').innerHTML = result;


  var node = document.getElementById('addTodoList');
  node.focus();
  node.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
          event.preventDefault();
          addTodo();
      }
  });
}

genTodoList();

// TO DO END //

// TIMER //


$("#timer").text("00:00:00");

function countdown(minutes) {
  // set call to function count timer every second
  var totalSeconds = 0;
  var remainingSeconds = 0;

  var timeVar = setInterval(function() {
    if (!active) {
      $("title").text("homepage");
      $("#timer").text("00:00:00");
      clearInterval(timeVar);
    }
    else if (totalSeconds >= minutes*60) {
      document.title = "Finished!";
      active = false;
      clearInterval(timeVar);
    }
    else {
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
      console.log(text);
      $("title").text(text);
      $("#timer").text(text);
    }
  }, 1000);

  $("#timer").text("00:00:00");

}


function getMinutes() {
  console.log(active);
  if (active) return;
  var m = document.getElementById("minuteInput").value;
  m = parseFloat(m);
  countdown(m);
}

// TIMER END //

// SITE LIST //

function updateLinks(storedNames) {
  localStorage.setItem("savedSites", JSON.stringify(storedNames));
}

function genSiteList() {
  var storedNames = JSON.parse(localStorage.getItem("savedSites"));
  var result = "";
  for (var i = 0; i < storedNames.length; i++) {
      result = result + "<a href='" + storedNames[i][1] + "'>"+ storedNames[i][0] + "</a><br>";
  }
  $("#siteList").html(result);
}

function addSite() {
  var storedNames = JSON.parse(localStorage.getItem("savedSites"));
  var newSite = document.getElementById("newSite").value;
  var newSiteLink = document.getElementById("newSiteLink").value;

  if (newSite.length > 0 && newSiteLink.length) {
    storedNames.push([newSite, newSiteLink]);
    updateLinks(storedNames);
    genSiteList();
  }
}

function removeSite() {
  var storedNames = JSON.parse(localStorage.getItem("savedSites"));
  var siteToRm = document.getElementById("removeLink").value;

  for (var i = 0; i < storedNames.length; i++) {
    if (storedNames[i][0] == siteToRm) {
      storedNames.splice(i, 1);
      updateLinks(storedNames);
      genSiteList();
      break;
    }
  }
}

// init site list
genSiteList();

// SITE LIST END //

// QUOTE GEN //

var quotes = [
  '"We are what we repeatedly do. Excellence then, is not an act, but a habit." - Aristotle',
  '"Don\'t do they. Do you." - Russell Westbrook',
  '"Sit up straight. Whether male or female, do deadlifts, bench press, muscle-ups, and 400m sprints 3-4 times a week for about 45 minutes. Progressively increase loads. If you feel injured, stop doing that for a while. Eat lean meats, healthy oils, nuts, legumes, and a ton of vegetables. Avoid white starches, sugar in any form, and sodas like the plague. Drink lots of water. Get some sleep. Take cold showers. Stop being afraid of things." - Goodreads 4-Hour Body Review',
  '"I have no special talents. I am only passionately curious." - Albert Einstein',
  '"Do what you can, with what you have, where you are." - Theodore Roosevelt',
  '"The test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function." - F. Scott Fitzgerald',
  '"All I want to know is where I\'m going to die and I\'ll never go there" - Charlie Munger',
  '"If I have seen further it is by standing on ye sholders of Giants." - Isaac Newton',
  '"I\'d Rather Be Optimistic and Wrong, Than Be Pessimistic and Right." - Elon Musk',
]

function newQuote() {
  var quote_index = Math.floor(Math.random() * quotes.length);
  var result = "<p>" + quotes[quote_index] + "</p>";
  $("#quoteDisplay").html(result);
}

newQuote();

// QUOTE GEN END //
