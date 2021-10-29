//1 Преобразовать строку в массив слов
//Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

/* const str = "Каждый охотник желает знать";
const stringToarray = (str) => {
  let arrNew = str.split([" "]);
  return arrNew;
};
let arr = stringToarray(str);
console.log(arr); */

//2 Удаление указанного количества символов из строки
//Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

/* const str = "Каждый охотник желает знать";
const delete_characters = (str, length) => {
  let subStr = str.substr(0, length);
  return subStr;
};
console.log(delete_characters(str, 8)); */

//3 Вставить тире между словами строки
//Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

/* const str = "HTML JavaScript PHP";
const insert_dash = (str) => {
  let strNew = str.toUpperCase();
  //strNew = strNew.replaceAll(" ", "-"); не поддерживается
  strNew = strNew.split(" ").join("-");
  return strNew;
};
console.log(insert_dash(str)); */

//4 Сделать первую букву строки прописной
//Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

/* const str = "string not starting with capital";
const cursive_letter = (str) => {
  if (!str) return str;
  let strNew;
  return (strNew = str[0].toUpperCase() + str.slice(1));
};
console.log(cursive_letter(str)); */

//5 Первая буква каждого слова заглавная
//Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

/* const str = "каждый охотник желает знать";
const capitalize = (str) => {
  return str.replace(
    /(^|\s)\S/g, //нахождение первой буквы слова
    (symb) => {
      return symb.toUpperCase(); //замена буквы
    }
  );
};
console.log(capitalize(str)); */

//6 Смена регистра символов строки
//Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

/* const str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";
const change_register = (str) => {
  return str.replace(/[а-яА-Я]/g, //все буквы кириллицы
    (symb) => {
    if (symb === symb.toUpperCase()) {
      return symb.toLowerCase();
    } else {
      return symb.toUpperCase();
    }
  });
};
console.log(change_register(str));*/

//7 Удалить все не буквенно-цифровые символы
//Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

/* const str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";
remove_char = (str) => {
  return str.replace(/[^\w\s]|_/g, " ").replace(/\s+/g, " "); //нахождение символов и замена на пробел (для латиницы)
};
console.log(remove_char(str)); */

//8 Нулевое заполнение строки
//Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.

/* zeros = (num, len, sign) => {
  let res = sign + +num * 10 ** len;
  return res;
};
console.log(zeros(4, 7, "+")); */

//9 Сравнение строк без учёта регистра
//Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

/* comparison = (str1, str2) => {
  if (str1.toUpperCase() === str2.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};
console.log(comparison("HelLo", "hellO")); */

//10 Поиск без учета регистра
//Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.

/* insensitive_search = (str1, str2) => {
  if (str1.toLowerCase().includes(str2.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};
console.log(insensitive_search("Fred", "fR")); */

//11 ВерблюжийРегистр (CamelCase)
//Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase,
//при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

/* const str = "hEllo woRld";
initCap = (str) => {
  let strNew = str
    .replace(/\w/g, (symb) => {
      return symb.toLowerCase();
    })
    .replace(/(^|\s)\S/g, (symb) => {
      return symb.toUpperCase();
    })
    .replace(/\s/g, "");
  return strNew.replace(strNew[0], strNew[0].toLowerCase());
};
console.log(initCap(str)); */

//12 Змеиный_регистр (snake_case)
//Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case,
//при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

/* const str = "helloWorld";
initSnake = (str) => {
  let strNew = str
    .replace(/[A-Z]/g, (symb) => {
      return "_" + symb.toLowerCase();
    })
    .replace(/\w/g, (symb) => {
      return symb.toLowerCase();
    });
  return strNew;
};
console.log(initSnake(str));*/

//13 Повторить строку n раз
//Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

/* repeatStr = (str, n) => {
  return str.repeat(n);
};
console.log(repeatStr("hi", 4)); */

//14 Получить имя файла
//Напишите функцию path(pathname), которая возвращает имя файла
//(подстрока после последнего символа "\" ) из полного пути к файлу.

/* const pathname = "/home/user/dir/file.txt";

path = (pathname) => {
  let pos = pathname.lastIndexOf("/");
  return pathname.slice(pos + 1);
};
console.log(path(pathname));*/

//15 Заканчивается ли строка символами другой строки
//Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

/* const str = "Каждый охотник желает знать";
const str1 = "скрипт";
const str2 = "знать";

String.prototype.endsWith = (substring) => {
  if (str.match(/(\S+)$/g) == substring) {
    return true;
  } else {
    return false;
  }
};
console.log(str.endsWith(str1));
console.log(str.endsWith(str2)); */ //работает при нестрогом равенстве

//16 Подстрока до/после указанного символа
//Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки,
//расположенную после или до указанного символа char в зависимости от параметра pos.

/* const str = "Астрономия — Наука о небесных телах";
const pos = "после";

getSubstr = (str, char, pos) => {
  let substr;
  if (pos === "до" && str.match(char)) {
    let posEnd = str.indexOf(char);
    substr = str.slice(0, posEnd);
  } else if (pos === "после" && str.match(char)) {
    let posStart = str.indexOf(char);
    substr = str.slice(posStart);
  }
  return substr;
};
console.log(getSubstr(str, "у", pos));*/

//17 Вставить подстроку в указанную позицию строки
//Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str.
//По умолчанию подстрока вставляется в начало строки.

/* const str = "Астрономия — Наука о небесных телах";
const substr = "777";
insert = (str, substr, pos) => {
  let strNew = str.split(str[pos]).join(substr);
  console.log(strNew);
};
insert(str, substr, 3); */

//18 Ограничить длину строки
//Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n.
//Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

/* const str = "Астрономия — Наука о небесных телах";
limitStr = (str, n, symb) => {
  let strNew = " ";
  if (symb == undefined) {
    return (strNew = str.substr(0, n) + "...");
  } else {
    return (strNew = str.substr(0, n) + symb);
  }
};
console.log(limitStr(str, 10, "=>")); */

//19 Количество вхождений символа в строке
//Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

/* const stringsearch = "а";
const str = "Астрономия это наука о небесных объектах";
count = (str, stringsearch) => {
  let n = str.split(stringsearch).length - 1; //разбивка на элементы массива в позиции stringsearch, элементов будет больше на 1
  return n;
};
console.log(count(str, stringsearch)); */

//21 Удалить лишние пробелы из строки
//Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

/* const str = "    Max is a good      boy     ";
strip = (str) => {
  return str.trim().replace(/\s+/g, " ");
};
console.log(strip(str)); */

//23 Удалить лишние слова из строки
//Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

/* const str = "Сила тяжести приложена к центру масс тела";
cutString = (str, n) => {
  let arr = str.split(" ");
  let strNew = "";
  for (i = 0; i < n; i += 1) {
    strNew += arr[i] + " ";
  }
  return strNew;
};
console.log(cutString(str, 3)); */

//24 Найти слово в строке
//Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

/* const str = "abc def ghi jkl mno pqr stu";
findWord = (word, str) => {
  let strNew = " " + str + " ";
  if (strNew.includes(" " + word + " ")) {
    return true;
  } else {
    return false;
  }
};
console.log(findWord("de", str)); */
