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
}

console.log("Работа с логическими переменными");
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
}

console.log("Работа с && (и) и || (или)");

const a2 = 2;

//1
let result3 =
  a2 > 0 && a2 < 5 ? console.log("Верно_1") : console.log("Неверно_1");

//2
let result4 = a2 == 0 || a2 == 2 ? console.log(a2 + 7) : console.log(a2 / 10);

const a3 = 3;
const b = 5;
//3

let result5 = a3 <= 1 && b >= 3 ? console.log(a3 + b) : console.log(a3 - b);

//4
let result6 =
  (a3 > 2 && a3 < 11) || (b >= 6 && b < 14)
    ? console.log("Верно_4")
    : console.log("Неверно_4");

console.log("На switch-case");

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
}

console.log("Циклы while и for");

//1
let i = 1;
while (i <= 100) {
  console.log(i);
  i += 1;
}
for (i = 0; i < 10; i++) {
  console.log(i + 1);
}
//2
i = 11;
while (i <= 33) {
  console.log(i);
  i += 1;
}
for (i = 10; i < 33; i++) {
  console.log(i + 1);
}

//3
i = 0;
while (i <= 100) {
  console.log(i);
  i += 2;
}
for (i = -2; i < 100; i = i + 2) {
  console.log(i + 2);
}

//4
i = 1;
let sum3 = 0;
while (i <= 100) {
  sum3 = i + sum3;
  i += 1;
}
console.log(sum3);

let sum4=0;
for (i = 0; i < 101; i = i + 1) {
  sum4 = i + sum4;
}
console.log("Сумма чисел", sum4);

console.log("Работа с for для массивов");
//1
let arr1 = [1, 2, 3, 4, 5];
for (i = 0, l = arr1.length; i < l; i++) {
  console.log(arr1[i]);
}
//2
let arr2 = [1, 2, 3, 4, 5];
for (i = 0, l = arr2.length; i < l; i++) {
  console.log(arr2[i]);
}
 */

console.log("Задачи общие");
//2
const arr3 = [1, 2, 3 - 4, -5, 6, -3, -1];
let sum5 = 0;
console.log(arr2[i]);
for (i = 0; i < arr3.length; i += 1) {
  if (arr3[i] > 0) {
    sum5 += arr3[1];
  }
}
//4
console.log(sum5);
const arr4=[10,20,30,40,50,235,3000];
for(+arr4[i].toString()[0]===1||
+arr4[i].toString()[0]===2||
+arr4[i].toString()[0]===5);)
{console.log(arr4[i]);}
