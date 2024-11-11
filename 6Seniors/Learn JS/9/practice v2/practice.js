// Классы, практика 

// 1. Класс: базовый синтаксис

// #### Простая задача
// Создайте класс `Animal` с двумя свойствами: `name` и `age`. Добавьте метод `speak()`, который возвращает строку в формате: "Имя: [name], Возраст: [age]".

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        return `Имя: ${this.name}, Возраст: ${this.age}`
    }
}

const myDog = new Animal("Бобби", 5)
// console.log(myDog); // Animal {name: 'Бобби', age: 5}
// console.log(myDog.speak()); // Имя: Бобби, Возраст: 5

// #### Средняя задача
// Создайте класс `Car`, который принимает `brand`, `model` и `year` в конструкторе. Добавьте метод `getInfo()`, который возвращает информацию о машине в виде строки в формате: `"[brand] [model] (год выпуска: [year])"`.

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getInfo(){
        return `${this.brand} ${this.model} ${this.year}`
    }
}

const myCar = new Car("BMW", "X6", 2015)
// console.log(myCar); // Car {brand: 'BMW', model: 'X6', year: 2015}
// console.log(myCar.getInfo()); // BMW X6 2015


// #### Сложная задача
// Создайте класс `Book`, который принимает `title`, `author` и `year` в конструкторе. Добавьте метод `getDescription()`, который будет возвращать строку в формате: `"Книга '[title]' написана [author] в [year]"`.

class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getDescription(){
        return `Книга: ${this.title}; кем написана: ${this.author}; год: ${this.year}`
    }
}

const book = new Book("Процесс", "Кафка", 1925)
// console.log(book.getDescription()); // Книга: Процесс; кем написана: Кафка; год: 1925

// 2. Наследование классов

// #### Простая задача
// Создайте класс `Vehicle` с методом `start()`, который возвращает "Транспортное средство запущено". Унаследуйте класс `Auto` от `Vehicle` и переопределите метод `start()`, добавив логику для уведомления о запуске автомобиля.

class Vehicle{
    
    start(){
        return `Транспортное средство запущено`
    }
}

class Auto extends Vehicle{
    constructor(brand, model){
        super() // вызов конструктора родителя
        this.brand = brand;
        this.model = model;
    }

    start(){
        return `${super.start()}(${this.brand} ${this.model})`
        // возвращаю значение метода родителя + моё дополнение
    }
}

const auto = new Auto("LADA", "Granta")
// console.log(auto.start()); // Транспортное средство запущено(LADA Granta)

// #### Средняя задача
// Создайте базовый класс `Shape` с методом `getArea()`, который возвращает 0. Унаследуйте классы `Circle` и `Rectangle` от `Shape`. В каждом наследуемом классе реализуйте метод `getArea()` для расчета площади круга и прямоугольника соответственно.

class Shape{
    getArea(){
        return 0
    }
}

class Circle extends Shape{
    constructor(r){
        super();
        this.r = r;
    }

    getArea(){
        return super.getArea() + this.r*this.r*3.14
    }

}

const circle = new Circle(5);
// console.log(circle.getArea()); // 78.5

class Rectangle extends Shape {
    constructor(a, h){
        super();
        this.a = a;
        this.h = h;
    }

    getArea(){
        return super.getArea() + this.a*(this.h/2)
    }
}

const rectangle = new Rectangle(5, 8);
// console.log(rectangle.getArea()); // 20


// #### Сложная задача
// Создайте базовый класс `Employee`, который имеет свойства `name` и `salary`. Создайте классы `Manager` и `Developer`, унаследованные от `Employee`. Добавьте в каждый из них метод `describe()`, который возвращает информацию о работнике в формате: `"Имя: [name], Зарплата: [salary], Должность: [position]"`.

class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
}

class Manager extends Employee{
    position = "Менеджер";

    constructor(name, salary){
        super(name, salary)
    }

    describe(){
        return `Имя: ${this.name}, Зарплата: ${this.salary}, Должность: ${this.position}`
    }
}

const manager = new Manager("Иван", 100000) 
// console.log(manager.describe()); // Имя: Иван, Зарплата: 100000, Должность: Менеджер

class Developer extends Employee{
    position = "Разработчик";

    constructor(name, salary){
        super(name, salary)
    }

    describe(){
        return `Имя: ${this.name}, Зарплата: ${this.salary}, Должность: ${this.position}`
    }
}

const developer = new Developer("Олег", 200000)
// console.log(developer.describe()); // Имя: Олег, Зарплата: 200000, Должность: Разработчик

// 3. Статические свойства и методы

// #### Простая задача
// Создайте класс `MathUtil`, который имеет статический метод `add(a, b)`, возвращающий сумму двух чисел.

class MathUtil{
    static add(a, b){
        return a + b
    }
}

// console.log(MathUtil.add(3, 5)); // 8
// Статические методы не могут быть вызваны на экземпляре класса, а должны вызываться непосредственно на самом классе.

