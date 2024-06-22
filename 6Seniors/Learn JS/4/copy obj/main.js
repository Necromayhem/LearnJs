"use strict"

// console.log({} === {});   // false, разные объекты - разные ссылки


// Поверхностное копирование

// const sourceObject = {
//     title: "Spiky",
//     age: 30,
//     permission: {
//         canEdit: true,
//         canView: true,
//     }
// }


// const firstCopy = { ...sourceObject };
// console.log(sourceObject === firstCopy);
// console.log(sourceObject.permission === firstCopy.permission);


// firstCopy.permission.canEdit = false;
// console.log(sourceObject.permission.canEdit);

// firstCopy.permission.age = 100000;
// console.log(sourceObject.permission.age);





// const firstCopy = Object.assign({}, sourceObject)
// console.log(firstCopy);

// console.log(sourceObject === firstCopy);
// console.log(sourceObject.permission === firstCopy.permission);

// firstCopy.permission.age = 100000;
// console.log(sourceObject.permission.age);



// Глубокое копирование

// Через json, сериализация/десериализация(убирает все ключи со значением undefined, функции и костыли нужны с Date)


// const dog = {
//     name: "Spike",
//     age: 5,
//     birthDate : new Date('2018-01-01'),
//     permission: {
//         canFly: false,
//         canRun: true,
//     },
//     nullProperty: null,
//     undefinedProperty: undefined,   
// }


// // const jsonData = JSON.stringify(dog);   //сериализация, получаем строку из объекта
// // const anotherDog = JSON.parse(jsonData)

// const anotherDog = JSON.parse(JSON.stringify(dog));
// console.log(anotherDog); 




//  Lodash  (копирует функции по ссылке)

// const _ = require('lodash');

// const dog = {
//     name: "Spike",
//     age: 5,
//     birthDate : new Date('2018-01-01'),
//     permission: {
//         canFly: false,
//         canRun: true,
//     },
//     nullProperty: null,
//     undefinedProperty: undefined,   
// }

// const anotherDog = _.cloneDeep(dog);



// StructuredClone  (функции не могут быть склонированы)



const dog = {
    name: "Spike",
    age: 5,
    birthDate : new Date('2018-01-01'),
    permission: {
        canFly: false,
        canRun: true,
    },
    nullProperty: null,
    undefinedProperty: undefined,   
}

const anotherDog = structuredClone(dog);
console.log(anotherDog);









