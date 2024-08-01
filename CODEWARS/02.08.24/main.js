// 1) Целью этого ката является сравнение каждой пары целых чисел из двух массивов и возврат нового массива больших чисел.

// Примечание: Оба массива имеют одинаковые размеры.

// Пример:

let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]

function getLargerNumbers(a, b) {
    let arr1 = a;
    let arr2 = b;

    let numbers = [];

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] > arr2[i]){
            numbers.push(arr1[i])
        }else{
            numbers.push(arr2[i])
        }
    }

    return numbers

}

// console.log(getLargerNumbers(arr1, arr2)); // [ 23, 64, 53, 17, 88 ]



// 2) Напишите решение для очистки массивов. Оно может полностью существовать в функции squeakyClean или содержать несколько вспомогательных функций.
// Ваша функция squeakyClean должна принимать входной массив значений и возвращать новый массив, в котором удалены все пустые строки, 0, null и undefined.
// Пример: var originalArray = ['click1','click2',null,'','','submitForm'];
//Решение, которое вы напишете, должно вернуть следующее: 
// var cleanedArray = ['click1', 'click2','submitForm'] 

function squeakyClean(arr) {
    let current = arr;
    let clean = [];

    for(let i = 0; i < current.length; i++){
        if(current[i] !== '' && current[i] !== null && current[i] !== 0 && current[i] !== undefined){
            clean.push(current[i])
        }
    }
    return clean
}

// console.log(squeakyClean(['click1','click2',null,'','','submitForm']));