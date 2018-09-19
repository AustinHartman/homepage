function updateTodoLinks(list) {
  localStorage.setItem("todoList", JSON.stringify(list));
}

function addTodo() {
  var td = JSON.parse(localStorage.getItem("todoList"));
  var newTask = document.getElementById("addTodoList").value;

  if (newTask.length > 0) {
    td.push(newTask);
    updateTodoLinks(td);
    document.location.reload();
  }
}

function removeTodoTask() {
  var tasks_storage = JSON.parse(localStorage.getItem("todoList"));
  var tasks = document.getElementsByClassName("todoItem");
  console.log(tasks);
  for (let i=0; i<tasks.length; i++) {
    console.log(tasks[i].checked);
    console.log(tasks[i]);
    if (tasks[i].checked) {
      tasks_storage.splice(i, 1);
      document.location.reload();
      break;
    }
  }
  updateTodoLinks(tasks_storage);
}


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
