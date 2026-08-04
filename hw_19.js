const user = {
  name: "John",
  age: 30,
};

delete user.age;
delete user.name;
console.log(user);

const user2 = {
  name: "Smith",
  age: 25,
};

if ("age" in user2) {
  console.log(true);
}

const student = {
  name: "John",
  age: 19,
  isHappy: true,
};

for (let key in student) {
  console.log(`Ключ: ${key}, значение: ${student[key]}`);
}

const colors = {
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};

console.log(colors["ru pum pu ru rum"].red);
console.log(colors["ru pum pu ru rum"].blue);

let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  igor: 664,
  alexandra: 19,
};

let totalSalary = 0;
let count = 0;

for (const key in salaries) {
  if (salaries.hasOwnProperty(key)) {
    totalSalary += salaries[key];
    count++;
  }
}

let averageSalary = totalSalary / count;

console.log(`Общая сумма: ${totalSalary}`);
console.log(`Средняя зарплата: ${averageSalary}`);

const registerLogin = prompt("Регистрация: Введите логин");
const registerPassword = prompt("Регистрация: Введите пароль");

const userCredentials = {
  login: registerLogin,
  password: registerPassword,
};

alert("Регистрация прошла успешно!");

const loginInput = prompt("Вход: Введите логин");
const passwordInput = prompt("Вход: Введите пароль");

if (
  loginInput === userCredentials.login &&
  passwordInput === userCredentials.password
) {
  alert("Добро пожаловать");
} else {
  alert("Неверный логин или пароль!");
}

let student1 = {
  name: "Polina",
  age: 27,
};
let student2 = {
  name: "Polina",
  age: 27,
};

function isEqual(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

console.log(isEqual(student1, student2));
