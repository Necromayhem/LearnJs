// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.




function camelize(str){
    step1 = str.split("-");
    step2 = step1.map(function (word, index){
        if(word[0]){
            return word[0].toUpperCase() + word.slice(1)
        }else{return word}
    })

    return step2.join("")
}

console.log(camelize("list-style-image"));
console.log(camelize("background-color"));
console.log(camelize("-webkit-transition"));