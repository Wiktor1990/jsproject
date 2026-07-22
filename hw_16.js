let x = 20;
let y = 58;
let z = 52;
const result = x + y + z;
console.log(result);

const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;

const myAgeInYears = 35;
const myAgeInAeconds =
  myAgeInYears * daysInYear * hoursInDay * minutesInHour * secondsInMinute;

console.log(myAgeInAeconds);

let count = 42;
let userName = "4";

const countToString = String(count);
const userNameToNumber = Number(userName);

console.log(typeof countToString);
console.log(typeof userNameToNumber);

let a = 1;
let b = 2;
let c = "white beer";

const myResult = `${a}${b} ${c}`;
console.log(myResult);

const word1 = "доступ";
const word2 = "морпех";
const word3 = "наледь";
const word4 = "попрек";
const word5 = "рубил";

const lengthWords =
  word1.length + word2.length + word3.length + word4.length + word5.length;

console.log(lengthWords);

const age = 25;
const isStudent = true;
const firstName = "Ivan";

const variables = { age, isStudent, firstName };

for (const name in variables) {
  const value = variables[name];
  const type = typeof value;
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

const cipher =
  codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);

{
  const userName = prompt("Your name?");
  alert(userName);

  const userAge = +prompt("Your age?");
  alert(userAge);
  console.log(`${userName}, ${userAge}`);
}
