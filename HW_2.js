/*ДОМАШКА:
    я ожидаю получить js файл, в котором описаны функции. я подключаю себе или запускаю в консоли и пользуюсь ими
итак, функции:
1. принимает на вход строку, возвращает перевернутую строку
пример запуска функции:
    reverseStr('Hello'); //вернет  'olleH'*/

console.log('---First Task---');
var first = 'Hello';
console.log(first);
function forReverse(smth) {
    console.log(smth.split('').reverse().join(''));
}
console.log(forReverse(first));

/*2. принимает на вход массив чисел, вывести в консоль квадрат каждого элемента массива. тремя способами. for, for..in, for..of*/
console.log('---Second Task---');
var second = [1, 2, 3, 4, 5];
console.log(second);

console.log('-FOR-');
function forArray(smth) {
    for (var i = 0; i < smth.length; i++) {
        console.log(smth[i] * smth[i]);
    }
}
console.log(forArray(second));


console.log('-FOR...IN-');
function forInArray(smth) {
    for (var i in smth) {
        console.log(smth[i] * smth[i]);
    }
}
console.log(forInArray(second));


console.log('-FOR...OF-');
function forOfArray(smth) {
    for (var i of smth) {
        console.log(i * i);
    }
}
console.log(forOfArray(second));

/*3. принимает на вход массив строк. возвращает перевернутый массив перевернутых строк
Пример:
    reverseArr(['lol', '123', 'usd']); // вернет ['dsu', '321', 'lol']*/
console.log('---Third Task---');
var third = ['say', 'hello', 'world'];
console.log(third);

function reverseArray(smth) {
    var somearray = [];
    for (var i in smth) {
        // smth[i] = smth[i].split('').reverse().join('');
        somearray[i] = smth[i].split('').reverse().join('');
    }
    console.log(somearray.reverse());
}
console.log(reverseArray(third));

/*4. калькулятор. первым аргументом идет действие (add subtract multiply divide). вторым и третьим - числа.
Возвращает результат действия над двумя числами примеры:
calculate('add', 10, 5); //15
calculate('subtract', 12, 3) //9
calculate('multiply', 2, 7) //14
calculate('divide', 6, 2) //3*/

console.log('---Fourth Task---');
var ten = 10;
var five = 5;
console.log(ten, five);

function calculate(deistvie,number1,number2) {
    if(deistvie == 'add') {
        console.log('add');
        console.log(number1 + number2);
    } else if (deistvie == 'subtract'){
        console.log('subtract');
        console.log(number1 - number2);
    } else if (deistvie == 'multiply'){
        console.log('multiply');
        console.log(number1 * number2);
    } else if (deistvie == 'divide'){
        console.log('divide');
        console.log(number1 / number2);
    } else {
        console.log('oops');
    }
}
console.log(calculate('add',ten, five));
console.log(calculate('subtract',ten, five));
console.log(calculate('multiply',ten, five));
console.log(calculate('divide',ten, five));
console.log(calculate('smth',ten, five));

/*5. на вход - массив чисел
на выход - сумма элементов массива*/

console.log('---Fifth Task---');
var fifth = [1, 2, 3, 4, 5];
console.log(fifth);


function summary(smth) {
    var sumArray = 0;
    for (var i of smth) {
        sumArray += i;
    }
    console.log(sumArray);
}

console.log(summary(fifth));


/*6. на вход - массив строк
на выход - сумма длин строк
Пример:
    getSumLengths(['ab', 'abc', 'lol']) //8  */

console.log('---Sixth Task---');
var sixth = ['say', 'hello', 'world'];
console.log(sixth);

function sumLength(smth) {
    var sumLetter = 0;
    for (var i of smth) {
        sumLetter += i.length;
    }
    console.log(sumLetter);
}
console.log(sumLength(sixth));

/*7. на вход - массив, в котором находятся массивы чисел. вывести каждый элемент на экран
пример массива на вход - [ [1,2,3], [1, 4], [10, 5, 9] ]

даю с запасом, если что. во 2м задании нужно 3 способа, чтоб точно попробовали, в остальных - каким удобней*/


console.log('---Seventh Task---');
var seventh = [ [1,2,3], [1, 4], [10, 5, 9] ];
console.log(seventh);

function showItem(smth) {
    for (var i of smth) {
        for (var el of i){
            console.log(el);
        }
    }
}
console.log(showItem(seventh));