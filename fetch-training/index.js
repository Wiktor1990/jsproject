const API_URL = "https://jsonplaceholder.typicode.com/todos";

const todosOrder = [15, 23, 7, 3];

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

function getTodosByPromiseChaining(orderArray) {
  let chain = Promise.resolve([]);

  for (const id of orderArray) {
    chain = chain.then((loadedTodos) => {
      return fetch(`${API_URL}/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Не удалось загрузить пост №${id}. Статус: ${response.status}`,
            );
          }
          return response.json();
        })
        .then((todo) => [...loadedTodos, todo]);
    });
  }

  return chain.catch((error) => {
    console.error("Ошибка в Promise chaining:", error.message);
    return [];
  });
}

getTodosByPromiseChaining(todosOrder).then((todos) => {
  printTodos(todos);
});

async function getTodosByAsyncAwait(orderArray) {
  const loadedTodos = [];
  try {
    for (const id of orderArray) {
      const response = await fetch(`${API_URL}/${id}`);

      if (!response.ok) {
        throw new Error(
          `Не удалось загрузить пост №${id}. Статус: ${response.status}`,
        );
      }

      const todo = await response.json();
      loadedTodos.push(todo);
    }
    return loadedTodos;
  } catch (error) {
    console.error("Ошибка в Async/Await:", error.message);
    return [];
  }
}

getTodosByAsyncAwait(todosOrder).then((todos) => {
  if (todos.length > 0) {
    printTodos(todos);
  }
});
