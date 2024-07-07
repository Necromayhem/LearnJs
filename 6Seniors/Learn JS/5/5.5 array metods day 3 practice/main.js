"use strict"

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// function camelize(str){
//     let step1 = str.split("")
//     let newString = ""
//     for(let i = 0; i < step1.length; i++){
//        if(step1[i] === "-"){
//         let findElement = step1[i + 1];
//         upperElement = step1
//        }
//     }
    
// }

function camelize(str){
    let step1 = str.split("");
    let newString = "";
    for(let i = 0; i < step1.length; i++){
        if(step1[i] === "-" && i < step1.length - 1){
            let upperAfter = step1[i + 1].toUpperCase();
            newString += upperAfter;
            i++;
        } else {
            newString += step1[i]
        }
    }
    return newString
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
