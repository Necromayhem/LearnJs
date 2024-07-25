

// 1) Допустим, у нас есть массив arr.

// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.


// function unique(arr){
//   return new Set(arr)  
// } // {'Hare', 'Krishna', ':-O'}


// function unique(arr) {
//     return Array.from(new Set(arr));
//   } // ['Hare', 'Krishna', ':-O']


// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];

//   console.log(unique(values));





// 2) Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.



// function aclean(arr){
//     const uniqWords = [];

//     const uniqKeys = new Set(arr);

//     arr.forEach(word => {
//         const key = word.toLowerCase().split('').sort().join('');
//         if(!uniqKeys.has(key)){
//             uniqKeys.add(key);
//             uniqWords.push(word)
//         }
//     });

//     return uniqWords;
// }


// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr)); // ['nap', 'teachers', 'ear']






// 3) Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

//Но это не выходит:


// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");



// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// console.log(keys);

// keys.push("more");

// console.log(keys);

