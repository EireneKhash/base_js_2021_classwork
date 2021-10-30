//из дз

//15 Заканчивается ли строка символами другой строки
//Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

/* const str = "Каждый охотник желает знать";
const str1 = "скрипт";
const str2 = "знать";
const subStr = str2;

String.prototype.endsWith = (str, substr) => {
  const findStr = String(str.match(/(\S+)$/g));
  if (findStr === substr) {
    return true;
  } else {
    return false;
  }
};
console.log(String.prototype.endsWith(str, subStr)); */

//16 Подстрока до/после указанного символа
//Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки,
//расположенную после или до указанного символа char в зависимости от параметра pos.

/* const str = "Астрономия — Наука о небесных телах";
getSubstr = (str, char, pos) => {
  let substr;
  if (pos === "до") {
    return (substr = str.slice(0, char));
  } else if (pos === "после") {
    return (substr = str.slice(char));
  } else {
    return "Error";
  }
};
console.log(getSubstr(str, 10, "после")); */

//19 Количество вхождений символа в строке
//Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

/* const str = "Астрономия это наука о небесных объектах";

const count = (str, stringsearch) => {
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === stringsearch) {
      count += 1;
    }
  }
  return count;
};
console.log(count(str, "т"));*/

//Объекты, массивы
//1
/* const arr1 = new Array(4, 5, 66, 8, 9);
console.log(arr1.length);
console.log(arr1);

const arr2 = new Array(4);
console.log(arr2.length);
console.log(arr2); */

/* const arr3 = [1, 2, 3, 4, 5];
console.log(arr3);
arr3[0] = 10;
console.log(arr3); */

//2
/* const data = [
  {
    name: "Al",
    age: "18",
  },
  {
    name: "Ivan",
    age: "20",
  },
  {
    name: "Max",
    age: "23",
  },
];
console.log(data);*/

//3
/* const arr = [];
console.log(arr);
arr[0] = "НОЛЬ";
console.log(arr);
arr[10] = "ДЕСЯТЬ"; //будет 9 пустых значений - дыра
arr[5] = "ПЯТЬ";
console.log(arr);
console.log(arr[4]); //undeined
console.log(arr.length); //11 элементов */

//4
/* const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr);
arr.length = 2; //остались только 2 элемента, остальные удалились
console.log(arr); */

//5
/* const arr = [];
arr.push(1); //добавление элемента в конец массива, длина массива увеличивается
arr.push(10);
console.log(arr);
arr.push(15, 100, 120);
console.log(arr);*/

//6
/* const str = "Астрономия это наука о небесных объектах";
const customFind = (arr, arrSymb) => {
  let result;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === arrSymb) {
      result = arr[i];
    }
  }
  return result;
};
console.log(customFind([1, 2, 3, 4], 3));
console.log([1, 2, 3, 4].find((el) => el === 3)); */

//7
/* const data = [
  { title: "First", writer: "Alex" },
  { title: "Second", writer: "Ivan" },
  { title: "Third", writer: "Alex" },
  { title: "Fourth", writer: "Max" },
  { title: "Fife", writer: "Max" },
  { title: "Six", writer: "Ivan" },
  { title: "Seven", writer: "Alex" },
]; */

/* console.log(data); //элемент массива - объект
const filterData = data.filter((el) => el.writer === "Alex"); //создаётся новый массив
console.log(filterData); //остался только Alex */

/* const newData = data.map((el, i) => {
  el.index = i;
  return el;
}); //новый массив с индексами от 0 до 6
console.log(newData); */

/* const newData = data.map((el, i) => el.title); //вывел только названия статей
console.log(newData); */

/* const testForEach = data.forEach((el) => console.log(el.title));
console.log(testForEach); //ничего не возвращаетб изменяет текущий массив

const testForEach2 = data.map((el) => console.log(el.title));
console.log(testForEach2); //массив undefined */

/* console.log(data);
const testForEach = data.forEach((el) => {
  el.title = "test";
});
console.log(data); //изменяется текущий массив */

/* const testForEach = data.forEach((el, i,arr[i]) => {
  if (i % 2 === 0) {
    el.title = "test";
    console.log(arr[i]);
  }
});
console.log(data); */

//8
/* const data = [
  { value: 2, month: "янв" },
  { value: 3, month: "фев" },
  { value: 5, month: "март" },
];
const valueSum = data.reduce((acum, curValue) => acum + curValue.value, 0); //curValue.value
console.log(valueSum); */ //[object Object]35 т.к. преобразовалось в строку, нужно передать 0-изначальное значение число

/* const data = [1, 45, 44];
const valueSum = data.reduce((acum, curValue) => acum + curValue);
console.log(valueSum); */ //изначально числа, всё работает

//Практика
//1 Написать функцию, которая будет принимать массив чисел, содержащий целые положительные и целые отрицательные числа,
//в качестве результата возвращать сумму четных положительных элементов переданного массива.

/* const arr = [1, -2, 3, 4, -5, 6, -7];
const positiveSum = (arr) =>
  arr
    .filter((el) => el > 0 && el % 2 === 0)
    .reduce((accum, curValue) => accum + curValue, 0);
console.log(positiveSum(arr)); */

//2 Написать функцию, которая будет принимать массив чисел, и будет убирать повторяющиеся значения из переданного массива,
//в качестве результата возвращать новый массив с уникальными значениями из исходного.
/* const arr = [1, 2, 3, 2, 4, 4, 5, 6, 1];

const findUniqueEls = (arr) => {
  const result = [];
  arr.forEach((el) => {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  return result;
};
console.log(findUniqueEls(arr)); */

/* const findUniqueEls = (arr) => {
  const arrNew = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
};
console.log(findUniqueEls(arr)); */

/* let uniqNumber = (arr) =>
  arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
console.log(uniqNumber(arr)); */

//3 Написать функцию  которая будет принимать два массива, и будет сравнивать их,
//если они идентичны (элементы совпадают по значению и по индексу) то функция возвращает true, в противном случае false.

/* const arr1 = [1, 2, 4, 5, 8];
const arr2 = [1, 2, 4, 5, 8, 5]; */

/* const isArr = (array1, array2) => array1.toString() === array2.toString();
console.log(isArr(arr1, arr2));*/

/* const comparison = (arr1, arr2) => {
  if (arr1.toString === arr2.toString) {
    return true;
  } else {
    return false;
  }
};
console.log(comparison(arr1, arr2)); */

/* const isArrEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return !arr1.map((el, i) => el === arr2[i]).includes(false); //true or false
};
console.log(isArrEqual(arr1, arr2)); */

/* function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
} */
