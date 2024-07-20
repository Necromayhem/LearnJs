"use strict"

// let num1 = 1_000_000_000;
// let num2 = 1e9;

// console.log(num1 === num2); // true


// let mcs = 0.000001;
// let ms = 1e-6;

// console.log(mcs === ms); // true


// // Число 255

// let a = 0xff; // Шестнадцатеричная система
// let b = 0xFF; // Шестнадцатеричная система
// let c = 0b11111111; // двоичная (бинарная)
// let d = 0o377; // восьмеричная

// console.log(a === b); // true
// console.log(a === c); // true
// console.log(a === d); // true



// toString(base)

// let num = 255;

// console.log(num.toString(16)); //  ff
// console.log(num.toString(8)); //  377 
// console.log(num.toString(2)); //  11111111


// console.log(255..toString(16)); //  ff
// console.log(255..toString(8)); //  377 
// console.log(255..toString(2)); //  11111111



// Окрунление

// Math.floor - в меньшую сторону

// let num = 3.1;

// console.log(Math.floor(num)); // 3

// // Math.ceil - в большую сторону

// console.log(Math.ceil(num)); // 4

// Math.round - до ближайшего целого

// let a = 3.1;
// let b = 3.6
// let c = -1.1;

// console.log(Math.round(a)); // 3
// console.log(Math.round(b)); // 4
// console.log(Math.round(c)); // -1


// Math.trunc - удаление дробной части

// let a = 3.1;
// let b = 3.64545
// let c = -1.12343;

// console.log(Math.trunc(a)); // 3
// console.log(Math.trunc(b)); // 3
// console.log(Math.trunc(c)); // -1



// Если нужно округлить до n знаков после запятой

// let num = 1.23456;

// console.log(Math.round(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23


// Метод  toFixed(n) 

// let num1 = 12.34;

// console.log(num1.toFixed(1)); // 12.3


// let num2 = 12.36;

// console.log(num2.toFixed(1)); // 12.4


// let num3 = 12.5;

// console.log(num3.toFixed(5)); // 12.50000



// let sum = 0.1 + 0.2;

// console.log(sum); // 0.30000000000000004

// console.log(+sum.toFixed(2)); // 0.3




// console.log(isNaN('str')); // true
// console.log(isNaN(NaN)); // true


// console.log(isFinite(15)); // true
// console.log(isFinite("15")); // true
// console.log(isFinite("str")); // false
// console.log(isFinite(Infinity)); // false


// Методы Number.isNaN и Number.isFinite – это более «строгие» версии функций isNaN и isFinite. Они не преобразуют аргумент в число, а наоборот – первым делом проверяют, является ли аргумент числом (принадлежит ли он к типу number).


// console.log(Number.isNaN(15)); // false
// console.log(Number.isNaN("15")); // false
// console.log(Number.isNaN("str")); // false
// console.log(Number.isNaN(Infinity)) //  false

// console.log(Number.isFinite(15)); // true
// console.log(Number.isFinite("15")); // false
// console.log(Number.isFinite("str")); // false
// console.log(Number.isFinite(Infinity)) // false


// parseInt и parseFloat

// console.log(parseInt('100px')); // 100
// console.log(parseFloat('12.5em')); // 12.5


// console.log( parseInt('12.3') ); // 12, вернётся только целая часть
// console.log( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке


// console.log( parseInt('0xff', 16) ); // 255
// console.log( parseInt('ff', 16) ); // 255, без 0x тоже работает

// console.log( parseInt('2n9c', 36) ); // 123456



// Строки

// let single = 'single';
// let double = "duble";
// let backticks = `backticks`;



// console.log(`${single} text`);
// console.log(`${1 + 4} text`);

// let anyText = `string 1
// string 1
// string 2
// `;

// console.log(anyText);


// let anyText = '\'Hello\' world'

// console.log(anyText);


// let anyText = 'Hello world'

// console.log(anyText.length);
// console.log(anyText[0], anyText[6]); // H w
// console.log(anyText.charAt(0), anyText.charAt(6)); // H w


// anyText[1] = 'i' // Error
// console.log(anyText[0].toLocaleUpperCase() + anyText.slice(1)); // Hello world


let anyText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit!' 

console.log(anyText.indexOf('amet')); //22 - позиция первого совпадения
console.log(anyText.includes('amet'));// true
console.log(anyText.indexOf('amet3'));  // -1 
console.log(anyText.slice(0, 7)); // не включая 7









































