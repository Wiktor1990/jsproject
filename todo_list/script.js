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
  });
}
initTodoApp();

const createTodoItem = (text, todoList) => {
  const checkBtn = createCustomElement("button", "check-btn", "✓");
  const textDiv = createCustomElement("div", "todo-text", text);
  const deleteBtn = createCustomElement("button", "delete-btn", "X");

  const dateString = new Date().toLocaleDateString("ru");
  const dateDiv = createCustomElement("div", "todo-date", dateString);

  const li = createCustomElement("li", "todo-item");

  li.append(checkBtn, textDiv, deleteBtn, dateDiv);
  todoList.append(li);

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  checkBtn.addEventListener("click", () => {
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
  });
};
