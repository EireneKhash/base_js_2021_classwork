//Копирование объектов

/* const obj1 = { a: "Hello" };
const obj11 = { b: "Hello, ALex" }; //если ключи совпадают, будет замена первого объекта, если не совпадают - во втором будет 2 ключа
const obj2 = Object.assign({}, obj1, obj11);
console.log(obj1, obj2);
obj1.a = "Goodbye";
console.log(obj1, obj2); */ //изменился ключ только в копии

//глубокое копирование, в объектах ключи - др объекты

/* const obj1 = {
  sayHello: "Hello",
  user: { name: "Alex", age: { date: "28", year: "1994", month: "04" } },
};
//const obj2 = Object.assign({}, obj1);
//console.log(JSON.stringify(obj1));//строка в новой обл памяти
const jsonString = JSON.stringify(obj1);
const obj2 = JSON.parse(jsonString);
//const obj2 = JSON.parse(JSON.stringify(obj1)); //объект сначала в строку-изменяется, потом обратно парсит в объект

console.log(obj1.user, obj2.user);
obj1.user.age.year = "2021";
console.log(obj1.user, obj2.user); */ //изменение в 1 и 2 объектах
//lodash, deep clone

//spread оператор расширяющий

/* const arr1 = [1, 2, 3, 4];
const arr2 = [7, 8, 9];
const arr3 = [...arr1, 5, 6, ...arr2]; //копия с помощью spread оператора, индексы переопределились
console.log(arr3); */

/* const obj1 = { name: "Alex", age: "25" };
//const obj2 = { ...obj1, name: "Max" }; //при совпадении ключей остается последнее значение
const obj2 = { ...obj1, key: "user1" }; //до ключ, не будут стерты предыдущие значения по ключам
console.log(obj1, obj2); */
/* obj1.name = "Ivan";
console.log(obj1, obj2); */

//rest оператор остаточный, неограниченное количество параметров

/* const getSum = (type, ...args) => {
  if (type === "sum") {
    //сумма
    console.log(Array.isArray(args), "sum");
  } else {
    //вычитание
    console.log(args);
  }
  //console.log(a, b);
  //console.log(args);
};
getSum("sum", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0); */ //массив параметров
//функц, где 1 арг действие (сумма, вычитание), для ост - массив

//перебор массива - аналог перебора в цикле со счётчиком i
/* const arr = [1, 2, 3, 4];
for (let el of arr) {
  console.log(el);//выводит значения массива, для объекта будет ошибка
} */

/* const obj = { a: 1, b: 2 };
for (let el in obj) {
  //console.log(el); //выводит ключи объекта или индексы массива
  console.log(obj[el]); //выводит значения
} */

//Практика
//1 Создайте объект и скопируйте данный объект с помощью: Object.assign() и spread оператора.
//Изменить любое свойство в копии объекта, и проверить не изменился ли исходный.

/* const user1 = { name: "Irene", age: "26", location: "Kirov" };
const user2 = Object.assign({}, user1);
const user3 = { ...user1 };
console.log(user1, user2, user3);
user2.location = "NN";
user3.name = "Ira";
console.log(user1, user2, user3); */

//2 Написать функцию  которая будет принимать n-ое количество аргументов,
//в качестве результата функция будет возвращать сумму всех четных элементов. Для решения использовать цикл for (... of …).

/* const getSumEven = (...args) => {
  let sum = 0;
  for (let el of args) {
    if (el % 2 === 0) {
      sum += el;
    }
  }
  console.log(sum);
};
getSumEven(1, 2, 3, 4, 5); */ //для чётных значений

//3 Написать функцию  которая будет принимать два массива, и в качестве результата будет возвращать только
//те значения которые есть и в первом и во втором массиве.

/* const getEquals = (arr1, arr2) => {
  let result = [];
  for (el1 of arr1) {
    for (el2 of arr2) {
      if (el1 === el2 && !result.includes(el1)) {
        result.push(el1);
      }
    }
  }
  console.log(result);
};
const arr1 = [1, 2, 3, 4, -5, 4, -7];
const arr2 = [3, 4, 5, 6, 1, -7, -7];
getEquals(arr1, arr2); */

/* const getEqualsVal = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  console.log(result);
};
const arr1 = [1, 2, 3, 4, 4, -5, -7];
const arr2 = [3, 4, 5, 6, 1, -7];
getEqualsVal(arr1, arr2);*/

/* const getEqualsVal = (arr1, arr2) => {
  console.log(arr1.filter((el) => arr2.includes(el)));
};
const arr1 = [1, 2, 3, 4, 4, -5, -7];
const arr2 = [3, 4, 5, 6, 1, -7];
getEqualsVal(arr1, arr2); */

//Функции

//console.log(global);//глобальный объект
/* var name = "Alex";
function example() {
  console.log(this);
}
example();
console.log(name); */

/* const user = {
  name: "Alex",
  age: "25",
  getName: function () {
    //метод
    console.log(this.name); //вызов контекста
  },
};
user.getName(); */

// function getName() {
//   console.log(this.name); //this - значение, что слева от метода, чтобы не прописывать для каждого ключа/объекта
// }

// function setName(newName) {
//   this.name = newName;
//   console.log(this.name);
// }

// const user = {
//   name: "Alex",
//   age: "25",
//   getUserName: getName,
//   setUserName: setName,
// };

