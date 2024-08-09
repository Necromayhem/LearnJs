// Задача 1:
// Создайте объект map и добавьте в него несколько элементов (ключ-значение). Затем выведите все ключи и значения этого объекта.


const map = new Map();

const obj = {};

map .set(true, "boolean")
    .set(25, "number")
    .set(obj, "object")
    .set('строка', "string")

// console.log(map);


// Задача 2:
// Создайте set и добавьте в него несколько значений. Посчитайте количество элементов в set и проверьте, содержит ли set определенное значение.


const set = new Set();

set.add("Alex");
set.add("Danil");
set.add("Egor");
set.add("Alex");
set.add("Alex");
set.add("Egor");
set.add("Egor");
set.add("Alex");

// console.log(set); // {'Alex', 'Danil', 'Egor'}
// console.log(set.size); // 3
// console.log(set.has('Egor')); // true


// Задача 3:
// Объедините два Set в один новый Set и выведите его элементы.


let set1 = new Set(
    [1, 1, 1, 3, 4, 4, 5, 6, 8, 8]
)
// console.log(set1);

let set2 = new Set(
    [1, 2, 2, 2, 3, 4, 6, 7, 7, 8, 9]
)

let unitedSet = new Set([...set1, ...set2].sort())

// console.log(unitedSet); // { 1, 2, 3, 4, 5, 6, 7, 8, 9 }