// #### Средняя задача
// Создайте класс `Counter`, который имеет статическое свойство `count`, и статический метод `increment()`, который увеличивает `count` на 1. Создайте метод `getCount()`, который возвращает текущее значение `count`.

class Counter{
    static count = 0;

    static increment(){
        Counter.count++
    }

    static getCount(){
        return this.count
    }

}

Counter.increment(); // Вызываем статический метод для увеличения счетчика
// console.log(Counter.getCount()); // Получаем текущее значение счетчика, вызывая статический метод


// #### Сложная задача
// Создайте класс `User`, который имеет статическое свойство `userCount`, увеличивающееся при создании нового экземпляра класса. Добавьте статический метод `getUserCount()`, который возвращает текущее количество пользователей.

class User {
    static userCount = 0;

    constructor(){
        User.userCount++; // при каждом создании инстанса +1
    }

    static getUserCount(){
        return User.userCount;
    }

}

const user1 = new User();
const user2 = new User();
const user3 = new User();

// console.log(User.getUserCount()); // 3





// 4. Приватные и защищённые методы и свойства

// #### Простая задача
// Создайте класс `BankAccount`, у которого есть приватное свойство `_balance`. Реализуйте методы `deposit(amount)` и `getBalance()`, которые добавляют сумму к балансу и возвращают текущий балансовый счет.

class BankAccount {
    _balance = 0;

    deposit(amount){
        this._balance += amount;
    }

    getBalance(){
        return this._balance;
    }
}

const balance = new BankAccount();
balance.deposit(1000);
// console.log(balance.getBalance()); // 1000




// #### Средняя задача
// Создайте класс `Person` с приватными свойствами `_name` и `_age`. Реализуйте методы доступа (геттеры и сеттеры) для получения и изменения имени и возраста.

class Person{
    _name;
    _age;

    get Age(){
        return this._age
    }

    get Name(){
        return this._name
    }

    set Age(age){
        this._age = age;
    }

    set Name(name){
        this._name = name;
    }
}

const person1 = new Person();
person1.Name = "Alex"
person1.Age = 27
// console.log(person1.Name); // Alex
// console.log(person1.Age); // 27

// #### Сложная задача
// Создайте класс `Rectangle` с приватными свойствами `_width` и `_height`. Реализуйте метод `getArea()` для вычисления площади, а также защищённый метод, который будет использоваться для изменения размера прямоугольника.

{
    class Rectangle {
        _width;
        _height;
    
        constructor(width, height) {
            this._width = width;
            this._height = height;
        }
    
        getArea() {
            return this._width * this._height;
        }
    
        // Защищенный метод для изменения размеров
        _resize(width, height) {
            this._width = width;
            this._height = height;
        }
    
        // Общественный метод для изменения размеров
        resize(width, height) {
            this._resize(width, height); // Вызов защищенного метода
        }
    }
    
    const rectangle = new Rectangle(5, 10);
    // console.log(rectangle.getArea()); // 50
    rectangle.resize(2, 4); // Изменение размера
    // console.log(rectangle.getArea()); // 8
}

// 5. Расширение встроенных классов

// #### Простая задача
// Создайте класс `MyArray`, который расширяет встроенный класс `Array` и добавляет новый метод `first()`, который возвращает первый элемент массива.

class MyArray extends Array{
    first(){
        return this[0]
    }
}

let arr = new MyArray(1, 2, 3, 4, 5);
// console.log(arr.first()); // 1

// #### Средняя задача
// Создайте класс `CustomDate`, который расширяет класс `Date` и добавляет метод `toCustomString()`, возвращающий дату в формате: `"DD-MM-YYYY"`.

class CustomDate extends Date {
    toCustomString() {
        const day = String(this.getDate()).padStart(2, '0'); // День
        const month = String(this.getMonth() + 1).padStart(2, '0'); // Месяц (месяцы начинаются с 0)
        const year = this.getFullYear(); // Год
        return `${day}-${month}-${year}`;
    }
}

const date = new CustomDate();
// console.log(date.toCustomString()); // 11-11-2024


// #### Сложная задача
// Создайте класс `CustomMap`, который расширяет класс `Map`. Добавьте метод `getKeys()`, возвращающий массив ключей карты.

// 6. Проверка класса: "instanceof"

// #### Простая задача
// Создайте класс `Animal` и класс `Dog`, унаследованный от `Animal`. Проверяйте, является ли объект экземпляром `Dog` с помощью `instanceof`.

// #### Средняя задача
// Создайте класс `Shape` и унаследованные классы `Circle` и `Square`. Реализуйте метод `isShape()` в базовом классе, который проверяет, является ли текущий объект экземпляром `Shape`.

// #### Сложная задача
// Создайте базовый класс `Vehicle` и унаследованные классы `Car` и `Bike`. Реализуйте функцию `checkType(vehicle)`, которая принимает объект и выводит, является ли он автомобилем, велосипедом или другим транспортным средством.