//Прототипы и классы

/* const people = {
  getName: function () {
    return this.name;
  },
};
const user = {
  name: "Alex",
  __proto__: people, //скрытое свойство
};

const admin = {
  name: "Vasya",
  __proto__: user,
};

//console.log(people.getName()); //нет такого свойства
console.log(user.getName()); //this=user
console.log(admin.getName()); */

/* let animal = {
  jumps: "Прыжок!",
};
let rabbit = {
  __proto__: animal,
  jumps: "Заяц прыгнул!",
}; */

// const arr = [122];
// console.log(arr.__proto__); //Object(0) []

// const obj = {};
// console.log(obj.__proto__); //[Object: null prototype] {}

//
//Функции-конструкторы
/* function CreateUser() {
  console.log("user create");
}
const user = new CreateUser(); //создан новый объект
console.log(user);
//new CreateUser(); */

// function CreateUser(name, age) {
//   this.userName = name;
//   this.userAge = age;
/*   this.__proto__ = {
    ...CreateUser.prototype,
    sayHi2: function () {
      return "Strage sayHi";
    },//какая-то дичь 
  };*/
/*  this.sayHi = function () {
    return `Hello! My name is ${this.userName}`;
  }; */
//}

/* CreateUser.prototype.sayHi = function () {
  return `Hello! My name is ${this.userName}`;
}; //CreateUser.prototype пустой объект, который является прототипом для каждого CreateUser

let userOne = new CreateUser("Al", 25);
let userTwo = new CreateUser("Ann", 40);
console.log(userOne);
console.log(userTwo);
console.log(userOne.sayHi()); */

//Практика
/* function CreateGreetingCard(from, to) {
  this.fromWho = from;
  this.toWho = to;
}
CreateGreetingCard.prototype.show = function () {
  console.log(`${this.fromWho} отправил открытку ${this.toWho}`);
};
let card1 = new CreateGreetingCard("Elen", "Max");
card1.show();

CreateGreetingCard.prototype.changeFromWho = function (newFrom) {
  this.fromWho = newFrom;
};
card1.changeFromWho("Kate");
card1.show(); */

//
//Классы
/* class Parent {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    return `Привет, моё имя ${this.name}`;
  }
}
const firstParent = new Parent("Max");
// console.log(firstParent);
// console.log(firstParent.sayHi());
class Child extends Parent {
  //lastName = lastName;
  constructor(name, lastName) {
    super(name);
    this.lastName = lastName;
  }
  sayName() {
    console.log(`Внутренний метод`);
  }
  sayFullName() {
    //return `Moё полное имя ${this.lastName} ${this.name}`;
    const nameString = `${super.sayName()} ${this.lastName}`;
    return nameString;
  }
  get lastName() {
    return this.lastNane;
  }
  set lastName(newValue) {
    this.newValue = newValue;
  }
  setLastName(newValue) {
    this.newValue = newValue;
  }
  getLastName() {
    return this.lastName;
  }
}

const firstChild = new Child("Ivan", "Petrov");
console.log(firstChild);
/* console.log(firstChild.sayFullName());
//console.log(firstChild.sayName());
firstChild.sayName(); */
/* console.log(firstChild.getLastName());
console.log(firstChild.lastName); */

/* class People {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return `Имя: ${this.name}, Фамилия: ${this.surname}`;
  }
}

const firstPeople = new People("Ivan", "Petrov");
console.log(firstPeople.getFullName());

class Worker extends People {
  constructor(name, surname, rate, day) {
    super(name, surname);
    this.rate = rate;
    this.day = day;
  }
  getSalary() {
    return `${this.getFullName()}, Зарплата ${this.day * this.rate} рублей`;
  }
}

let manager = new Worker("Ivan", "Petrov", 100, 7);
let administrator = new Worker("Ann", "Smirnova", 200, 5);

console.log(manager.getSalary());
console.log(administrator.getSalary()); */
