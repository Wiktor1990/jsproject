const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

function logElement(element) {
  console.log(element);
}

fibonacci.forEach(logElement);

const fibonacci1 = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

fibonacci1.forEach((element) => {
  console.log(element);
});

const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];
const result = users.map((name, index) => `member ${index + 1}. ${name}`);
console.log(result);

function result1(element, index) {
  return `member ${index + 1}. ${element}`;
}
console.log(users.map(result1));

const numbers = [7, -4, 32, -90, 54, 32, -21];
const result2 = numbers.filter((number) => number > 0);
console.log(result2);

function result3(element) {
  return element > 0;
}
console.log(numbers.filter(result3));

const calc = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
const result4 = calc.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(result4);

function result5(accumulator, currentValue) {
  return accumulator + currentValue;
}
console.log(calc.reduce(result5, 0));

const numbers3 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const result6 = numbers3.find((number) => number % 2 === 0);
console.log(result6);

function result7(element) {
  return element % 2 === 0;
}
console.log(numbers3.find(result7));

function students(name, salary, rate) {
  this.name = name;
  this.salary = salary;
  this.rate = rate;

  this.getCreditLimit = function () {
    switch (this.rate) {
      case "A":
        return this.salary * 12;
      case "B":
        return this.salary * 9;
      case "C":
        return this.salary * 6;
      case "D":
        return this.salary * 0;
      default:
        return 0;
    }
  };
}

const student1 = new students("Karyna", 1000, "A");
const student2 = new students("Andrej", 900, "B");
const student3 = new students("Nastia", 800, "C");
const student4 = new students("Kostia", 600, "D");
const student5 = new students("Veronika", 300, "B");

const studentsArray = [student1, student2, student3, student4, student5];

function calculateCreditLimit(studentsArray) {
  let totalSum = 0;
  for (let i = 0; i < studentsArray.length; i++) {
    totalSum += studentsArray[i].getCreditLimit();
  }
  return totalSum;
}

console.log("Total credit limit: " + calculateCreditLimit(studentsArray));
