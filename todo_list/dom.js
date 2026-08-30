export const createCustomElement = (tagName, className, textContent = "") => {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  return element;
};

//функция создания элементов карточки
export const createTodoItem = (todo) => {
  //ДЕСТРУКТУРИЗАЦИЯ
  const { id, text, date, isChecked } = todo;

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

export function renderTodos(todosArray, todoListElement) {
  todoListElement.innerHTML = "";

  const fragment = document.createDocumentFragment();

  todosArray.forEach((todo) => {
    const todoItem = createTodoItem(todo);
    fragment.append(todoItem);
  });

  todoListElement.append(fragment);
}
