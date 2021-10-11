/* if (true) {
console.log("TRUE");
}
if (0) {
console.log("FALSE");
} */

/* console.log("START");

const value = -5;

if (value > 0) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}
console.log("FINISH"); */

/* console.log("START");

let value;

if (value === 0) {
  console.log(value, " = value");
} else if (value > 1) {
  console.log(value, " > 1");
} else if (value < 1) {
  console.log(value, " < 1");
} else {
  console.log(value);
}

console.log("FINISH"); */

/* const age = 12;
const result = age >= 18 ? "Доступ разрешён" : "Доступ запрещён";

console.log(result); */

/* switch ("Ivan") {
  case "Ivan":
    console.log("IVAN");
    break;
  case "Alex":
    console.log("ALEX");
    break;
  case "Max":
    console.log("MAX");
    break;
  default:
    console.log("Имени нет в списке");
}

console.log("FINISH"); */

//Задача 1
/* const length_1 = 125;
const length_2 = 6;
const length_3 = 73;
let length_max;

if (length_1 > length_2) {
  length_max = length_1;
} else {
  length_max = length_2;
}

if (length_max < length_3) {
  length_max = length_3;
}

console.log("Наибольшая длина отрезка = ", length_max); */

/* const a = 1;
const b = 2;
const c = 3;
if (a > b) {
  a > c ? console.log(a) : console.log(b);
} else {
  b > c ? console.log(b) : console.log(c);
} */

//Задача 3
/* let usersRole = "UserPC";
switch (usersRole) {
  case "Admin":
    console.log("Администратор Саша с доступом к администрированию");
    break;
  case "Manager":
    console.log("Менеджер Оля с ограниченным доступом к администрированию");
    break;
  case "UserPC":
    console.log("Пользователь ПК без домступа к администрированию");
    break;
  case "UserMobile":
    console.log(
      "Пользователь мобильного устройства без домступа к администрированию"
    );
    break;
  default:
    console.log("Нет информации");
}

console.log("FINISH");

//Задача 2
const t = 40;
if (t <= -30) {
  console.log("Оставайтесь дома!");
} else if (t <= -10) {
  console.log("Сегодня холодно");
} else if (t <= 5) {
  console.log("Не холодно");
} else if (t <= 15) {
  console.log("Тепло");
} else if (t <= 25) {
  console.log("Очень тепло");
} else if (t <= 35) {
  console.log("Жарко");
} else if (t > 35) {
  console.log("Пекло");
} */

/* const a = false;
const b = 0;

const result1 = a || b;
console.log(result1); */

/* const a = 10;
const b = "d";
const result2 = a && b;
console.log(result2); */

//Задача 1
/* const a = 10;
const b = 200;
const c = 3;
if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}
console.log((a && b) || (b && c)); */

//Пример 1
/* const name = "";
if (!name) {
  console.log("Имени нет");
} else {
  console.log("TИмя есть");
}

const name = "";
if (name) {
  console.log("Имя есть");
} else {
  console.log("Имени нет");
}  */ //равно Примеру 1 с отрицанием

//console.log(!!"Alex");

//let i = 0;

/* while (i < 10) {
  console.log(i);
  i += 1;
  //i=i+1;
} */

/* do {
  console.log("WORK");
} while (i); */

//console.log("END");

//Задача 1
/* let i = 0;
while (i < 10) {
  console.log("Hey you", i + 1);
  i += 1;
}
console.log("END");

for (let i = 0; i < 10; i++) {
  console.log("Hello", i + 1);
}
console.log("END");
 */

//Задача 2
const M = 26;
let N = 100;
let i = 0;

while (N >= M) {
  N = N / 2;
  i += 1;
}
console.log("Через ", i, " дня");

for (; N >= M; i++) {
  N = N / 2;
}
console.log("через ", i, " дней");
