

// let map = new Map();

// map.set('1', 'str1');
// map.set(1, 'num1');
// map.set(true, 'bool1')

// console.log(map.get(1)); // num1
// console.log(map.get('1')); // str1
// console.log(map.get(true)); // bool1

// console.log(map.size); // 3


// let alex = { name: "Alex" };

// // давайте сохраним количество посещений для каждого пользователя
// let visitsCountMap = new Map();

// // объект alex - это ключ для значения в объекте Map
// visitsCountMap.set(alex, 123);

// console.log(visitsCountMap.get(alex)); // 123






// let john = { name: "John" };
// let ben = { name: "Ben" };


// let visitsCountObj = {}; // попробуем использовать объект

// visitsCountObj[ben] = 234; // пробуем использовать объект ben в качестве ключа
// visitsCountObj[john] = 123; // пробуем использовать объект john в качестве ключа, при этом объект ben будет замещён


// console.log(visitsCountObj); // {[object Object]: 123}


// let phone = new Map([
//     ['гейфон', 75000],
//     ['нокла', 25890],
//     ['сяоми', 32999],
// ]);

// // перебор по ключам(бренд телефона)

// for(let model of phone.keys()){
//     console.log(model);
// } // гейфон, нокла, сяоми

// // перебор по значению(цена за телефон)

// for(let price of phone.values()){
//     console.log(price);
// } // 75000, 25890, 32999

// // перебор по элементам в формате [ключ, значение]

// for(let entry of phone){
//     console.log(entry);
// } // 


// встроенная функция forEach

// phone.forEach((value, key, map) => {
//     console.log((`телефон: ${key}, стоимость: ${value}`));  
// })






// массив пар [ключ, значение]

// let map = new Map([
//     ['1','str1'],
//     [1,'num1'],
//     [true,'bool1'],
// ])

// console.log(map.get(1)); // num1
// console.log(map.get('1')); // str1
// console.log(map.get(true)); // bool1




// Object.entries: Map из Object


// let obj = {
//     name: "Alex",
//     age: 27,
//     city: 'London',
// }

// let map = new Map(Object.entries(obj))

// // console.log(map.get('name')); // Alex

// for (let info of map) {
//     console.log(info);
// };



// Object.fromEntries: Object из Map



// let phones = Object.fromEntries([
//     ['nokia', 22000],
//     ['xiaomi', 45789],
//     ['lg', 16590],
// ]);

// console.log(phones); // {nokia: 22000, xiaomi: 45789, lg: 16590}


// let phones = new Map();

// phones.set('nokia', 22000);
// phones.set('xiaomi', 45789);
// phones.set('lg', 16590);


// // let newPhones = Object.fromEntries(phones.entries()); // создание обычного объекта

// let newPhones = Object.fromEntries(phones); // убрать .entries()

// console.log(newPhones); // {nokia: 22000, xiaomi: 45789, lg: 16590}






// Set
// Объект set - особый вид коллекции: "множество" значений(без ключей), где каждое значение может появляться только один раз


// let set = new Set();

// let alex = { name: "Alex"};
// let oleg = { name: "Oleg"};
// let anna = { name: "Anna"};

// set.add(alex);
// set.add(oleg);
// set.add(anna);
// set.add(alex);
// set.add(oleg);
// set.add(anna);
// set.add(alex);

// console.log(set.size);

// for(let user of set){
//     console.log(user);
// }


// set.forEach((value, valueAgain, set) => {
//     console.log(`Имя гостя: ${value.name}`);
//   });




























