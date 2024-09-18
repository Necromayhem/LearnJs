// 'use strict'

// Closures v2

// =================================================
// === Как функция обращается к переменным? пример 1
// =================================================

let a = 10;

function f1(){
    console.log('(global) a = '+a);
}

// f1(1); // (global) a = 10
// в функции не обозначена переменная a, поэтому функция обращается к родительской области видимости и находит там переменную.

a = 99;
// f1(); // (global) a = 99


// =================================================
// === Как функция обращается к переменным? пример 2
// =================================================

function f2(){
    a = 33; // т.к. переменная не объявлена, то она перезаписывается
    console.log('(local) a = '+a);
}

// f2(); // (global) a = 33
// f1(); // (global) a = 33



// =================================================
// === Иногда переменные нужны снаружи
// =================================================


function createCounter(){
    let count = 0;
    return function(){
        count++
        console.log(count);
    }
    
}


// let z = createCounter()
// z()
// z()
// z()
// z()



// function createUser(){
//     let user = {
//         name: null,
//         surname: null,
//         age: null,
//         country: null,
//         work: null
//     };

//     return{
//         createName(newName){
//             user.name = newName;
//         },
//         createSurname(newSurname){
//             user.surname = newSurname;
//         },
//         createAge(newAge){
//             user.age = newAge;
//         },
//         createCountry(newCountry){
//             user.country = newCountry;
//         },
//         createWork(newWork){
//             user.work = newWork;
//         },
//         getUser(){
//             return user;
//         }
//     }

// }

// let user1 = createUser();
// user1.createName('Аня');
// user1.createSurname('Иванова');
// user1.createAge(30);
// user1.createCountry('Россия');
// user1.createWork('Программист');

// // получение и вывод объекта
// console.log(user1.getUser());


// =================================================
// === Задача на попрошайку, с рекурсией
// =================================================

function randomInteger(min, max){
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 0.5)
    return Math.round(rand)
}

function createBeggar(){
    let s = 0;
    return function beggar(){
        s += randomInteger(0, 100)
        console.log(s);
        if(s >= 250) return;
        beggar();
    }
}


// let begg1 = createBeggar();
// begg1();



  










