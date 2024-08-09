// Map


const obj = {
    name: 'Alex',
    afe: 27,
    job: "free"
} // object

const entries = [
    ['name', "Alex"],
    ['age', 27],
    ['job', "free"],
] // array


// console.log(Object.entries(obj)); // obj в arr
// console.log(Object.fromEntries(entries)); // arr в obj



const map = new Map(entries);

// console.log(map.get('name')); // Alex
// console.log(obj.name); // Alex

map
    .set('newField', 42)
    .set(obj, 'Value of object')
    .set(NaN, 'NaN ?')

// console.log(map.get(obj)); // Value of object
// console.log(map.get(NaN)); // NaN ?

// console.log(map.delete('job')); // true
// console.log(map.has('job')); // false
// console.log(map.size); // 5
// console.log(map.clear()); // undefined
// console.log(map.size);+ // 0


//==========================================



for(let entry of map.entries()){
    console.log(entry);
} // for...of возвращает значения в виде массивов

for(let [key, value] of map){
    console.log(key, value);
} // возвращает значения без скобок, метод entries по умолчанию

for(let val of map.values()){
    console.log(val);
} // возвращает значения

for(let key of map.keys()){
    console.log(key);
} // возвращает ключи


map.forEach((val, key, map) => {
    console.log(val, key,);
}) // одно действие для каждого элемента, нельзя задать условия



let index = 0
for (const [key, value] of map) {
    console.log([key, value]);
    index++
    if(index === 3){
        break;
    }
} // в цикле for...of можно задать условия

//==============================================================


const array = Array.from(map) // создание массива из карты
// const array = [...map] // создание массива из карты

// console.log(array);

const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj);

//=======================================================================


const users = [
    {name: 'Elena', city: 'Moscow', age: 25},
    {name: 'Alex', city: 'New York', age: 30},
    {name: 'Irina', city: 'Paris', age: 28},
];

// записать время, когда юзер посещал сайт

const visits = new Map();

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))


function lastVisit(user){
    return visits.get(user)
}

// console.log(lastVisit(users[2]));




// Set


const set = new Set([1, 2, 3, 4, 4, 4, 3, 3, 5, 5, 6]);

// console.log(set); // { 1, 2, 3, 4, 5, 6 }
// в Set все значения уникальны

set.add(10).add(10).add(20).add(20).add(30)

// console.log(set); // { 1, 2, 3, 4, 5, 6, 10, 20, 30 }

// console.log(set.has(30)); // true есть ли в set 30
// console.log(set.has(14)); // false есть в set 14
// console.log(set.size); // 9 размер set
// console.log(set.delete(10)); // true удалён ли элемент
// console.log(set.has(10)); // false есть ли в set элемент
// console.log(set.size); // 8 размер set
// console.log(set.clear()); // undefined

console.log(set.values()); //[Set Iterator] { 1, 2, 3, 4, 5, 6, 10, 20, 30 }
console.log(set.keys()); //  [Set Iterator] { 1, 2, 3, 4, 5, 6, 10, 20, 30 }
// реализовано для обратной совместимости в Map
// в методе set.entries() будет элемент из массивов, где ключ и значение дублируются. Это нужно, чтобы из Set делать Map

const mapped = new Map([...set].map((value, index) => [index, value]));
mapped.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

for(let key of set){
    console.log(key);
}

//===================================================================


// Написать функцию, которая возвращает уникальные значения из массива

let arrExam = [1,1,1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6]

function uniqValues(array){
    // return [...new Set(array)]
    return Array.from(new Set(array))
}

// console.log(uniqValues(arrExam)); // [1, 2, 3, 4, 5, 6]


//========================================================================













