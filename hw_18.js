function getSum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSum(100));

function calculateOverpayment(loanAmount) {
  const interestRate = 0.17;
  const years = 5;

  return loanAmount * interestRate * years;
}

console.log(calculateOverpayment(500000));

function trimString(str, fromIndex, toIndex) {
  let result = "";

  const end = toIndex > str.length ? str.length : toIndex;

  for (let i = fromIndex; i < end; i++) {
    result += str[i];
  }

  return result;
}

const text = "Привет, мир!";
console.log(trimString(text, 0, 6));
console.log(trimString(text, 8, 11));

function getSumNumbers(number) {
  const str = String(number);
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }

  return sum;
}

console.log(getSumNumbers(2021));

function getSum1(a, b) {
  const start = Math.min(a, b);
  const end = Math.max(a, b);

  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}

console.log(getSum1(1, 0));
console.log(getSum1(1, 2));
console.log(getSum1(1, 1));
console.log(getSum1(-1, 0));
console.log(getSum1(-1, 2));

function foo() {
  console.log("foo");
}

function boo() {
  console.log("boo");
}

function fooBoo(flag, fooFunc, booFunc) {
  if (flag) {
    fooFunc();
  } else {
    booFunc();
  }
}

fooBoo(true, foo, boo);
fooBoo(false, foo, boo);
