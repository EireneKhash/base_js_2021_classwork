console.log("кот" > "код");
//true, т.к. при поочерёдном сравнении к=к, о=о, т>д согласно Unicode

console.log("2" + 2 * "2");
//"24", т.к. знак * преобразует строку "2" в число (2*2=4), затем строка складывается с числом, получаем строку

console.log(undefined == null);
//true, т.к. по правилу языка JS существует нестрогое равенство undefined и null

console.log(undefined != null);
//false, т.к. по правилу языка JS существует нестрогое равенство undefined и null

console.log(null == 0);
//false, т.к по правилу языка JS null может быть равен только null или undefined при нестрогом равенстве

console.log(2 > "3");
//false, т.к при сравнении строка "3" преобразуется в число, а 2 < 3

console.log(null - false + true);
//1, т.к. при математической операции произошло преобразование null в 0, false в 0, true в 1, т.е. 0-0+1=1

console.log(1 / "l");
//NaN, т.к. "l" буква и не преобразуется в число, деление на строку даёт значение NaN

console.log("2" * "3");
//6, знак * преобразует строки в числа, 2*3=6

console.log(4 + 5 + "O");
//"9O", т.к. строка "О" (буква) не преобразуется в число, т.е 5+4=9, 9+"О"="9О"

console.log("l" + 4 + 5);
//"l45", т.к. сначала происходит сложение строки и числа ("l4"), затем сложение полученной строки с числом, строка не преобразуется в число (содержит буквы)

console.log("4" - 2);
//2, знак вычитания преобразует строку "4" в число, 4-2=2

console.log("4" - "4x");
//NaN, т.к. происходит вычитание строки из числа ("4" преобразуется в 4 число)

console.log("23" == 23);
//true, т.к. нестрогое равенство

console.log(null == false);
//false, т.к по правилу языка JS null может быть равен только null или undefined при нестрогом равенстве

console.log("-4" / 0 + 1);
//-infinity, деление на 0 преобразует строку в число, что дает минус бесконечность, а при прибавление единицы дают остается минус бесконечность

console.log(null + 1);
//1, т.к. при математической операции произошло преобразование null в 0, 0+1=1

console.log(undefined + null);
//NaN, т.к. undefined преобразуется в NaN, а null в 0

console.log(1 === "1");
//false, т.к при строгом равенстве число не равно строке (не совпадают типы)

console.log("2" > 10);
//false, т.к при сравнении строка "2" преобразуется в число, а 2 < 10

console.log(NaN == undefined);
//false, т.к по правилу языка JS undefined может быть равен только null или undefined при нестрогом равенстве
