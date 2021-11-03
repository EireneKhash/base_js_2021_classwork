//1 Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

/* const vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];
let vegetableLength = vegetables.map((el) => (el = el.length));
console.log(vegetableLength); */ // 7,4,7,8

//2 Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Используя метод reduce(), напишите функцию currentSums(numbers),
//которая возвращает новый массив из такого же числа элементов,
//в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

/* const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
const currentSums = (numbers) => {
  let curSum = [];
  numbers.reduce((sum, curVal) => {
    curSum.push(sum);
    return (sum += curVal);
  });
  console.log(curSum);
};
currentSums(numbers); */

//3 Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

/* const arr = [0, 1, 2, 3, 4, 5, 6, 7];
sumSeven = (numbers) => {
  let newArr = [];
  let res;
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 0; j < numbers.length; j += 1) {
      if (numbers[i] + numbers[j] === 7) {
        res = "(" + numbers[i].toString() + ":" + numbers[j].toString() + ")";
        newArr.push(res);
        numbers.pop();
      }
    }
  }
  return newArr;
};
console.log(sumSeven(arr)); */

//4 Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв слов строки str.

/* const str = "Каждый охотник желает знать, где сидит фазан.";
const firstLetterArr = (str) => {
  let arr = str.split(" ");
  return arr.map((el) => el.slice(0, 1));
};
console.log(firstLetterArr(str)); */

//5 Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк,
//состоящих из предыдущего, текущего и следующего символа строки str.

/* const str = "JavaScript";
const strToArrCustom = (str) => {
  let strNew = "";
  for (let i = 0; i < str.length; i += 1) {
    strNew += str[i - 1] + str[i] + str[i + 1] + " ";
  }
  console.log(strNew);
  let arr = strNew.trim().split(" ");
  arr[0] = arr[0].slice(9); //удаление 'undefined' у 0 элемента
  arr[arr.length - 1] = arr[arr.length - 1].slice(0, 2); //удаление 'undefined' у последнего элемента
  return arr;
};
console.log(strToArrCustom(str)); */

//6 Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

/* const numerics = [5, 7, 2, 9, 3, 1, 8];
const sortDescendOrder = (arr) => {
  console.log(arr.sort((a, b) => b - a));
};
sortDescendOrder(numerics); */

//7 Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.

/* const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];
const getArr = (a, b, c) => {
  let arr = [];
  arr = arr.concat(a, b, c).sort((x, y) => y - x);
  console.log(arr); //не получилось добавить пробел вместо запятой
//let arrNew = [];
  //arrNew.push(arr.join(",").split(",").join(" ")); //arr-строка, один элемент массива arrNew
  //console.log(arrNew);
};
getArr(a, b, c); */

//8 Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива.
//Массив, конечно же, может быть произвольным. Показать решение.

/* const arr = [[1, 2, 3], [4, 5], [6]];
const arrSum = (arr) => {
  console.log(
    arr.reduce((a, b) => a.concat(b)).reduce((sum, curVal) => sum + curVal)
  );
};
arrSum(arr); */

//9 Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива.
//Массив, конечно же, может быть произвольным.

/* const arr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
const arrSum = (arr) => {
  console.log(
    arr
      .reduce((a, b) => a.concat(b))
      .reduce((a, b) => a.concat(b))
      .reduce((sum, curVal) => sum + curVal)
  );
};
arrSum(arr); */

//10 Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

/* const numerics = [5, 7, 2, 9, 3, 1, 8];
const reverseArr = (arr) => {
  let arrNew = [];
  for (let i = 0; i < arr.length; i += 1) {
    arrNew[i] = arr[arr.length - 1 - i];
  }
  console.log(arrNew);
};
reverseArr(numerics);*/

//или
/* const numerics = [5, 7, 2, 9, 3, 1, 8];
const reverseArr = (arr) => {
  let arrNew = [];
  for (let i = 0; i < arr.length; i += 1) {
    arrNew.unshift(arr[i]);
  }
  console.log(arrNew);
};
reverseArr(numerics); */

//11 Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

/* const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
const currentSums = (numbers) => {
  let curSum = [];
  numbers.reduce((sum, curVal) => {
    while (sum <= 10) {
      curSum.push(sum);
      return (sum += +curVal);
    }
  });
  console.log(curSum);
  console.log(curSum.length + 1, "элементов с начала массива надо сложить"); //не выводит последнюю сумму элементов, которая будет больше 10, поэтому прибавим 1 в счётчик curSum.length
};
currentSums(numbers); */

//12 Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив,
//а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

const arrayFill = (element, arrLength) => {
  let arr = [];
  for (let i = 0; i < arrLength; i += 1) {
    arr.push(element);
  }
  console.log(arr);
};
arrayFill("x", 5);
