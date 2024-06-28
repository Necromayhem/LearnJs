"use strict"

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

function camelize(str) {
    let step1 = str.split('-')
    step2 = step1.map(function(index, word){
        if(index == 0){
           let a = word.charAt(0).toUpperCase() 
           return a
            
        }
        
    })
    return step2
} 


console.log(camelize('-webkit-transition'));