// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';



// function camelize(str) {
//     return str.split('-') .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join(''); 
//   }

// console.log(camelize("-webkit-transition"));



// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)


// function filterRange(arr, a, b){
//     let newArr = []
//     arr.map(function(item){
//         if (item >= a && item <= b){
//             newArr.push(item)
//         }
//     }
//   )
//   return newArr;
// }

// let arr = [2, 2, 3, 1, 5, 8];

// let filtered = filterRange(arr, 1, 4)
// console.log(filtered);
// console.log(arr);



// function filterRangeInPlace(arr, a, b){
//     for (let i = 0; i < arr.length; i++){
//         let del = arr[i]; 

//         if(del < a || del > b){
//             arr.splice(i, 1);
//             i--;
//         }
//     }
    


// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);






// let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

// alert( arr ); // 8, 5, 2, 1, -10


// function numeric(a, b){
//     return b - a
// }

// let arr = [5, 2, 1, -10, 8];
// console.log(arr.sort(numeric)); // [8, 5, 2, 1, -10]








// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)


// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr){
//     let step1 = arr.concat()
//     let step2 = step1.sort()
//     return step2
// }

// let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);

// sorted[1] = 123;
// console.log(sorted);
// console.log(arr);




// function Calculator(){
//     this.calculate = function(str){
//         let [a, op, b] = str.split(" ");
//         let num1 = parseFloat(a);
//         let num2 = parseFloat(b);


//         switch(op){
//             case "+":
//                 return num1 + num2;
//             case "-":
//                 return num1 - num2;
//             default:
//                 throw new Error("Неподдерживаемый оператор")
//         }
//     }

    
// }


// let calc = new Calculator();
// console.log(calc.calculate("1 + 2"));
// console.log(calc.calculate("5 - 7"));
