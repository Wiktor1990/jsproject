const firstWork = "true";
const userName = false;
const userAge = 17;
const myNumber = undefined;
const works = null;

console.log(typeof firstWork);
console.log(typeof userName);
console.log(typeof userAge);
console.log(typeof myNumber);
console.log(typeof works);

let height = 15;
let width = 20;

if (height > width) {
  console.log(height);
} else {
  console.log(width);
}

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

const shouldGoToWork = key && documents && pen && (apple || orange);

console.log(shouldGoToWork);

const userInput = Number(prompt("Add number"));

if (userInput % 3 === 0 && userInput % 5 === 0) {
  console.log("FizzBuzz");
} else if (userInput % 5 === 0) {
  console.log("Fiz");
} else if (userInput % 3 === 0) {
  console.log("Buz");
} else {
  console.log(userInput);
}

const age = Number(prompt("Введите ваш возраст:"));

if (age > 18) {
  console.log("Попей пивка");
} else if (age >= 16 && age <= 18) {
  console.log("Можешь выкурить сигаретку, только маме не говори");
} else {
  console.log("Пей колу");
}

const direction = prompt(
  "В какую сторону света вы хотите отправиться? (юг, север, запад, восток)",
);

if (direction !== null) {
  switch (direction.trim().toLowerCase()) {
    case "юг":
      console.log("на юг пойдешь счастье найдешь");
      break;

    case "север":
      console.log("на север пойдешь много денег найдешь");
      break;

    case "запад":
      console.log("на запад пойдешь верного друга найдешь");
      break;

    case "восток":
      console.log("на восток пойдешь разработчиком станешь");
      break;

    default:
      console.log("Неверные данные. Пожалуйста, попробуйте еще раз.");
      break;
  }
} else {
  console.log("Вы отменили ввод.");
}
