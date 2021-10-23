//16  из дз

/* const evenNine = (num) => {
  num = `${num}`;
  let sum = 0;
  for (let i = 0; i < num.length; i += 1) {
    //не работало, потому что i < num.length, а не i < num
    sum += +num[i];
  }
  if (sum > 9) {
    return evenNine(sum);
  } else {
    return sum;
  }
};
console.log(evenNine(2478)); */

/* const isPalindrom = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i += 1) {
    newStr += str[str.length - i - 1];
  }
  if (newStr === str) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrom("angna")); */ //возвращает false

/* let num1 = 1;
let num2 = num1;
console.log(num1, num2);// 1,1
num1 = 2;
console.log(num1, num2);// 2,1
 */

/* const obj1 = {
  name: "Alex",
};
const obj2 = obj1;
console.log(obj1, obj2); // поменялось на IVAN при измененнии ниже
obj1.name = "IVAN"; //при const можно менять свойства объекта, но не объект
console.log(obj1, obj2); */

/* const obj = {};
obj.true = 1;
console.log(obj); // true: 1 строка */

/* const obj = {};
console.log(obj);
obj.age = 12;
obj["name-user"] = "Ivan"; // с тире только в []
console.log(obj);

console.log(obj.age, obj["name-user"]);

obj.age = 18;
obj["name-user"] = "Max";
console.log(obj);
console.log(obj.age);

delete obj.age;
console.log(obj);
console.log(obj.age); */

/* const obj = {
  sayHi: function (name) {
    console.log("Hi,", name); //метод - функция
  },
};
obj.sayHi("Max"); //надо вызывать как функцию */

/* const myFavoriteFilm = {
  title: "Harry Potter and the philosopher's stone",
  yearRealease: 2001,
  director: "Chris Columbus",
  writer: "J.K. Rowling",
  country: "UK, US",
};
myFavoriteFilm.boxOffice = "$1.007 billion";
myFavoriteFilm.titleShow = function () {
  console.log(myFavoriteFilm.title);
}; //можно сделать стрелочную функцию
myFavoriteFilm.titleShow();
delete myFavoriteFilm.yearRealease;
console.log(myFavoriteFilm);
myFavoriteFilm.titleShow(); */

/* const str = "string";
console.log(str); //string
str[0] = "S";
console.log(str); //string, т.к. строку не изменить */

//1
/* const getIntRandom = (min, max) => {
  //min = Math.ceil(min); //округление в большую сторону
  // max = Math.floor(max); //округление в меньшуюсторону
  return Math.round(Math.random() * (max - min)) + min;
};
console.log(getIntRandom(1, 100)); */

//2
/* const isUpperCaseElement = (str, n) => {
  //let el = str[n];
  //console.log(el);
  if (n > str.length) {
    console.log("Неверные параметры");
  }
  if (str[n].toUpperCase() === str[n]) {
    return true;
  } else {
    return false;
  }
};
console.log(isUpperCaseElement("ПривеТ", 0)); */

//3
const customReplaceAll = (str, find, replaceStr) => {
  /*   while (str.includes(find)) {
    str = str.replace(find, replaceStr);
  }
  return str; */

  str = str.replace(find, replaceStr);

  if (str.includes(find)) {
    customReplaceAll(str, find, replaceStr);
  } else {
    return str;
  }
};
console.log(customReplaceAll("hi it's you, hi it's me", "hi", "HELLO")); //первый цикл работает, втораЯ версия undefined
