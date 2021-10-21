//1 Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
/* const getSqr = (num) => {
  let sqr = num ** 2;
  console.log(sqr);
};
getSqr(5); */

//или
/* const getSqr = (num) => console.log(num ** 2);
getSqr(7); */

//2 Сделайте функцию, которая возвращает сумму двух чисел.
/* const sum = (a, b) => a + b;
console.log(sum(1, 2)); */

//3 Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
/* const countFunc = (a, b, c) => (a - b) / c;
console.log(countFunc(7, 1, 2)); */

//4 Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
/* const getDayOfWeek = (num) => {
  switch (num) {
    case 1:
      console.log("Понедельник");
      break;
    case 2:
      console.log("Вторник");
      break;
    case 3:
      console.log("Среда");
      break;
    case 4:
      console.log("Четверг");
      break;
    case 5:
      console.log("Пятница");
      break;
    case 6:
      console.log("Суббота");
      break;
    case 7:
      console.log("Воскресенье");
      break;
    default:
      console.log("Введите номер дня недели");
      break;
  }
};
getDayOfWeek(2); */

//5 Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
/* const isEqual = (a, b) => {
  if (a === b) {
    return true;
  } else return false;
};
console.log(isEqual(2, 3)); */

//6  Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.
/* const isSumBigger10 = (a, b) => {
  if (a + b > 10) {
    return true;
  } else return false;
};
console.log(isSumBigger10(8, 3)); */

//7
/* Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. 
 Если отрицательное - пусть функция вернет true, а если нет - false. */
/* const isNegative = (num) => {
  if (num < 0) {
    return true;
  } else return false;
};
console.log(isNegative(-2)); */

//8
/* Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. 
Если это так - пусть функция возвращает true, если не так - false. */
/* const isNumberInRange = (num) => {
  if (num > 0 && num < 10) {
    return true;
  } else return false;
};
console.log(isNumberInRange(5)); */

//9
/* Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. 
Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи. */
/* const arr = [1, 2, -3, 4, 11, 8];
let arrInRange = [0];
for (let i = 0, let j = 0; i < arr.length; i += 1) {
  if (isNumberInRange(arr[i]) == true) {
    arrInRange[j] = arr[i];
    j += 1;
  }
}
console.log(arrInRange); */

//10 Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
const getDigitsSum = (num) => {
  let sum = 0;
  let x = String(num);
  for (let i = 0; i < x.length; i += 1) {
    sum += +x[i];
  }
  return sum;
};
//console.log(getDigitsSum(123));

//11
/* Найдите все года от 1 до 2020, сумма цифр которых равна 13. 
Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.*/
/* for (let year = 1; year <= 2020; year += 1) {
  if (getDigitsSum(year) === 13) {
    console.log(year);
  }
} */

//12
/* Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. 
Если четное - пусть функция возвращает true, если нечетное - false. */
/* const isEven = (n) => {
  if (n % 2 === 0) {
    return true;
  } else return false;
};
console.log(isEven(6)); */

//13
/* Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. 
Для этого используйте вспомогательную функцию isEven из предыдущей задачи. */
/* const arr = [1, 2, 13, 46, 9, 10, 3];
let arrNew = [0];
for (let i = 0, let j = 0; i < arr.length; i += 1) {
  if (isEven(arr[i])) {
    arrNew[j] = arr[i];
    j += 1;
  }
}
console.log(arrNew); */

//14
/* Сделайте функцию getDivisors, которая параметром принимает число и 
возвращает массив его делителей (чисел, на которое делится данное число).*/
/* const getDivisors = (n) => {
  let arr = [0];
  for (let d = 1, let i = 0; d <= n; d += 1) {
    if (n % d === 0) {
      arr[i] = d;
      i += 1;
    }
  }
  return arr;
};
console.log(getDivisors(100)); */

//15 Дан массив с числами. Выведите последовательно его элементы.
/* const arr1 = [62, -7, 30, 1, 9, 8];
const sortFunction = (arr) => {
  let arrNew = [0];
  for (let j = 0; j < arr.length; j += 1) {
    let min = Infinity;
    for (let i = 0; i < arr.length; i += 1) {
      if (min > arr[i]) {
        min = arr[i];
      }
    }
    for (let i = 0; i <= arr.length; i += 1) {
      if (min === arr[i]) {
        arr[i] = Infinity;
        break;
      }
    }
    arrNew[j] = min;
  }
  return arrNew;
};
console.log(sortFunction(arr1)); */

//16
/* Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. 
И так, пока сумма не станет однозначным числом (9 и менее). */

//Раскомментировать функцию getDigitsSum()
//Пока что не получилось

/* const sumFunc = (n) => {
  let sum = n;
  if (sum > 9) {
    n = sum;
    sum = getDigitsSum(n);
  } else return sum;
};
console.log(sumFunc(678)); */

/* const sumFunc = (n) => {
  let sum;
  for (; n > 9; sum = getDigitsSum(n)) {
    n = sum;
    sum = 0;
  }
  return sum;
};
console.log(sumFunc(678)); */