// const admin = {
//   name: "Max",
//   age: "45",
//   getAdminName: getName,
//   setAdminName: setName,
// };

// admin.getAdminName();
// user.getUserName();
// console.log(user);
// user.setUserName("Ira");
// user.getUserName();
// console.log(user);

// function example() {
//   console.log(this);
// }
// const testObject = {
//   testMethod: example,
// };
// testObject.testMethod(); //{ testMethod: [Function: example] } this=testObject

/* function startFight() {
  return this.strength * this.agility;
} */

/* const startFight = () => {
  return this.strength * this.agility;
}; */ //NaN NaN, т.к. значение берётся из глобального объекта

/* const hero = {
  name: "Jon",
  strength: 20,
  agility: 10,
  health: 100,
  //   fight: function () {
  //     return hero.strength * hero.agility;
  //   },
  fight: startFight,
  sayName: function () {
    return this.name;
  },
};

const dracula = {
  name: "Vlad",
  strength: 50,
  agility: 7,
  health: 1000,
  //   fight: function () {
  //     return dracula.strength * dracula.agility;
  //   },
  fight: startFight,
};

console.log(hero.fight(), dracula.fight());

if (hero.fight() > dracula.fight()) {
  console.log("Герой победил! УРА!");
} else {
  console.log("Провал, вы погибли");
} */

//Практика
//1 Создать объект который будет описывать любой населенный пункт (на ваш выбор). Объект должен содержать свойства описывающие: название и численность.
//Так же объект должен содержать два метода: первый должен возвращать название города, а второй должен возвращать численность.

/* const town = {
  nameTown: "Kirov",
  population: 521091,
  getTownName: function () {
    return this.nameTown;
  },
  getPopulation: function () {
    return this.population;
  },
  setNewValue: function (key, newValue) {
    this[key] = newValue;
  },
};
console.log(town);
town.setNewValue("nameTown", "Paris");
town.setNewValue("population", "13 ml");
console.log(town); */

//дз 3
/* const arr = [0, 1, 2, 3, 4, 5, 6, 7];
sumSeven = (numbers) => {
  return numbers
    .map((el) => `(${el}:${7 - el})`)
    .filter((el, i, arr) => i <= arr.length / 2);
};
console.log(sumSeven(arr)); */

//Методы call, apply, bind

// function sayFullName(firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}`; //свойство фраза не определено
// }

// /* console.log(sayFullName("Alex", "Shirokov"));
// console.log(sayFullName.call({ phrase: "Hello" }, "Ivan", "Smirnov")); */ //вызвали функцию с новыми параметрами

// let boundFullName = sayFullName
//   .bind({ phrase: "Bye!" }, "Max", "Petrov")
//   .bind({ phrase: "Hello!" }, "Kate", "Petrova"); //перепривязка не производится

// let sayHelloKate = sayFullName.bind({ phrase: "Hello!" }, "Kate");
// //let bound2 = sayFullName.bind({ phrase: "Hello!" }, "Kate");
// console.log(boundFullName); //[Function: bound sayFullName]
// console.log(boundFullName()); //Bye! Max Petrov
// console.log(bound2("Petrova")); //Hello! Kate Petrova
// console.log(sayHelloKate("Smirnova"));

//Практика

/* const town = {
  nameTown: "Kirov",
  population: "0.52 ml",
  getTownName: function () {
    return this.nameTown;
  },
  getPopulation: function () {
    return this.population;
  },
  setNewValue: function (key, newValue) {
    this[key] = newValue;
  },
}; */
// console.log(town);
// //town.setNewValue("nameTown", "Paris");
// town.setNewValue("population", "13 ml");
// console.log(town);

//const town2 = { nameTown: "Moscow", population: "11,92 ml" };
// console.log(town.getTownName.call(town2));
// console.log(town.getPopulation.apply(town2));

/* let bound = town.setNewValue.bind(town2, "nameTown", "NN");
bound();
console.log(town2);

let bound2 = town.setNewValue.bind(town2);
bound2("population", "1 ml");
console.log(town2);

let bound3 = town.setNewValue.bind(town2);
bound3("country", "Russia"); //создал новый ключ "страна"
console.log(town2); */

/* function test(b) {
  const a = 0;
  console.log(b);
}
//test();
const bound = test.bind({ a: 10 }, 8); //нет контекста, поэтому ничего не изменится/ c this получим 10
bound(); */

//
//Замыкания

// let a = 0;
// console.log(a);
// const test = () => {
//   a = 10;
// };
// test();
// console.log(a);

/* function getFullName() {
  const firstName = "Alex";
  function getSecondName(secondName) {
    return `${firstName} ${secondName}`;
  }
  return getSecondName; //ссылка, а не сама функция getSecondName()
}
const clouser = getFullName();
console.log(clouser("Petrov")); */

//Практика

/* const getSquare = (a) => {
  return (b) => a * b; //анонимная стрелочная функция, берёт в из getSquare
};
const squareWithTen = getSquare(10); //получаем функцию от b, a замкнуто на 10
console.log(squareWithTen(5));
console.log(squareWithTen(10));

const squareWithFour = getSquare(4);
console.log(squareWithFour(3));
console.log(squareWithFour(21)); */

/* const getVolume = (a) => {
  //const a = 10;
  return (b, c) => a * b * c;
};
//const volumeWithTen = getVolume();//если а уже внутри
const volumeWithTen = getVolume(10);
console.log(volumeWithTen(2, 3)); */
