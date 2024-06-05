"use strict"

// let result;

// function getAge() {
//     let currenYear = 2024;
//     let year = 1997;
//     result = currenYear - year;
    
// }

// getAge()
// console.log(result);




// function getAge() {
//     let currentYear = 2024;
//     let year = 1997;
//     return currentYear - year
// }

// console.log(getAge());



// function getAge(year=0) {
//     let currentYear = 2024;
//     return currentYear - year
// }

// console.log(getAge(1997));
// console.log(getAge(1995));
// console.log(getAge(1982));
// console.log(getAge(2001));



// function getAge(year=0) {
//     let currentYear = 2024;
//     return currentYear - year
// }

// let x = 12 * 4 - (getAge(1994) - 1) 

// document.write(`Возраст пользователя ${getAge(1994)}`);
// console.log(x);






// let getAge = function(year=0) {
//     let currentYear = 2024;
//     return currentYear - year
// }

// console.log(getAge());




function getStrong(text) {
    return `<strong>${text}</strong>`
}

// console.log(getStrong('qqq'))




function printProduct(productName, count, price) {
    let totalPrice = count * price
    document.write(`
    <p>
    ${getStrong(productName)}, кол-во: ${getStrong(count)}, цена: ${getStrong(price)}, общая стоимость: ${getStrong(totalPrice)}
    </p>
    `)
    return totalPrice;
}

let total = 0;

total =total + printProduct(prompt("Введите товар"), Number(prompt("Введите кол-во", "")), Number(prompt("Введите стоимость", "")));
total =total + printProduct(prompt("Введите товар"), Number(prompt("Введите кол-во", "")), Number(prompt("Введите стоимость", "")));
total =total + printProduct(prompt("Введите товар"), Number(prompt("Введите кол-во", "")), Number(prompt("Введите стоимость", "")));

console.log(total);