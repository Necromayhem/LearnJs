

let obj1 = {
    name:"Alex",
    age:"27",
};

let decriptor = Object.getOwnPropertyDescriptor(obj1, "name");
// console.log(decriptor);
// {value: 'Alex', writable: true, enumerable: true, configurable: true}
// writable: если true можно изменить, иначе только чтение
// enumerable: если true возможность перебора в цикле, иначе циклы игнорируют
// configurable: если true возможность удалить ,а эти атрибуты можно изменять, иначе этого делать нельзя.


//Вспоминаю, как удалять свойство из объекта
// delete obj1.age
// console.log(obj1);


// Чтобы изменить флаги, мы можем использовать метод Object.defineProperty.

// obj, propertyName
// Объект и его свойство, для которого нужно применить дескриптор.
// descriptor
// Применяемый дескриптор.

// let user = {};

// Object.defineProperty(user, "name", {
//     value: "John"
// });

// let decriptor2 = Object.getOwnPropertyDescriptor(user, "name");
// console.log(JSON.stringify(decriptor2, null, 2));
// {
//     "value": "John",
//     "writable": false,
//     "enumerable": false,
//     "configurable": false
//   }

// Сделаем свойство user.name доступным только для чтения

// let user = {
//     name: "Lena"
// };

// Object.defineProperty(user, "name", {
//     writable: false
// });

// user.name = "qqq"
// console.log(user);


let user = {};

Object.defineProperty(user, "name", {
    value: "Alex",
    configurable: true // нужно установить configurable в true
});

// Теперь вы можете получить дескриптор
let descriptor3 = Object.getOwnPropertyDescriptor(user, "name");
// console.log(JSON.stringify(descriptor3, null, 2));
// {
//     "value": "Alex",
//     "writable": false,
//     "enumerable": false,
//     "configurable": true
//   }

// Изменяем дескриптор
Object.defineProperty(user, "name", {
    value: "Alex",
    writable: true,
    enumerable: true,
    configurable: true
});

// Проверяем новый дескриптор
descriptor3 = Object.getOwnPropertyDescriptor(user, "name");
// console.log(JSON.stringify(descriptor3, null, 2));
// {
//     "value": "Alex",
//     "writable": true,
//     "enumerable": true,
//     "configurable": true
//   }



// Неперечислимое свойство 

let user2 = {
    name: "ALex",
    toString(){
        return this.name;
    }
};
// По умолчанию оба свойства выведутся:
// for(let key in user2) console.log(key); // name, toString
// console.log(Object.keys(user2)); // ['name', 'toString']
// Если мы этого не хотим, можно установить для свойства enumerable:false.
// Тогда оно перестанет появляться в цикле for...in аналогично встроенному toString:

Object.defineProperty(user2, "toString", {
    enumerable: false
});
// for(let key in user2) console.log(key); // name
// console.log(Object.keys(user2)); // ['name']


// Метод Object.defineProperties


let person = {}

Object.defineProperties(person, {
    name: {value: "Alex", writable: false, enumerable: true},
    age: {value: 25, writable: true, enumerable: false, configurable: true},
});

console.log(JSON.stringify(Object.getOwnPropertyDescriptors(person), null , 2));
// {
//     "name": {
//       "value": "Alex",
//       "writable": false,
//       "enumerable": true,
//       "configurable": false
//     },
//     "age": {
//       "value": 25,
//       "writable": true,
//       "enumerable": false,
//       "configurable": true
//     }
//   }

// клонирование дескрипторов
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(person));

console.log(JSON.stringify(Object.getOwnPropertyDescriptors(clone), null , 2));

// {
//     "name": {
//       "value": "Alex",
//       "writable": false,
//       "enumerable": true,
//       "configurable": false
//     },
//     "age": {
//       "value": 25,
//       "writable": true,
//       "enumerable": false,
//       "configurable": true
//     }
//   }










