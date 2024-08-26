// Многие встроенный функции JS поддерживают произвольное количество аргументов

// Например:

// Math.max(arg1, arg2, ..., argN) – вычисляет максимальное число из переданных.
// Object.assign(dest, src1, ..., srcN) – копирует свойства из исходных объектов src1..N в целевой объект dest.
// …и так далее.

// Остаточные параметры

//Вызывать функцию можно с любым количеством аргументов независимо от того, как она была определена.

function sum(a, b) {
    return a + b;
  }
  
//   alert( sum(1, 2, 3, 4, 5) );// 3

// Остаточные аргументы могут быть обозначены через ... .
// Буквально это значит: "собери оставшиеся параметры и положи их в массив"

function sumAll(...args){
    let sum = 0;

    for(let arg of args){
        sum += arg
    }

    return sum
}

// console.log(sumAll(1)); // 1
// console.log(sumAll(1, 2)); // 3
// console.log(sumAll(1, 2, 3));// 6

// Мы можем положить первые несколько параметров в переменные, а остальные - собрать в массив.

// В примере ниже первые два аргумента функции станут именем и фамилией, а третий и последующие превратятся в массив titles.

function showName(firstName, lastName, ...titles){
    console.log(firstName + ' ' + lastName); // Юлий Цезарь

    // Оставшиеся параметры пойдут в массив
    // titles = ["Консул", "Император"]
    console.log(titles[0]); // Консул
    console.log(titles[1]); // Император
    console.log(titles.length); 2
}

// showName("Юлий", "Цезарь", "Консул", "Император")


// Остаточные параметры должны располагаться в конце
// Остаточные параметры собирают все остальные аргументы, поэтому бессмысленно писать что-либо после них. Это вызовет ошибку:

// function f(arg1, ...rest, arg2) { // arg2 после ...rest ?!
//     // Ошибка
// }

// ...rest должен всегда быть последним.


// Переменная "arguments"

// Все аргументы функции находятся в псевдомассиве arguments под своими порядковыми номерами.
// Например:

function showName(){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);

    // Объект arguments можно перебирать
    // // for (let arg of arguments) alert(arg);
}

// Вывод: 2, Юлий, Цезарь
// showName("Юлий", "Цезарь");

// Вывод: 1, Илья, undefined (второго аргумента нет)spread
// showName("Илья");


const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск'];
const citiesEurope = ['Берлин', 'Прага', 'Париж'];

const citiesRussiaWithPopulation = {
    Moscow: 20,
    SaintPetersburg: 8,
    Kazan: 5,
    Novosibirsk: 3
};
const citiesEuropeWithPopulation = {
    Berlin: 10,
    Praga: 3,
    Paris: 2
};

// Spread 

// console.log(...citiesRussia); // разворачивает массив и вывод просто строки

const AllCities = ['Бостон', ...citiesEurope, ...citiesRussia, 'Киев'];
// console.log(AllCities); 
// ['Бостон', 'Берлин', 'Прага', 'Париж', 'Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск', 'Киев']


// console.log(...citiesRussiaWithPopulation); // Ошибка
// console.log({...citiesRussiaWithPopulation}); // не Ошибка
// некуда складывать, нужно обернуть в объект

// let obj = {...citiesRussiaWithPopulation}
// console.log(obj);

// console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation}); 


/// Practice

const numbers = [5, 37, 42, 17]

// console.log(Math.max(5, 37, 42, 17)); // 42

// console.log(Math.max(...numbers)); // 42


/// Rest

function sum(a, b, ...rest){
    console.log(rest);
    return a + b + rest.reduce((acc, i) => acc + i, 0)
}

const num = [1, 2, 3, 4, 5, 6, 7, 8];

// Spread!!
// console.log(sum(...num));


// const a = num[0];
// const b = num[1];

// console.log(a, b);


// let [a, b] = [num[0], num[1]]
let [a, b, ...other] = num
// console.log(a, b, other);

const person = {
    name: 'Max',
    age: 20,
    city: 'Moscow',
    country: 'Russia'
}

let {name: n, age: ag, ...address} = person
console.log(n, ag, address); 






















