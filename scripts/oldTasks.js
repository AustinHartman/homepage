function genOldTodoList() {
  var td = JSON.parse(localStorage.getItem("oldTodo"));
  var result = "<label class='check'>";
  for (var i = 0; i < td.length; i++) {
      result += "<input type='checkbox' class='oldTodoItem' onclick='removeOldTodoTask()' value='" + td[i] + "'>" + td[i] + "</input><br>";
  }
  result += "<div class='box'></div></label>";
  document.getElementById('oldTodoItems').innerHTML = result;
  console.log(td.length);
  if (td.length != 0) {
    console.log("made is herer");
    $("#clearButton").html("<input type=\"button\" onclick=\"clearOldTodo()\" class=\"button\" value=\"clear all\">");
  } else {
    $("#clearButton").html("<p>Completed storage is empty</p>");
  }
}


function updateOldTodo(list) {
  localStorage.setItem("oldTodo", JSON.stringify(list));
}


function removeOldTodoTask() {
  var old_storage = JSON.parse(localStorage.getItem("oldTodo"));

  var tasks = document.getElementsByClassName("oldTodoItem");
  for (let i=0; i<tasks.length; i++) {
    if (tasks[i].checked) {
      console.log(tasks[i].value);
      old_storage.splice(i, 1);
      updateOldTodo(old_storage);
      console.log(localStorage);
      genOldTodoList();
      break;
    }
  }
}

function clearOldTodo() {
  $("#oldTodoItems").html("");
  $("#clearButton").html("<p>Completed storage is empty</p>");

  localStorage.setItem("oldTodo", JSON.stringify([]));
  console.log(localStorage);
}

genOldTodoList();
