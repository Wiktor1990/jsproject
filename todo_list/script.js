const todosStorageKey = "todos";

const createCustomElement = (tagName, className, textContent = "") => {
  const element = document.createElement(tagName);
  if (className) element.className = className;

  if (textContent) element.textContent = textContent;
  return element;
};

function initTodoApp() {
  const root = document.getElementById("root");
  if (!root) return;

  const container = document.createElement("div");
  container.className = "container";

  const deleteAllBtn = document.createElement("button");
  deleteAllBtn.className = "btn-accent";
  deleteAllBtn.textContent = "Delete all";

  const input = document.createElement("input");
  input.className = "todo-input";
  input.type = "text";
  input.placeholder = "Enter todo ...";

  const addBtn = document.createElement("button");
  addBtn.className = "btn-accent";
  addBtn.textContent = "Add";

  const inputGroup = createCustomElement("div", "input-group");
  inputGroup.append(deleteAllBtn, input, addBtn);
  container.append(inputGroup);

  const todoList = createCustomElement("ul", "todo-list");
  container.append(todoList);
  root.append(container);

  const handleAddTask = () => {
    const text = input.value.trim();
    if (text !== "") {
      createTodoItem(text, todoList);
      input.value = "";
      input.focus();
      saveCurrentDOMToLocalStorage(todoList);
    }
  };

  addBtn.addEventListener("click", handleAddTask);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  });

  deleteAllBtn.addEventListener("click", () => {
    todoList.innerHTML = "";

    setDate([]);
  });

  todoList.addEventListener("click", (event) => {
    const target = event.target;

    const action = target.dataset.action;
    if (!action) return;

    const li = target.closest(".todo-item");
    const textDiv = li.querySelector(".todo-text");

    if (action === "delete") {
      li.remove();

      saveCurrentDOMToLocalStorage(todoList);
    }

    if (action === "check") {
      const isDone = textDiv.style.textDecoration === "line-through";

      if (isDone) {
        textDiv.style.textDecoration = "none";
        textDiv.style.opacity = "1";
        li.classList.remove("completed");
      } else {
        textDiv.style.textDecoration = "line-through";
        textDiv.style.opacity = "0.5";
        li.classList.add("completed");
      }

      saveCurrentDOMToLocalStorage(todoList);
    }
  });
  loadTodosFromStorage(todoList);
}
initTodoApp();

const createTodoItem = (text, todoList) => {
  const checkBtn = createCustomElement("button", "check-btn", "✓");
  const textDiv = createCustomElement("div", "todo-text", text);
  const deleteBtn = createCustomElement("button", "delete-btn", "X");

  const dateString = new Date().toLocaleDateString("ru");
  const dateDiv = createCustomElement("div", "todo-date", dateString);

  const li = createCustomElement("li", "todo-item");

  checkBtn.dataset.action = "check";
  deleteBtn.dataset.action = "delete";

  li.append(checkBtn, textDiv, deleteBtn, dateDiv);
  todoList.append(li);
};

function setDate(todos) {
  localStorage.setItem(todosStorageKey, JSON.stringify(todos));
}

function getDate() {
  if (localStorage.getItem(todosStorageKey) === null) {
    setDate([]);
  }

  const todosFromStorage = localStorage.getItem(todosStorageKey);
  try {
    return JSON.parse(todosFromStorage);
  } catch (error) {
    console.log("Parsing error:", error);
    return [];
  }
}

function saveCurrentDOMToLocalStorage(todoListElement) {
  const todoItems = todoListElement.querySelectorAll(".todo-item");
  const todosArray = [];

  todoItems.forEach((li) => {
    const text = li.querySelector(".todo-text").textContent;
    const date = li.querySelector(".todo-date").textContent;
    const isChecked =
      li.querySelector(".todo-text").style.textDecoration === "line-through";

    if (!li.dataset.id) {
      li.dataset.id = Date.now() + Math.random();
    }

    const todoObj = {
      id: Number(li.dataset.id),
      date: date,
      text: text,
      isChecked: isChecked,
    };

    todosArray.push(todoObj);
  });

  setDate(todosArray);
}

function loadTodosFromStorage(todoListElement) {
  const savedTodos = getDate();

  savedTodos.forEach((todo) => {
    createTodoItem(todo.text, todoListElement);

    const lastLi = todoListElement.lastElementChild;
    lastLi.dataset.id = todo.id;

    lastLi.querySelector(".todo-date").textContent = todo.date;

    if (todo.isChecked) {
      const textDiv = lastLi.querySelector(".todo-text");
      textDiv.style.textDecoration = "line-through";
      textDiv.style.opacity = "0.5";
      lastLi.classList.add("completed");
    }
  });
}
