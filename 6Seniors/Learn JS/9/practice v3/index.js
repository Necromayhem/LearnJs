// Задачи от гпт v3

// Задача 1: Базовый класс и экземпляр

// Создайте класс `Animal`, который будет иметь свойство `name` и метод `speak()`, который выводит в консоль сообщение "Имя животного издает звук".
// Требования:
// - Создайте экземпляр класса `Animal`.
// - Вызовите метод `speak()`.
class Animal {
    constructor(name){
        this.name = name;
    }

    speak(){
        return `${this.name} издаёт звук`;
    }
}
// console.log(new Animal("Собака").speak()); // Собака издаёт звук

const  myCat = new Animal("Макс");
// console.log(myCat.speak()); // Макс издаёт звук





// Задача 2: Наследование классов

// Создайте класс `Dog`, который наследуется от класса `Animal`. Метод `speak()` должен возвращать сообщение "Имя собаки лает".

// Требования:
// - Создайте экземпляр класса `Dog` с именем "Бобик".
// - Вызовите метод `speak()` у этого экземпляра.

{
    class Animal{
        constructor(name){
            this.name = name;
        }

        speak(){
            return `${this.name} издаёт звук`;
        }
    };

    class Dog extends Animal{
        speak(){
            return `${this.name} лает`;
        }
    };

    const myDog = new Dog("Бобик")
    // console.log(myDog.speak()); // Бобик лает
}



// Задача 3: Множественные методы

// Создайте класс `Person`, который будет иметь свойства `name` и `age`. Реализуйте методы для:
// - Увеличения возраста на 1.
// - Вывода в консоль сообщения о том, сколько лет человеку.

// Требования:
// - Создайте экземпляр класса `Person`.
// - Увеличьте возраст и выведите сообщение о возрасте.

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    incrAge(){
        this.age += 1;
    }

    decrAge(){
        this.age -= 1;
    }

    getAge(){
        console.log(this.age);
    }
}

const person = new Person("Alex", 27);
// person.incrAge() // +1
// person.incrAge() // +1
// person.getAge() // 29
// person.decrAge() // -1
// person.decrAge() // -1
// person.getAge() // 27



// Задача 4: Статический метод

// Добавьте статический метод `createAnonymous` в класс `Person`, который возвращает нового человека с именем "Аноним" и возрастом 0.

// Требования:
// - Используйте статический метод для создания экземпляра `Person`.
// - Вызовите метод для вывода информации о человеке.

{
    class Person{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        static createAnonymous(){
            return new Person("Аноним", 0)
        }

        // Метод для вывода информации о человеке
        toString() {
            return `Имя: ${this.name}, Возраст: ${this.age}`;
        }
    }

    // Создаем анонимного человека и выводим информацию
    const anonymousPerson = Person.createAnonymous();
    // console.log(anonymousPerson.toString()); // Имя: Аноним, Возраст: 0
}

// Задача 5: Реализация прототипа

// Создайте класс `Car`, который будет иметь свойства `make`, `model`, и `year`. Реализуйте метод `getInfo()`, который возвращает строку с этой информацией.

// Требования:
// - Создайте экземпляр класса `Car` и проверьте вывод метода `getInfo()`.

class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo(){
        return `Марка: ${this.make}, Модель: ${this.model}, Год: ${this.year}`
    }
};

const bmw = new Car("BMW", "X6", 2015)
// console.log(bmw.getInfo()); // Марка: BMW, Модель: X6, Год: 2015



// Задача 6: Множественное наследование (через mixins)

// Создайте два mixin'а: `sayMixin` с методом `say()` и `walkMixin` с методом `walk()`. Реализуйте класс `Human`, который использует оба mixin'a и имеет собственный метод `introduce()`.
// Требования:
// - Реализуйте экземпляр класса `Human` с именем "Иван".
// - Проверьте работу всех методов: `say()`, `walk()`, `introduce()`.

let sayMixin = {
    say(){
        console.log(`${this.name} говорит`);
    }
};

let walkMixin = {
    walk(){
        console.log(`${this.name} идёт`);
    }
};

class Human{
    constructor(name){
        this.name = name;
    }

    introduce(){
        return `Это ${this.name}`
    }
};

Object.assign(Human.prototype, sayMixin )
Object.assign(Human.prototype, walkMixin )

const human = new Human("Иван")
// console.log(human.introduce()); // Это Иван
// human.say() // Иван говорит
// human.walk() // Иван идёт




// Задача 7: Сложная иерархия классов

// Разработайте классы `Shape`, `Circle` и `Rectangle`. Класс `Shape` должен иметь метод `area()`, возвращающий 0. Каждый из классов-наследников должен переопределять этот метод для вычисления площади своей фигуры.

// Требования:
// - Реализуйте методы:
//   - `area()` для `Circle`, принимающий радиус.
//   - `area()` для `Rectangle`, принимающий ширину и высоту.
// - Создайте экземпляры каждой из фигур и выведите их площади.

class Shape{
    area(){
        return 0;
    }
};

class Circle extends Shape{
    constructor(r){
        super();
        this.r = r;
    }

    area(){
        return this.r*this.r*3.14
    }
};

class Rectangle extends Shape{
    constructor(a, b){
        super();
        this.a = a;
        this.b = b;
    }

    area(){
        return this.a*this.b;
    }
};

const circle = new Circle(5);
// console.log(circle.area()); // 78.5

const rectangle = new Rectangle(3, 4);
// console.log(rectangle.area()); // 12

// Задача 8: Уникальные идентификаторы

// Создайте класс `UniqueID`, который автоматически присваивает уникальный идентификатор каждому новому экземпляру. Идентификаторы должны быть целыми числами, начиная с 1.

// Требования:
// - Создавайте новые экземпляры класса `UniqueID` и выводите их уникальные идентификаторы. 

class UniqueID{
    static currentId = 0; // Статической переменной присваивает начальное значение 0


    constructor() {
        this.id = UniqueID.createId(); // Автоматически создаем новый идентификатор для экземпляра
    }

    static createId(){
        return ++this.currentId;
    } 
};

const id1 = new UniqueID();
const id2 = new UniqueID();
const id3 = new UniqueID();

// console.log(id1.id); // 1
// console.log(id2.id); // 2
// console.log(id3.id); // 3