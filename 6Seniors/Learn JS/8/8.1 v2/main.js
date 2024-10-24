// Прототипное наследование

// Нпример, есть объект user и мы хотим создать объекты admin и guest как его слегка изменённые варианты. Мы хотели бы повторно использовать то, что есть у объекта user, не копировать/переопределять его методы, а просто создать новый объект на его основе. В этом поможет прототипное наследование.

// [[Prototype]]

// в js объекты имеют специальоне скрытое свойство [[Prototype]], которое либо равно null либо ссылается на другой объект. Этот объект называется "прототип".

// Когда мы хотим прочитать свойство из object, а оно отсутствует, js автоматически берёт его из прототипа. Такой механизм называется "прототипным наследованием". 

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

console.log(rabbit.eats); // undefined

rabbit.__proto__ = animal;

console.log(rabbit.eats); // true

// Методы также можно передавать.

let animal2 = {
    eats: true,
    walk(){
        console.log("Animal walk");
    }
};

let rabbit2 = {
    jumps: true,
    __proto__: animal2
};

rabbit2.walk() // Animal walk

// __proto__ - это не то же самле, что внутреннее свойство [[Prototype]], а геттер/сеттер для [[Prototype]].

// прототип испотзуется только для чтения свойств. Операции записи/удаления работают напрямую с объектом.

let animal3 = {
    eats: true,
    walk(){
        console.log("Animal walk");
    }
};

let rabbit3 = {
    __proto__: animal3
};

rabbit3.walk = function(){
    console.log("Прыг-скок!");
};

rabbit3.walk() // Прыг-скок!

// Свойства-аксессоры - исключение, так как запись в него обрабатывается функцией-сеттером. То есть это фактически вызов функции.
// По этой причине admin.fullname работает корректно в приведённом ниже коде:

let user = {
    name: "Alex",
    surname: "Ivanov",

    set fullName(value){
        [this.name, this.surname] = value.split(" ")
    },

    get fullName(){
        return `${this.name} ${this.surname}`
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

console.log(admin.fullName); // Alex Ivanov

// срабатывает сеттер!

admin.fullName = "VV Putin";
console.log(admin.name); // VV
console.log(admin.surname); // Putin



// Цикл for...in проходит не только по собственным, но и по унаследованным свойствам.

let human = {
    age: 27,
    city: "Krasnodar",
    job: "support",
};

let person = {
    __proto__: human,
    name: "Alex",
    surname: "Kuklev",
};

// for(let prop in person) console.log(prop);//name surname age city job

function retProp(){
    for(let prop in person){
        if(prop.length < 4){
            console.log(prop);
        }
    } 
}

retProp(person) // age job


// Если унаследованные свойства не нужны, то можно отфильтровать их их при помощи встроенного метода obj.hasOwnProperty(key); он возвращает true, если у obj есть собственное, не унаследованное, свойство с именем key.

let animals = {
    eats: true,
    runs: true,
    fly: false,
};

let rabbits = {
    jumps: true,
    sleep: true,
    __proto__: animals,
};

function retOwnProp(){
    for(let prop in rabbits){
        let isOwn = rabbits.hasOwnProperty(prop);

        if(isOwn){
            console.log(`Свойство: ${prop} наше`);
        } else{
            console.log(`Свойство: ${prop} НЕ наше`);
        }
    }
};

retOwnProp(rabbits);

// Почти все методы, получающие ключи/значения - игнорируют унаследованные свойства. Они учитывают свойства только самого объекта, а не прототипа.







