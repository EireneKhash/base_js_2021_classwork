/* function helloWorld() {
  console.log("Hello world");
}
helloWorld();


const isUserAuth = true;
function checkAccess(s) {
  if (isUserAuth) {
    console.log("доступ есть");
  } else {
    console.log("доступа нет");
  }
}
checkAccess();


function wrightMessage() {
  if (isUserAuth) {
    console.log("Привет, юзер");
  } else {
    console.log("Привет, гость");
  }
}
wrightMessage()


function sum(a, b = 0) {
  console.log(a + b);
}
sum(1, 4);
sum(16); */ //не работает без параметра по умолчанию, т.к. неуказанный аргумент undefined

/* let name;
function getName(name) {
  console.log("до return");
  return name; //директива return не должна быть пустая, при переносе на другую строку нужны ()
  console.log("после return"); //не будет выполняться
}

const userName = getName("Ivan");
console.log(userName); */ // Ivan

/* let name = "Alex";

function getName(userName) {
  return userName;
}

const nameUserOne = getName(name);
console.log(getName(nameUserOne));

name = "Ivan";

const nameUserTwo = getName(name);
console.log(nameUserTwo); */

/* let name = "Alex";

console.log(name, "1");

function sayHi(userName) {
  name = "Max";
  userName = "Petr";

  console.log(userName, "function");
}
sayHi(name);
console.log(name, "2"); */ //Alex 1/ Petr function/ Max 2

/* let a = 0;
let b = 0;
function sum() {
  a += 1;
  b += 1;
  //return a + b;
  console.log(a + b);
}
sum(); //2
sum(); //4
sum(); //6
sum(); //8, т.к. ф изменяет внешние параметры */

/* function sum() {
  const a = 1;
  const b = 0;

  //return a + b;
  console.log(a + b);
}
sum(); //1
sum(); //1
sum(); //1
sum(); //1, не изменяет внешние параметры, чистая ф */

//Задача 1
/* function sayHi(name) {
  if (name) {
    console.log("Привет,", name);
  } else {
    console.log("Привет, гость");
  }
}
sayHi("Al"); */

//Задача 2
/* function exp(a, b = 1) {
  console.log(a ** b);
}
exp(3, 2);
exp(20); */

//Задача 3
/* const arr1 = [1, 2, 3, 4];
function getAverageValue(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  console.log(avg);
}

getAverageValue(arr1); */

//Функциональное выражение

/* const sayName = function (name) {
  return name;
};
const copy = sayName;

console.log(sayName("Alex"));
console.log(copy("Ivan")); */

/* const getName = function () {
  console.log("Alex");
};

const getUserInfo = function (callBack) {
  console.log("USER INFO");
  callBack(); //любое название функции = getName()
};

getUserInfo(getName); //вызов ссылки на функцию, а не самой функции

test(); */ //вызов выполняется до определения ф

/* function test() {
  console.log("test");
}

test(); //вызов работает после инициализации

const test2 = function () {
  console.log("test2");
};
test2(); //вызов возможен только после объявления */

//Стрелочные функции

//const myFirstArrowFunc = () => console.log("!!");

/* const test1 = (name) => name;
//test1("Alex");
console.log(test1("Alex")); */

/* const getLog = () => console.log("LOG");
getLog(); */

/* //func declr
function example1(param) {
  return param;
}
example1(1);

//func expr
const example2 = function (param) {
  return param;
};
example2(2);

//arrow func.1
const example31 = (param) => param;
example31(3);
//arrow func.2
const example32 = (param) => {
  //big body
  return param;
};
example32(3);
 */

//Задача 1
/* const showString = (string, count) => {
  for (let i = 0; i <= count; i += 1) {
    console.log(string);
  }
};
showString("привет", 5);
showString("Alex", 10); */

//Задача 2
/* const isVowel = (letter) => {
  if (
    letter === "а" ||
    letter === "е" ||
    letter === "ё" ||
    letter === "и" ||
    letter === "о" ||
    letter === "у" ||
    letter === "ы" ||
    letter === "э" ||
    letter === "ю" ||
    letter === "я"
  ) {
    return true;
  } else return false;
};
console.log(isVowel("г"));
console.log(isVowel("у")); */

/* const isVowel = (letter) => {
  switch (letter) {
    case "а":
    case "у":
    case "э":
      console.log("true");
      break;
    default:
      console.log("false");
  }
};
isVowel("а");
 */
