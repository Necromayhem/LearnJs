// 1) Напишите функцию, которая принимает массив и число k и перемещает последние k элементов массива в начало.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 3;
function rearrangeArray(arr, k) {
  let removedElem = array.slice(-k)
  arr.splice(-k)
  arr.unshift(...removedElem)
  return arr
}
console.log(rearrangeArray(array, k)); // [7, 8, 9, 1, 2, 3, 4, 5, 6]


// 2) Напишите функцию, которая принимает массив чисел, удаляет все дубликаты, сортирует массив по возрастанию и возвращает его.

let array = [5, 3, 8, 3, 1, 1, 4, 7];

function uniqueSort(arr) {
  let uniq = arr.filter((num, index) => arr.indexOf(num) === index).sort((a, b) => a - b)
    return uniq
}

console.log(uniqueSort(array)); // [1, 3, 4, 5, 7, 8]

// 3) Напишите функцию, которая принимает массив строк и группирует их в объект по первой букве.

let array = ["apple", "banana", "cherry", "avocado", "blueberry", "carrot"];

function groupByFirstLetter(arr) {
  let group = {};

  arr.forEach((str) => {
    let first = str[0]
    if(group[first]){
        group[first].push(str)
    }else{
        group[first] = [str]
    }
  })
  
  return group
}

console.log(groupByFirstLetter(array));

// 4) Напишите функцию, которая принимает два массива одинаковой длины и возвращает один массив, в котором элементы чередуются из обоих массивов.

let array1 = [1, 2, 3];
let array2 = ["a", "b", "c"];

function alternateArrays(arr1, arr2) {
  let result = [];

  for(let i = 0; i < arr1.length; i++){
    result.push(arr1[i])
    result.push(arr2[i])
  }
  return result
}

console.log(alternateArrays(array1, array2)); // [1, "a", 2, "b", 3, "c"]


// 5) Напишите функцию, которая принимает массив чисел и возвращает объект с суммами четных и нечетных чисел.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumEvenOdd(arr) {
  let result = {
    even: 0,
    odd: 0
  }

  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        result.even += arr[i]
    } else{
        result.odd += arr[i]
    }
  }

  return result
}

console.log(sumEvenOdd(array)); // { even: 20, odd: 25 }


// 6) Напишите функцию, которая принимает массив и возвращает длину самой длинной последовательности подряд идущих одинаковых элементов.

let array = [1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5];

function longestSequence(arr) {
  let current = 1;
  let longest = 1;

  for(let i = 1; i < arr.length; i++){
    if(arr[i] === arr[i - 1]){
        current++
        if(current > longest){
            longest = current
        }
    } else{
        current = 1;
    }
  }
  return longest
}

console.log(longestSequence(array)); // 4