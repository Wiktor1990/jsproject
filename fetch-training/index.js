const API_URL = "https://jsonplaceholder.typicode.com/todos";

function printTodos(todos) {
  const root = document.getElementById("root");
  if (!root) return;

  const ul = document.createElement("ul");

  const fragment = document.createDocumentFragment();

  todos.forEach((todo) => {
    const { id, title } = todo;

    const li = document.createElement("li");

    li.textContent = `${id} ${title}`;

    fragment.append(li);
  });

  ul.append(fragment);
  root.append(ul);
}

async function getTodos() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Ошибка сети: статус ${response.status}`);
    }

    const todos = await response.json();

    printTodos(todos);
  } catch (error) {
    console.error("Не удалось загрузить данные задач:", error);
  }
}

getTodos();
