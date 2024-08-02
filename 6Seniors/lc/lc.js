// 1) Сумма элементов массива

const array = [1, 2, 3, 4, 5, 6];

let sum = array.reduce((acc, num) => acc + num, 0)

console.log(sum); // 21



// 2) Максимальный или минимальный элемент массива

let max = array.sort((a, b) => b - a)
console.log(max[0]); // 6

let min = array.sort((a, b) => a - b)
console.log(min[0]); // 1

// Через цикл

let maxCycle = array[0];

for (let i = 0; i < array.length; i++){
    if(array[i] > maxCycle){
        maxCycle = array[i]
    }
}

console.log(maxCycle); // 6


let minCycle = array[0];

for (let i = 0; i < array.length; i++){
    if(array[i] < minCycle){
        minCycle = array[i]
    }
}

console.log(minCycle); // 1

// Метод деструктуризации

console.log(
    Math.max(...array)
); // 6

console.log(
    Math.min(...array)
); // 1


// 3) Сортировка массива

const users = [
    {
        name: 'John Doe',
        age: 20
    },
    {
        name: 'Alex Moren',
        age: 30
    },
    {
        name: 'Jane Doe',
        age: 25
    }
]

// users.sort((a, b) => a.age - b.age)

users.sort((a, b) => {
    return a.name.localeCompare(b.name)
})

console.log(users);



// 4) Развернуть массив без reverse

let reversed = [];

for(let i = array.length - 1; i >= 0; i--){
    reversed.push(array[i])
}

console.log(reversed);

let reversedMap = array.map((elem, index, arr) => arr[arr.length - index - 1])

console.log(reversedMap);

console.log(
    [...array].map(array.pop, array)
);



// 5) Удалить false значения

let arrFal = [7, "correct", 0, false, 9, NaN, ""]

let arrCorr = []

arrFal.forEach((elem) => {
    if(elem){
        arrCorr.push(elem);
    }
});

console.log(arrCorr);

