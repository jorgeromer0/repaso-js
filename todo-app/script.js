window.onload = function () {
  const form = document.getElementById("form");
  const input = document.getElementById("input");
  const todos = document.getElementById("todos");
  //   console.log(form);
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
  });
};

function addTodo(params) {
  const todoText = input.value;
  if (todoText) {
    const todoEl = document.createElement("li");
    todoEl.innerText = todoText;

    todoEl.addEventListener("click", (e) => {
      todoEl.classList.toggle("completed");
      updateLS();
    });

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });
    todos.appendChild(todoEl);
    input.value = "";
    updateLS();
  }
}

function updateLS() {
  const todosEl = document.querySelectorAll("li");

  const todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
