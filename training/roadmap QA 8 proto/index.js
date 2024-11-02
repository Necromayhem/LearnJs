// roadmap proto

// 1) Как осуществить прототипное наследование?

// 1й способ: прописать объекту свойство __proto__: obj (устаревший)
const animal = {
    jump: true
};

const rabbit = {};
console.log(rabbit.jump); // undefined

rabbit.__proto__ = animal; // указываем прототип

console.log(rabbit.jump); // true
// Теперь Animal прототип rabbit

// 2й способ: по современному через Object.create(obj)

{
    const animal = {
        run: true
    };


    const rabbit = Object.create(animal);
    console.log(rabbit); // {}
    console.log(rabbit.run); // true
}

// 3й способ: через функцию-конструктор

{
    function Animal(){
        this.eats = true;
    }

    const rabbit = new Animal;
    console.log(rabbit); // Animal { eats: true }
    console.log(rabbit.eats); // true
}

// 4й способ: через классы(ещё не изучил)



// 2) Как осуществить наследование свойства в this?


// создать родительскую функцию-конструктор:

function Admin(name){
    this.name = name;
}

// прописать свойство

Admin.prototype.isAdmin = function(){
    if(this.name == "Alex"){
        return `Это админ.`
    } else{
        return `Это не админ!`
    }
}

// создать дочерний конструктор и привзяать контекст через call/apply
function User(name){
    Admin.call(this, name)
};

// указываем прототип и конструктор
User.prototype = Object.create(Admin.prototype);
// создаём новый объект, чей прототип(__proto__) ссылается на Admin.prototype. Это значит, что все экземпляры User наследуют свойства и методы из Admin.
User.prototype.constructor = User; // свойство конструктор будет по дефолту указывать на Admin. Перенастраиваем для правильной структуры кода.

const user = new User("Alex");
console.log(user.isAdmin()); // Это админ.

const user2 = new User("Egor");
console.log(user2.isAdmin()); // Это не админ!



// 3)  Как создать объект без прототипа?

const objWithoutProto = Object.create(null)
console.log(objWithoutProto); // {} No properties


// 4) Как изменить прототип у созданного объекта?

const car = {
    say: function(){
        return `Машина`
    }
};

const bmw = Object.create(car);
console.log(bmw.say()); // Машина

const moto = {
    say: function(){
        return 'Мотоцикл'
    }
};

// установка нового прототипа через Object.setPrototypeOf(obj, proto)

Object.setPrototypeOf(bmw, moto);
console.log(bmw.say()); // Мотоцикл


// 5) Как получить прототип у объекта/числа/строки/функции?

const obj = {};
console.log(Object.getPrototypeOf(obj));

const num = 5;
console.log(Object.getPrototypeOf(num));

const str = "qwerty";
console.log(Object.getPrototypeOf(str));

const f = function(){};
console.log(Object.getPrototypeOf(f));

const ff = ()=>{};
console.log(Object.getPrototypeOf(ff));
// у стрелочной функции есть прототип, но нет свойства prototype

console.log(f.prototype); // {}
console.log(ff.prototype); // undefined