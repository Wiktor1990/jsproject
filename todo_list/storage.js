const todosStorageKey = "todos";
//Функция записи данных
export function setDate(todos) {
  localStorage.setItem(todosStorageKey, JSON.stringify(todos));
}
//Функция получения данных
export function getDate() {
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
