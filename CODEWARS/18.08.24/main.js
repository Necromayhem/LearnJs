// 1) Написать функцию, которая принимает число и считает кол-во символов в нём(решить через рекурсию)

function sumOfDigits(num){
    if(num < 10) return 1;

    return 1 + sumOfDigits(Math.floor(num / 10))
}

console.log(sumOfDigits(100)); // 3


// 2) Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

//цикл

function sumToIt(n){
    sum = 0;

    for(let i = 0; i < n; i++){
        sum += (n - i)
    }
    return sum;
}

// alert(sumToIt(100)); // 5050



// через рекурсию

let count = 0;
let sum = 0;

function sumToRec(n) { 
    if(n === 0) return n;

    return n + sumToRec(n - 1)
 }

// alert( sumToRec(100) ); // 5050