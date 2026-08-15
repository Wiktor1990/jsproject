function initTodoApp() {
  const root = document.getElementById("root");
  if (!root) return;

  const container = document.createElement("div");
  container.className = "todo-container";

  const inputGroup = document.createElement("div");
  inputGroup.className = "input-group";

  const deleteAllBtn = document.createElement("button");
  deleteAllBtn.className = "btn-accent";
  deleteAllBtn.textContent = "Delete All";

  const input = document.createElement("input");
  input.className = "todo-input";
  input.type = "text";
  input.placeholder = "Enter todo item";

  const addBtn = document.createElement("button");
  addBtn.className = "btn-accent";
  addBtn.textContent = "Add";

  inputGroup.append(deleteAllBtn, input, addBtn);

  const todoList = document.createElement("ul");
  todoList.className = "todo-list";

  container.append(inputGroup, todoList);
  root.append(container);

  function createTodoItem(text) {
    const li = document.createElement("li");
    li.className = "todo-item";

    const checkBtn = document.createElement("button");
    checkBtn.className = "check-btn";
    checkBtn.textContent = "✓";

    const textDiv = document.createElement("div");
    textDiv.className = "todo-text";
    textDiv.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "X";

    const dateDiv = document.createElement("div");
    dateDiv.className = "todo-date";
    dateDiv.textContent = new Date().toLocaleDateString("ru-RU");

    deleteBtn.addEventListener("click", () => li.remove());

    checkBtn.addEventListener("click", () => {
      const isDone = textDiv.style.textDecoration === "line-through";
      textDiv.style.textDecoration = isDone ? "none" : "line-through";
      textDiv.style.opacity = isDone ? "1" : "0.5";
    });

    li.append(checkBtn, textDiv, deleteBtn, dateDiv);
    todoList.append(li);
  }

  addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text !== "") {
      createTodoItem(text);
      input.value = "";
      input.focus();
    }
  });

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addBtn.click();
  });

  deleteAllBtn.addEventListener("click", () => {
    todoList.innerHTML = "";
  });
}

initTodoApp();
