let x = 20;
let y = 58;
let z = 52;
let result = x + y + z;
console.log(result);

const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;

let myAgeInYears = 35;
let myAgeInAeconds =
  myAgeInYears * daysInYear * hoursInDay * minutesInHour * secondsInMinute;

console.log(myAgeInAeconds);

let count = 42;
let userName = "4";

let countToString = String(count);
let userNameToNumber = Number(userName);

console.log(typeof countToString);
console.log(typeof userNameToNumber);

let a = 1;
let b = 2;
let c = "white beer";

let myResult = `${a}${b} ${c}`;
console.log(myResult);

let word1 = "доступ";
let word2 = "морпех";
let word3 = "наледь";
let word4 = "попрек";
let word5 = "рубил";

let lengthWords =
  word1.length + word2.length + word3.length + word4.length + word5.length;

console.log(lengthWords);

let age = 25;
let isStudent = true;
let firstName = "Ivan";

let variables = { age, isStudent, firstName };

for (let name in variables) {
  let value = variables[name];
  let type = typeof value;
  console.log(`Variable: ${name} have type: ${type}`);
}

{
  let a = 4;
  let b = 3;

  a = a + b;
  b = a - b;
  a = a - b;

  console.log(a);
  console.log(b);
}

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher =
  codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);
