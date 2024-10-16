"use strict"

// Флаги свойств

// writable - если true, свойство можно изменить.
// enumerable - если true, свойсвто перечисляется в циклах, иначе циклы его игнорируют.
// configurable - если true, свойство можно удалить, а эти аргументы можно изменять, иначе этого делать нельзя.


//метод Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве.

// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

// obj - объект, из которого получаем информацию
// propertyName - имя свойства.

// Возвращаемое значение - это объект, так называемый "дескриптор свойства": он содержит значение свойства и все его флаги.

// Например:

let user = {
    name: "Alex"
};

let decriptor = Object.getOwnPropertyDescriptor(user, "name")
// console.log(JSON.stringify(decriptor, null, 2));

// {
//     "value": "Alex",
//     "writable": true,
//     "enumerable": true,
//     "configurable": true
//   }


// Чтобы изменить флаги можно использовать Object.defineProperty

// Object.defineProperty(obj, propertyName, descriptor)

// obj, propertyName - объект и свойство для которых нужно применить дескриптор

// descriptor - применяемый дескриптор

// Если свойство существует, defineProperty обновит его флаги. В противном случае метод создаёт новое свойство с указанным значением и флагами; если какой-либо флаг не указан явно, ему присваивается значение false.

let user2 = {};


Object.defineProperty(user2, "name", {
    value: "Ivan"
});

let descriptor2 = Object.getOwnPropertyDescriptor(user2, "name");
// console.log(JSON.stringify(descriptor2, null, 2));
// {
//     "value": "Ivan",
//     "writable": false,
//     "enumerable": false,
//     "configurable": false
//   }



// ТОЛЬКО ДЛЯ ЧТЕНИЯ


// Сделаем свойство user.name доступным только для чтения.
// Для этого изменим флаг writable:

let onlyReading = {
    name: "Max"
};

Object.defineProperty(onlyReading, "name", {
    writable: false
});

// onlyReading.name = "random_name" // TypeError: Cannot assign to read only property 'name' of object

// без use strict ошибки не будут показываться

// пример, где свойство создано с "нуля"

let onlyReading2 = {  };

Object.defineProperty(onlyReading2, "name", {
    value: "Egor",
    enumerable: true,
    configurable: true
});

// console.log(onlyReading2); // {name: 'Egor'}
// onlyReading2.name = "Misha" // TypeError: Cannot assign to read only property 'name' of object



// НЕПЕРЕЧИСЛЯЕМОЕ СВОЙСТВО

// Добавим собственный метод toString к объекту user.

// Встроенный метод toString в объектах - неперечислимый, его не видно в цикле for...in . Но если мы напишем собственный метод toString, цикл for...in будет выводить его по умолчанию:

let user3 = {
    name: "Vova",
    toString(){
        return this.name;
    }
};

// По умолчанию оба свойства выведутся
for(let key in user3){
    // console.log(key);
}; // name toString

// console.log(Object.keys(user3)); ['name', 'toString']

// Если мы не хотим вывода toString, то можно установить для свойства enumerable:false. Тогда оно перестанет появляться в цикле аналогично встроенному toString.

Object.defineProperty(user3, "toString", {
    enumerable: false
});

// for(let key in user3) console.log(key); // name
// console.log(Object.keys(user3)); ['name']


// НЕКОНФИГУРИРУЕМОЕ СВОЙСТВО

// Флаг неконфигурируемого свойства(configurable:false) иногда предустановлен для некоторых встроенных объектов.

// НЕКОНФИГУРИРУЕМОЕ СВОЙСТВО НЕ МОЖЕТ БЫТЬ УДАЛЕНО, А ЕГО АТРИБУТЫ НЕ МОГУТ БЫТЬ ИЗМЕНЕНЫ.

// Например, свойство Math.PI - только для чтения, неперечислимое  и неконфигурируемое.

let descriptor4 = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(JSON.stringify(descriptor4, null, 2));
// {
//     "value": 3.141592653589793,
//     "writable": false,
//     "enumerable": false,
//     "configurable": false
//   }
// Math.PI = 2 // TypeError: Cannot assign to read only property



// Метод Object.defineProperties

// позволяет определить множество свойств сразу
// Object.defineProperties(obj, descriptors)

// Object.defineProperties(obj, {
// prop1: descriptors1,
// prop2: descriptors2
// ...
// })


// Например

// Object.defineProperties(user, {
//     name: {value: "Alex", writable: false},
//     surname: {value: "Petrov", enumerable: false}
// })



// Object.getOwnPropertyDescriptors

// Чтобы получить все дескрипторы свойств сразу, можно воспользоваться методом Object.getOwnPropertyDescriptors(obj)

// Вместе с Object.defineProperties этот метод можно использовать для клонирования объекта вместе с его флагами:


// let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

// Обычно при клонировании объекта мы используем присваивание, чтобы скопировать его свойства:

// for (let key in user) {
//   clone[key] = user[key]
// }

// …Но это не копирует флаги. Так что если нам нужен клон «получше», предпочтительнее использовать Object.defineProperties.

// Другое отличие в том, что for..in игнорирует символьные и неперечислимые свойства, а Object.getOwnPropertyDescriptors возвращает дескрипторы всех свойств.


let user4 = {
    name: "Alex",
    age: 27
}

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user4));

// console.log(clone); // {name: 'Alex', age: 27}
// console.log(JSON.stringify(Object.getOwnPropertyDescriptors(clone, "name"), null, 2));
// {
//     "name": {
//       "value": "Alex",
//       "writable": true,
//       "enumerable": true,
//       "configurable": true
//     },
//     "age": {
//       "value": 27,
//       "writable": true,
//       "enumerable": true,
//       "configurable": true
//     }
//   }








