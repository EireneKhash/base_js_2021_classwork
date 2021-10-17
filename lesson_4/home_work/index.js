/* console.log("Работа с if-else");
const a = 3;

//1
if (a == 0) {
  console.log("Верно_1");
} else {
  console.log("Неверно_1");
}

//2
if (a > 0) {
  console.log("Верно_2");
} else {
  console.log("Неверно_2");
}

//3
if (a < 0) {
  console.log("Верно_3");
} else {
  console.log("Неверно_3");
}

//4
if (a >= 0) {
  console.log("Верно_4");
} else {
  console.log("Неверно_4");
}

//5
if (a <= 0) {
  console.log("Верно_5");
} else {
  console.log("Неверно_5");
}

//6
if (a != 0) {
  console.log("Верно_6");
} else {
  console.log("Неверно_6");
}

//7
if (a == "test") {
  console.log("Верно_7");
} else {
  console.log("Неверно_7");
}

//8
if (a === "1") {
  console.log("Верно_8");
} else {
  console.log("Неверно_8");
} */

/* console.log("Работа с логическими переменными");
const test = false;

//1
let result1 = test == true ? console.log("Верно_1") : console.log("Неверно_1");

if (test == true) {
  console.log("Верно_1");
} else {
  console.log("Неверно_1");
}

//2
let result2 = test != true ? console.log("Верно_2") : console.log("Неверно_2");

if (test != true) {
  console.log("Верно_2");
} else {
  console.log("Неверно_2");
} */

/* console.log("Работа с && (и) и || (или)");

const a = 2;
const b = 5;

//1
result1 = a > 0 && a < 5 ? console.log("Верно_1") : console.log("Неверно_1");

//2
result2 = a == 0 || a == 2 ? console.log(a + 7) : console.log(a / 10);

//3

let result3 = a <= 1 && b >= 3 ? console.log(a + b) : console.log(a - b);

//4
let result4 =
  (a > 2 && a < 11) || (b >= 6 && b < 14)
    ? console.log("Верно_4")
    : console.log("Неверно_4");
 */
/* console.log("На switch-case");

//1

let num = 3;
switch (num) {
  case 1:
    console.log("зима");
    break;
  case 2:
    console.log("весна");
    break;
  case 3:
    console.log("лето");
    break;
  case 4:
    console.log("осень");
    break;
}

console.log("Общие задачи");

//1
const day = 35;
if (day <= 10 && day >= 1) {
  console.log("Первая декада месяца");
} else if (day <= 20 && day >= 1) {
  console.log("Вторая декада месяца");
} else if (day <= 31 && day >= 1) {
  console.log("Третья декада месяца");
} else console.log("Такого числа нет в месяце");

//2
const month = 5;
if (month <= 2 || month == 12) {
  console.log("Зима");
} else if (month <= 5) {
  console.log("Весна");
} else if (month <= 8) {
  console.log("Лето");
} else if (month <= 11) {
  console.log("Осень");
}

//3
const string1 = "abcde";
let firstLetter = string1[0];
console.log("Первая буква строки =", firstLetter, ", это буква а?");
if (firstLetter == "a") {
  console.log("Да");
} else {
  console.log("Нет");
}

//4
const string2 = "12345";
let firstNum = string2[0];
console.log("Первая цифра строки =", firstNum, ", это 1, 2 или 3?");
if (firstNum == "1" || firstNum == "2" || firstNum == "3") {
  console.log("Да");
} else {
  console.log("Нет");
}

//5
const string3 = "423";
let sum = +string3[0] + +string3[1] + +string3[2];
console.log("Сумма цифр", sum);

//6
const string4 = "123456";
let sum1 = +string4[0] + +string4[1] + +string4[2];
console.log();
let sum2 = +string4[3] + +string4[4] + +string4[5];
console.log(
  "Сумма первых трёх цифр",
  sum1,
  ". Сумма последних трёх цифр",
  sum2,
  ". Они равны?"
);
if (sum1 === sum2) {
  console.log("Да");
} else {
  console.log("Нет");
} */

