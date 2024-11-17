// классы roadmap

// 1)Что значит "синтаксический сахар"?

// Синтаксический сахар - это термин, который используется в программировании для описания синтаксиса языка, который делает код более удобным для чтения и написания, но не добавляет нововой функциональности. Это как бы удобная оболочка, позволяющая разработчикам писать один и тот же код более понятным, коротким или эстетически приятным способом.

// Примеры:
// Обычная и стрелочная функция

const sum1 = function(a, b){
    return a + b
};

const sum2 = (a, b) => a + b;

// console.log(sum1(4, 1)); // 5
// console.log(sum2(4, 1)); // 5


// Объекты и массивы, извлечение свойств при помощи деструктуризации

const person = {
    name: "Alex",
    age: 27
};

const { name, age,} = person;

// console.log(name); // Alex
// console.log(age); // 27


// темплейтные строки

const user = "Alice";
const greeting = "Hello, " + user + "!"
// console.log(greeting); // Hello, Alice!


// Классы это синтаксический сахар?

// Да. Это синтактический сахар над прототипным наследованием

// Сахар над чем? Привести аналогии по синтаксису

// Итераторы в JS
// - Без синтаксического сахара:

const array = [1, 2, 3];

const iterator = array[Symbol.iterator]();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3

//  - С синтаксическим сахаром с использованием `for...of`:

for (const item of array) {
    console.log(item); // 1, 2, 3
}

// Классы в JavaScript:
// - Без синтаксического сахара:

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};

function Dog(name) {
    Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function() {
    console.log(`${this.name} barks.`);
};

// - С синтаксическим сахаром:

{
    class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks.`);
    }
}
}

// Какие есть виды полей в классах?

// Приватные пол.
// Поля, доступ к которым имеют только экземпляры класса(или методы этого класса)

class myClass{
    #privateField; // приватное поле

    constructor(value){
        this.#privateField = value; // инициализация приватного поля
    }

    getPrivateField(){
        return this.#privateField; // доступ к приватному полю через метод
    }
};

// доступ только из экземпляра класса
const private = new myClass("qwerty");
console.log(private.getPrivateField()); // qwerty

// нет доступа напрямую из экземпляра, только через метод
// const instance = new MyClass("qwerty");

// console.log(instance.#privateField); // SyntaxError: Private field '#privateField' must be declared in an enclosing class

// нет доступа из экземпляра наследуемого класса
class SubClass extends myClass{
    constructor(value){
        super(value);
        // console.log(this.#privateField); // SyntaxError: Private field '#privateField' must be declared in an enclosing class
    }
}

// const subInstance = new SubClass("qwerty")


// нет доступа из функции вне класса

// const instance = new MyClass("qwerty");

function externalFunction(obj) {
    // console.log(obj.#privateField); // SyntaxError: Private field '#privateField' must be declared in an enclosing class
}

// externalFunction(instance);





// Какие поля пишутся в прототип, а какие в инстанс?

// всё что с this - инстанс, остальное в прототип

// Можно ли обратиться к статическому полю из this?

// Статические поля принадлежат самому классу, а не его экземплярам, поэтому для их доступа необходимо использовать имя класса.


// Можно ли переопределить метод в дочернем классе?

// да.

// Можно ли переопределить метод в инстансе класса?

// да.

