//импорт функций
import { getDate, setDate } from "./storage.js";
import { createCustomElement, renderTodos } from "./dom.js";
//Главная функция
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
  //Добавление задач
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
