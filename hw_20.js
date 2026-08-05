const colors = ["red", "green", "blue"];
console.log(colors.length);

const animals = ["monkey", "dog", "cat"];
console.log(animals[animals.length - 1]);

const numbers = [5, 43, 63, 23, 90];
const res = numbers.slice(0, 0);
const res2 = (numbers.length = 0);
console.log(numbers);
console.log(res);
console.log(res2);

const students = ["Polina", "Dasha", "Masha"];
const res3 = students.pop();
const res4 = students.push("Borya");
const res5 = students.shift();
const res6 = students.unshift("Andrey");
console.log(students);
console.log(res3);
console.log(res4);
console.log(res5);
console.log(res6);

const cats = ["Gachito", "Tom", "Batman"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

for (let cat of cats) {
  console.log(cat);
}

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const res7 = evenNumbers.concat(oddNumbers);
const res8 = evenNumbers.indexOf(8);
console.log(res7);
console.log(res8);

const binary = [0, 0, 0, 0];

const res9 = binary.join("1");
console.log(res9);
