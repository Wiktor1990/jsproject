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

  container.append(deleteAllBtn, input, addBtn);
  root.append(container);
}
initTodoApp();
