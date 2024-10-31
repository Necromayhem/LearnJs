// Повтор главы 7

// Флаги свойств

// writable - если true, свойство можно изменить, иначе оно только для чтения.
// enamerable - если true, свойство перечиляется в циклах, в противном случае циклы его игнорируют.
// configurable - если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

// метод Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве.

// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

// obj - объект, из которого получаем информацию.
// propertyName - имя свойства.
// Возвращаемое значение - это объект, так называемый "дескриптор свойства": он содержит значение свойства и все его флаги.

let user = {
    name: "Alex"
};

let desc = Object.getOwnPropertyDescriptor(user, "name");

console.log(JSON.stringify(desc, null, 2));
// {
//     "value": "Alex",
//     "writable": true,
//     "enumerable": true,
//     "configurable": true
//   }

// Чтобы изменить флаги, можем использовать метод Object.defineProperty
// Object.defineProperty(obj, propertyName, descriptor);

// obj и propertyName - объект и свойство, для которого нужно применить дескриптор.

// descriptor - применяемый дескриптор.

// Если свойство существует, defineProperty обновит его флаги. В противном случае метод создаёт новое свойство с указанным значением и флагами; если какаой-то флаг не указан явно, ему присваивается значение false.

let person = {};

Object.defineProperty(person, "name", {
    value: "Egor"
})

let desc2 = Object.getOwnPropertyDescriptor(person, "name");
console.log(JSON.stringify(desc2, null, 2));
// {
//     "value": "Egor",
//     "writable": false,
//     "enumerable": false,
//     "configurable": false
//   }


{
    let user = {
        name: "Alex"
    };

    Object.defineProperty(user, "name", {
        writable: false
    }); 

    user.name = "Egor"
    console.log(user.name); // Alex

    user.age = 21
    let descriptor = Object.getOwnPropertyDescriptor(user, 'age');
    console.log(JSON.stringify(descriptor, null , 2));
    // {
    //     "value": 21,
    //     "writable": true,
    //     "enumerable": true,
    //     "configurable": true
    //   }

    Object.defineProperty(user, "surname", {
        value: "Ivanov",
        writable: true
    }); 
    
    let descriptor2 = Object.getOwnPropertyDescriptor(user, 'surname');
    console.log(JSON.stringify(descriptor2, null , 2));
    // {
    //     "value": "Ivanov",
    //     "writable": true,
    //     "enumerable": false,
    //     "configurable": false
    //   }

};


{
    let user = {
        name: "Ivan",
        toString(){
            return this.name;
        }
    };

    // По умолчанию оба свойства выведутся
    for (let key in user) console.log(key); // name, toString

    // Если мы этого не хотим, то можно установить для свойства enumerable: false. Тогда оно перестанет появляться в цикле for...in аналогично встроенному toString

    Object.defineProperty(user, "toString", {
        enumerable: false
    })

    for (let key in user) console.log(key); // name
}



{
// Флаг неконфигурируемого свойства (configurable:false) иногда предустановлен для некоторых встроенных объектов и свойств.

// Неконфигурируемое свойство не может быть удалено, его атрибуты не могут быть изменены.

// Например, свойство Math.PI – только для чтения, неперечислимое и неконфигурируемое:

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/

// Обратите внимание: configurable: false не даст изменить флаги свойства, а также не даст его удалить. При этом можно изменить значение свойства.
}



// геттеры/сеттеры

{
    let obj = {
    get propName() {
      // геттер, срабатывает при чтении obj.propName
    },
  
    set propName(value) {
      // сеттер, срабатывает при записи obj.propName = value
    }
  };
}



