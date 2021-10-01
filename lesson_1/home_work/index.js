console.log("Hello world");

let userNickName = "Sasha";
const userBirthDay = "23.09.1996";
let userAge = 25;
let isAdmin = false;
let userPhoneNumber = null;
let userGender = undefined;

let user = {
  FirstName: "Иван",
  SecondName: "Иванович",
  LastsName: "Иванов",
};

const userBirthPlace = {
  country: "Russia",
  city: "Tver",
};

var userResidence = {
  country: "Russia",
  city: "Moskow",
};

console.log(
  userNickName,
  "BirthDay:",
  userBirthDay,
  "Age:",
  userAge,
  "Admin",
  isAdmin,
  "Phone Number",
  userPhoneNumber,
  "Gender",
  userGender
);
console.log("Full name", user.FirstName, user.SecondName, user.LastsName);
console.log("Full name", user);
console.log("Birth Place", userBirthPlace);
console.log("Residence", userResidence);

console.log(typeof userNickName);
console.log(typeof userBirthDay);
console.log(typeof userAge);
console.log(typeof isAdmin);
console.log(typeof userPhoneNumber);
console.log(typeof userGender);
console.log(typeof user);
console.log(typeof userResidence);
console.log(typeof userBirthPlace);

console.log(typeof userNickName);
console.log(typeof userBirthDay);
console.log(typeof userAge);
console.log(typeof isAdmin);
console.log(typeof userPhoneNumber);
console.log(typeof userGender);
console.log(typeof user);
console.log(typeof userResidence);
console.log(typeof userBirthPlace);

//userBirthDay="01.01.1988";
//console.log("BirthDay:",userBirthDay); ошибка

user = {
  FirstName: "Олег",
  SecondName: "Олегович",
  LastsName: "Петров",
};
console.log("Full name", user);

//userBirthPlace={
//country:"USA",
//city:"NY"
//};
//console.log("Birth Place",userBirthPlace); ошибка

userResidence = {
  country: "France",
  city: "Paris",
};
console.log("Residence", userResidence);
