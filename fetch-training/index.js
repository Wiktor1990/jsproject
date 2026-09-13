const API_URL = "https://jsonplaceholder.typicode.com/todos";

function printTodos(todos) {
  const root = document.getElementById("root");
  if (!root) return;

  const ul = document.createElement("ul");

  todos.forEach((todo) => {
    const { id, title } = todo;

    const li = document.createElement("li");

    li.textContent = `${id} ${title}`;

    ul.append(li);
  });

  root.append(ul);
}

async function getTodos() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Ошибка сети: статус ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Не удалось загрузить данные задач:", error);
    return [];
  }
}

getTodos().then((todos) => {
  printTodos(todos);
});