/* console.log("Циклы while и for");

//1
let i = 1;
while (i <= 100) {
  console.log(i);
  i += 1;
}
for (i = 0; i < 10; i++) {
  console.log(i + 1);
} */

/* //2
let i = 11;
while (i <= 33) {
  console.log(i);
  i += 1;
}
for (i = 10; i < 33; i++) {
  console.log(i + 1);
} */

/* //3
let i = 0;
while (i <= 100) {
  console.log(i);
  i += 2;
}
for (i = -2; i < 100; i = i + 2) {
  console.log(i + 2);
} */

/* //4
let i = 1;
let sum = 0;
while (i <= 100) {
  sum = i + sum;
  i += 1;
}
console.log(sum); */

/* let sum = 0;
for (i = 0; i < 101; i = i + 1) {
  sum = i + sum;
}
console.log("Сумма чисел", sum); */

/* console.log("Работа с for для массивов");
//1
const arr1 = [1, 2, 3, 4, 5];
for (i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

//2
let result = 0;
const arr2 = [1, 2, 3, 4, 5];
for (i = 0; i < arr2.length; i++) {
  result = arr2[i] + result;
}
console.log(result); */

/* console.log("Задачи общие");
//1
const arr3 = [2, 5, 9, 15, 0, 4];
for (i = 0; i < arr3.length; i++) {
  if (arr3[i] >= 3 && arr3[i] <= 10) {
    console.log(arr3[i]);
  }
}

//2
const arr4 = [1, 2, 3, -4, -5, 6, -3, -1];
let sum = 0;
for (i = 0; i < arr4.length; i += 1) {
  if (arr4[i] > 0) {
    sum += arr4[i];
  }
}
console.log("Сумма элементов массива", sum); */

//3
/* const arr5 = [1, 2, 5, 9, 4, 13, 4, 10];
for (i = 0; i < arr5.length; i += 1) {
  if (arr5[i] === 4) {
    console.log("Есть!");
    break;
  }
} */

//4
/* const arr6 = [10, 20, 30, 40, 50, 235, 3000];
let x;
for (i = 0; i < arr6.length; i += 1) {
  x = String(arr6[i]);
  if (x[0] == "2" || x[0] == "1" || x[0] == "5") {
    console.log(arr6[i]);
  }
} */

//5
/* const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let x = "-";
for (i = 0; i < arr7.length; i += 1) {
  x = x + arr7[i] + "-";
}
console.log(x); */

//6
/* const arr8 = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
for (i = 0; i < arr8.length; i += 1) {
  if (arr8[i] == "Суббота" || arr8[i] == "Воскресенье") {
    console.log(arr8[i].bold());
  } else {
    console.log(arr8[i]);
  }
}
 */

//7
/* const arr9 = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
let day = "Пятница";
for (i = 0; i < arr9.length; i += 1) {
  if (arr9[i] === day) {
    console.log(arr9[i].italics());
  } else {
    console.log(arr9[i]);
  }
}
 */

//8
/* let n = 1000;
let num = 0;
for (; n >= 50; num += 1) {
  n = n / 2;
}
console.log(num); */

let year;
const yearOfGagarinAtCosmos = 1961;
let leapYear = 0;
let i = 0;
for (year = 1800; year <= 2020; year += 1) {
  if (year % 4 === 0) {
    leapYear += 1;
  }
  if (year <= yearOfGagarinAtCosmos) {
    i += 1;
  }
}
console.log(
  "Потребовалось ",
  leapYear,
  " итераций для вычисления всех високосных годов промежутка, всего ",
  leapYear,
  " високосных годов."
);
console.log(
  "Потребовалось ",
  i,
  " итераций для поиска года первого полета человека в космос."
);
