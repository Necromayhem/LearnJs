"use strict"

// ------ ДЗ

// Создайте функцию, которая принимает строку как параметр и возвращает ее длину.
// getLength('Привет') // 6
// getLength('') // 0
// getLength() // 0

// function getLength(word='') {
//     let length = word.length
//     return length
// }


// getLength('Привет') // 6
// getLength('') // 0
// getLength() // 0

// console.log(getLength('Привет'),getLength(''), getLength());



// Создайте функцию, которая принимает массив чисел как параметр и возвращает их среднее значение. (среднее арифметическое)
// average([1,2,3,4,5]) // 3

// function getAverage(array) {
//     let result = 0;
//     for(let i = 0; i < array.length; i++){
//         result += array[i];
//     }
//     return result / array.length
        
    
// }


// console.log(getAverage([1,2,3,4,5]));






// Создайте функцию, которая принимает массив строк как параметр и возвращает новый массив, содержащий только строки, длина которых больше 5 символов.
// getStrings(['привет', 'а', 'б', 'Мир'], 3) // ['привет', 'Мир']
// getStrings(['привет', 'а', 'б', 'Мир'], 4) // ['привет']
// getStrings(['привет', 'а', 'б', 'Мир']) // []


// function getStrings(array) {
//     let result = []
//     for(let i = 0; i < array.length; i++) {
//         if(array[i].length > 5){
//             result.push(array[i])
//         }
//     }
//     return result
// }

// console.log(getStrings(['привет', 'а', 'б', 'Мир'], 3)) 
// console.log(getStrings(['привет', 'а', 'б', 'Мирный'], 4))





// Создайте функцию, которая принимает массив чисел как параметр и возвращает новый массив, содержащий только уникальные значения.
// getUniq([1,2,1,3,2,5]) // [3,5]
// getUniq([1,2,3,4,4]) // [1,2,3]

// function getUniq(array) {
//     let result = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i])
//     }
// }



function getFilms(title = "Все фильмы"){
    return {
     filmTitle: title,
     films: getFilmsArray(),
    };
 }
    
 

function getFilmsArray() {
    const films = [];

    AddNewFilm({name: "Хроники Нарнии"}, 0)
    AddNewFilm({name: "Человек-паук"}, 1)
    AddNewFilm({name: "Что-то ещё"}, 2)
    AddNewFilm({name: "без индекса"},)


    function AddNewFilm(film, index) {
        if(index === undefined){
            console.log("Фильм не будет добавлен, тк нет индекса");
            return
        }

        films[index] = film;    
    }

    return films
}



const myFilms = getFilms();

console.log(myFilms);








