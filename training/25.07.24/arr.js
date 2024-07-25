

// 1) Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';




// function camelize(str){
//     let words = str.split('-');

//     let camelCaseWords = words.map((word, index) => {
//         if(index === 0){
//             return word
//         }
//         return word[0].toUpperCase() + word.slice(1)
//     })

//     return camelCaseWords.join('');
// }

// console.log(camelize("-webkit-transition"));















