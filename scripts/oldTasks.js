function genOldTodoList() {
  var td = JSON.parse(localStorage.getItem("oldTodo"));
  var result = "<label class='check'>";
  for (var i = 0; i < td.length; i++) {
      result += "<input type='checkbox' class='todoItem' onclick='' value='" + td[i] + "'>" + td[i] + "</input><br>";
  }
  result += "<div class='box'></div></label>";
  document.getElementById('oldTodoItems').innerHTML = result;
}

genOldTodoList();
