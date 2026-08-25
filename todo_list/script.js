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
      const now = new Date();
      const timeStr = now.toLocaleTimeString("ru", {
        hour: "2-digit",
        minute: "2-digit",
      });
      const dateStr = now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
      });
      const finalDate = `${timeStr} ${dateStr}`;

      const currentTodos = getDate();

      const newTodo = {
        id: Date.now(),
        date: finalDate,
        text: text,
        isChecked: false,
      };

      currentTodos.push(newTodo);
      setDate(currentTodos);
      renderTodos(currentTodos, todoList);

      input.value = "";
      input.focus();
    }
  };

  addBtn.addEventListener("click", handleAddTask);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  });

  deleteAllBtn.addEventListener("click", () => {
    setDate([]);
    renderTodos([], todoList);
  });

  todoList.addEventListener("click", (event) => {
    const target = event.target;

    const action = target.dataset.action;
    if (!action) return;

    const li = target.closest(".todo-item");
    if (!li) return;

    const todoId = Number(li.dataset.id);
    const currentTodos = getDate();

    if (action === "delete") {
      const updatedTodos = currentTodos.filter((todo) => todo.id !== todoId);
      setDate(updatedTodos);
      renderTodos(updatedTodos, todoList);
    }

    if (action === "check") {
      const targetTodo = currentTodos.find((todo) => todo.id === todoId);
      if (targetTodo) {
        targetTodo.isChecked = !targetTodo.isChecked;
        setDate(currentTodos);
        renderTodos(currentTodos, todoList);
      }
    }
  });

  renderTodos(getDate(), todoList);
}

initTodoApp();

const createTodoItem = (todo) => {
  const checkBtn = createCustomElement("button", "check-btn", "✓");
  const textDiv = createCustomElement("div", "todo-text", todo.text);
  const deleteBtn = createCustomElement("button", "delete-btn", "X");
  const dateDiv = createCustomElement("div", "todo-date", todo.date);

  const li = createCustomElement("li", "todo-item");

  if (todo.isChecked) {
    li.classList.add("completed");
  }

  li.dataset.id = todo.id;
  checkBtn.dataset.action = "check";
  deleteBtn.dataset.action = "delete";

  li.append(checkBtn, textDiv, deleteBtn, dateDiv);
  return li;
};

function setDate(todos) {
  localStorage.setItem(todosStorageKey, JSON.stringify(todos));
}

function getDate() {
  if (localStorage.getItem(todosStorageKey) === null) {
    setDate([]);
    return [];
  }

  const todosFromStorage = localStorage.getItem(todosStorageKey);
  try {
    return JSON.parse(todosFromStorage);
  } catch (error) {
    console.log("Parsing error:", error);
    return [];
  }
}

function renderTodos(todosArray, todoListElement) {
  todoListElement.innerHTML = "";

  const fragment = document.createDocumentFragment();

  todosArray.forEach((todo) => {
    const todoItem = createTodoItem(todo);
    fragment.append(todoItem);
  });

  todoListElement.append(fragment);
}
