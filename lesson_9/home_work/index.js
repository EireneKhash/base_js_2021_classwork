//1
//Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
//Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
//И метод getFullName() - имя и фамиля работника.

/* class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getFullName() {
    return `Имя: ${this.name}, Фамилия: ${this.surname}`;
  }
  getSalary() {
    return `${this.getFullName()}, Зарплата работника ${
      this.days * this.rate
    } рублей`;
  }
}
const manager = new Worker("Ivan", "Petrov", 10, 31); */

// console.log(manager.name);
// console.log(manager.surname);
// console.log(manager.getFullName());
// console.log(manager.rate);
// console.log(manager.days);
// console.log(manager.getSalary());

//2
//Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания.
//Появляется новые свойство: workers - количество работников. И зарплата считается по другому:
//произведение (умножение) ставки rate на количество отработанных дней и на количество работников.

/* class Boss extends Worker {
  constructor(name, surname, rate, days, workers) {
    super(name, surname, rate, days);
    this.workers = workers;
  }
  getSalary() {
    return `${this.getFullName()}, Зарплата босса ${
      this.days * this.rate * this.workers
    } рублей`;
  }
}
const boss = new Boss("Ann", "Smirnova", 10, 31, 10); */

// console.log(boss.name);
// console.log(boss.surname);
// console.log(boss.getFullName());
// console.log(boss.rate);
// console.log(boss.days);
// console.log(boss.workers);
// console.log(boss.getSalary());

//3
//Модифицируйте класс Worker из предыдущей задачи следующим образом:
//сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.

/* class Worker {
  constructor(name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;
  }
  getName() {
    return this._name;
  }
  getSurname() {
    return this._surname;
  }
  getRate() {
    return this._rate;
  }
  getDays() {
    return this._days;
  }
  getFullName() {
    return `Имя: ${this._name}, Фамилия: ${this._surname}`;
  }
  getSalary() {
    return `Зарплата работника ${this._days * this._rate} рублей`;
  }
}
const worker = new Worker("Petr", "Petrov", 10, 31); */

// console.log(worker.getName());
// console.log(worker.getSurname());
// console.log(worker.getFullName());
// console.log(worker.getRate());
// console.log(worker.getDays());
// console.log(worker.getSalary());

//4
//Модифицируйте класс Worker из предыдущей задачи следующим образом:
//для свойства rate и для свойства days сделайте еще и методы-сеттеры.

/* class Worker {
  constructor(name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;
  }
  getName() {
    return this._name;
  }
  getSurname() {
    return this._surname;
  }
  getRate() {
    return this._rate;
  }
  setRate(rate) {
    return (this._rate = rate);
  }
  getDays() {
    return this._days;
  }
  setDays(days) {
    return (this._days = days);
  }
  getFullName() {
    return `Имя: ${this._name}, Фамилия: ${this._surname}`;
  }
  getSalary() {
    return `Зарплата работника ${this._days * this._rate} рублей`;
  }
}
const worker = new Worker("Petr", "Petrov", 10, 31); */

// console.log(worker.getName());
// console.log(worker.getSurname());
// console.log(worker.getFullName());
// console.log(worker.getRate());
// console.log(worker.getDays());
// console.log(worker.getSalary());
// //Теперь используем сеттер:
// worker.setRate(20); //увеличим ставку
// worker.setDays(10); //уменьшим дни
// console.log(worker.getSalary());

//5
//Реализуйте класс MyString, который будет иметь следующие методы:
//метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде,
//метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
//и метод ucWords(), который принимает строку и делает заглавной первую букву каждого слова этой строки.

/* class MyString {
  constructor(str) {
    this.str = str;
  }
  reverse() {
    return [...this.str].reverse().join("");
  }
  ucFirst() {
    return this.str[0].toUpperCase() + this.str.slice(1);
  }
  ucWords() {
    return this.str.replace(/(^|\s)\S/g, function (symb) {
      return symb.toUpperCase();
    });
  }
}

const string = new MyString("asdf asdf asdf");
console.log(string.reverse());
console.log(string.ucFirst());
console.log(string.ucWords()); */

//6
//Реализуйте класс Validator, который будет проверять строки.
//К примеру, у него будет метод isEmail параметром принимает строку и проверяет,
//является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false.
//Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена,
//метод isDate для проверки даты и метод isPhone для проверки телефона.

/* class Validator {
  constructor(str) {
    this.str = str;
  }
  isEmail() {
    if (/\S+@\S+\.\S+/.test(this.str)) {
      return true;
    } else {
      return false;
    }
  }
  isDomain() {
    if (/(|www\.)\S+/i.test(this.str)) {
      return true;
    } else {
      return false;
    }
  }
  isDate() {
    if (/\d{2}(.+)\d{2}\1\d{4}/.test(this.str)) {
      return true;
    } else {
      return false;
    }
  }
  isPhone() {
    if (/^(\+?7|8)?9\d{9}$/.test(this.str)) {
      return true;
    } else {
      return false;
    }
  }
}
const validator1 = new Validator("phphtml@mail.ru");
console.log(validator1.isEmail());
const validator2 = new Validator("phphtml.net");
console.log(validator2.isDomain());
const validator3 = new Validator("12.05.2020");
console.log(validator3.isDate());
const validator4 = new Validator("+79528176892");
console.log(validator4.isPhone()); */

//7
//Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока.
//Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз).
//Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента.
//Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
//Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

/* class User {
  constructor(name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.year = year;
  }
  getFullName() {
    return `Имя: ${this.name}, Фамилия: ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname, year);
  }
  getCourse() {
    let course = currentYear - this.year;
    if (course <= 5 && course > 0) {
      return `Текущий курс ${course}`;
    } else {
      return "Неверно введена дата поступления";
    }
  }
}
const currentYear = 2021;

const student1 = new Student("Andy", "Smith", 2019);
console.log(student1.getFullName());
console.log(student1.getCourse());
 */
