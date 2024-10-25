// Прототипы практика

// 1. Создание объекта с использованием прототипов:
// Напиши код, который создает объект person с одним свойством name и методом sayHello, который выводит Hello, my name is [name]. Используй прототип для создания этого объекта.

function Person(name){
    this.name = name
};

// Добавление метода в прототип, иначе он не будет доступен другим объектам

Person.prototype.sayHello = function(){
    return `Hello, my name is ${this.name}`
}

let person = new Person("Alex");
let person2 = new Person("Egor");
console.log(person.sayHello()); // Hello, my name is Alex
console.log(person2.sayHello()); // Hello, my name is Egor

// Про добавление метода в конструктор как свойство: в таком случае каждый экземпляр Person будет иметь своё собственное свойство sayHello, котоое будет отдельной функцией для каждого объекта. Это приводит к избыточности: каждый раз, когда создаётся новый объект, создаётся новая копия функции sayHello. Это увеличивает потребление памяти, и такие методы не могут быть лекго изменены на уровне прототипа.
// Таким образом, использование прототипов для методов - более эффективный способ, так как все экземпляры используют одну и ту же функцию, что экономит память и делает код производительнее.



// 2. Копирование объекта с прототипом:
// Создай объект animal с методом speak, который возвращает звук, который делает животное. Затем создайте объект dog, который наследует от animal и переопределяет метод speak, чтобы он возвращал звук "Woof!".


let animal = {
    sound: null,
    speak: function(){
        return `${this.sound}`
    }
};

let dog = {
    sound: "Woof!"
};

dog.__proto__ = animal;

console.log(dog.speak()); // Woof!

// ### Средние задачи

// 3. Создание конструктора:
// Напиши функцию-конструктор Car, которая имеет свойства make и model. Добавь метод getDescription, который возвращает строку с описанием автомобиля. Создай два экземпляра Car и вызови метод getDescription на каждом из них.

function Car(make, model){
    this.make = make,
    this.model = model
};

Car.prototype.getDescription = function(){
    return `${this.make} ${this.model}`
};

let bmw = new Car("Germany", "BMW");
let honda = new Car("Japan", "Honda");

console.log(bmw.getDescription());
console.log(honda.getDescription());


// 4. Прототипное наследование:
// Создай функцию-конструктор Shape, которая имеет метод getArea. Затем создайте функцию-конструктор Rectangle, которая наследует от Shape и имеет свои собственные свойства width и height. Переопредели метод getArea для Rectangle, чтобы он возвращал площадь прямоугольника.


function Shape(){};
Shape.prototype.getArea = function(){
    return this.width * this.height
};

function Rectangle(width, height){
    this.width = width,
    this.height = height
};

// Чтобы задать прототип, нужно сначала создать объект Rectangle
Rectangle.prototype = Object.create(Shape.prototype);
// это создаёт новый объект, который наследует от Shape.prototype. Это позволяет Rectangle иметь доступ к методам, определённым в Shape, включая getArea.


// После того, как мы определили Rectangle.prototype, мы теряем ссылку на конструктор Rectangle. Этот код восстанавливает её, чтобы constructor указывал именно на Rectangle.
Rectangle.prototype.constructor = Rectangle;

let result = new Rectangle(4, 5);
console.log(result.getArea());



// ### Сложные задачи


// 5. Наследование и методы:
// Напиши функцию-конструктор Person, которая имеет методы greet и introduce. Создай дочерний конструктор Student, который наследует от Person и добавляет новый метод study. Убедись, что при вызове метода greet у экземпляров Student, он работает корректно.

function Person(name){
    this.name = name
};

Person.prototype.greet = function(){
    return `Hello, ${this.name}`
};
Person.prototype.introduce = function(){
    return `Student name is ${this.name}`
};

function Student(name){
    // вызов конструктора родителя
    Person.call(this, name)
};

// Создание объекта, чтобы задать прототип
Student.prototype = Object.create(Person.prototype);


// Восстановление ссылки на Student
Student.prototype.constructor = Student;

Student.prototype.study = function(){
    return `${this.name} is studying.`
};

// тест Person
let student1 = new Person("Alex")
console.log(student1.name); // Alex
console.log(student1.greet()); // Hello, Alex
console.log(student1.introduce()); // Student name is Alex

// тест Student
let student2 = new Student("Ivan");
console.log(student2.name); // Ivan
console.log(student2.greet()); // Hello, Ivan
console.log(student2.introduce()); // Student name is Ivan
console.log(student2.study()); // Ivan is studying.



// 6. Тестирование прототипов:
// Напиши функцию, которая проверяет, является ли объект или его прототип экземпляром определенного конструктора. Например, функция должна возвращать true, если объект был создан с использованием конструктора Dog.

function Dog(race, name){
    this.race = race;
    this.name = name;
};

Dog.prototype.constructor = Dog;

let bulldog = new Dog("Bulldog", "Славик");

console.log(bulldog.race); // Bulldog
console.log(bulldog.name); // Славик

function compareProto(obj, constructor){
    return obj instanceof constructor;
}
// instanceOf = оператор, который проверяет, находится ли объект в цепочке прототипов данного конструктора.

console.log(compareProto(bulldog, Dog)); // true

// ### Дополнительные задания

// 7. Глубокое копирование с прототипами:
// Реализуй функцию, которая глубоко копирует объект с учетом его прототипов. Убедись, что ссылки на методы и свойства сохраняются.


let me = {
    name: "Alex",
    city: "Krasnodar",
    age: 27,
    about: function(){
        return `Меня зовут ${this.name}, мне ${this.age}, живу в ${this.city}`
    }
};

let clone = Object.create(Object.getPrototypeOf(me), Object.getOwnPropertyDescriptors(me));

console.log(clone); // {name: 'Alex', city: 'Krasnodar', age: 27}
console.log(clone.about()); // Меня зовут Alex, мне 27, живу в Krasnodar





