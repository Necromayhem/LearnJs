// 1)Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';



// function camelize(str){
//     step1 = str.split('-')
//     step2 = step1.map(function (word, index){
//         if(index == 0){
//             return word
//         } else {
//             step3 = word[0].toUpperCase() + word.slice(1)
//             return step3
//         } 
        
//     })
//     return step2.join('')
// }




// console.log(camelize("background-color"));
// console.log(camelize("-webkit-transition"));
// console.log(camelize("list-style-image"));




// 2) Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)



// function filterRange(arr, a, b){
//     let result = arr.filter(function (elem){
//         if(elem >= a && elem <= b){
//             return true
//         } else {
//             return false
//         }
//     })
//     return result
// }


// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // 3,1 (совпадающие значения)

// console.log( arr ); // 5,3,8,1 (без изменений)







// 3) Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]


// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b){
    
//     for(let i = 0; i < arr.length; i++){
//         let value = arr[i];

//         if(value < a || value > b){
//             arr.splice(i, 1);
//             i--; 
            
//         }
//     }
    
// }



// filterRangeInPlace(arr, 1, 4);
// console.log(arr);



// 4) Сорторовка по убыванию
// let arr = [5, 2, 1, -10, 8];

// // ... ваш код для сортировки по убыванию

// alert( arr ); // 8, 5, 2, 1, -10


// let arr = [5, 2, 1, -10, 8];

// function rev(a, b){
//     return b - a
// }

// // arr.sort((a, b) => b - a);

// console.log(arr.sort(rev));


// 5) У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)



// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr){
//     return arr.slice().sort()
// }

// let sorted = copySorted(arr);

// console.log(sorted); // ['CSS', 'HTML', 'JavaScript']
// console.log(arr); // ['HTML', 'JavaScript', 'CSS']



// 6) Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

// Пример использования:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.



