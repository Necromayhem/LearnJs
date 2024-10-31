// задачи по прототипам v2


// ### Задача 1: Создание объекта с использованием прототипов

// Создай объект Animal с методом speak, который возвращает строку "Голос животного". Затем создайте объект Dog, который наследуется от Animal и переопределяет метод speak, чтобы возвращать "Гав".

const Animal = {
    speak: function(){
        return `Голос животного`
    }
};

// Создаем функцию-конструктор для Dog
function Dog() {};

// Устанавливаем Animal как прототип Dog
Dog.prototype = Animal;

// Создаем экземпляр Dog
const myDog = new Dog();

// Переопределяем метод speak для экземпляра Dog
myDog.speak = function() {
    return "Гав";
};

// Проверяем результат
// console.log(myDog.speak()); // Гав

// ### Задача 2: Прототип для объекта "Книга"

// Создай конструктор Book, который принимает название книги и автора. Добавь метод getInfo в прототип Book, который будет возвращать строку вида "Название: [название], Автор: [автор]".

function Book(title, author){
    this.title = title,
    this.author = author
};

Book.prototype.getInfo = function(){
    return `Название: ${this.title}, Автор: ${this.author}`; 
};

const book1 = new Book('Война и мир', 'Толстой');
// console.log(book1.getInfo()); // Название: Война и мир, Автор: Толстой

// через геттер/сеттер

Object.defineProperty(Book.prototype, "info",{
    get: function(){
        return `Название: ${this.title}, Автор: ${this.author}`;
    },

    set: function(value){
        if(typeof value === "string"){
            [this.title, this.author] = value.split(",")
        } else {
            console.log("Value must be a number")
        }
    },
    enumerable: true, // Свойство будет перечисляемым
    configurable: true // Свойство можно будет изменить
});

const book2 = new Book("Солярис", "Лем");
console.log(book2.info); // Название: Солярис, Автор: Лем
book2.info = "1984, Оруэлл"
console.log(book2.info); // Название: 1984, Автор:  Оруэлл
book2.info = 123;
console.log(book2.info); // Value must be a number








// ### Задача 3: Наследование объектов

// Создай объект Vehicle с методом drive, который возвращает строку "Еду на транспортном средстве". Затем создайте объект Car, который наследуется от Vehicle и переопределяет метод drive, чтобы возвращать "Еду на машине".


// ### Задача 4: Кастомизация объектов через прототипы

// Создай объект Person с двумя свойствами: name и age. Напиши метод introduce в прототипе Person, который будет возвращать строку вида "Меня зовут [name], мне [age] лет". Затем создай новый объект john от Person.

// ### Задача 5: Подсчет свойств объекта через прототипы

// Создай объект Counter, который имеет метод increment для увеличения счетчика на 1, и метод getValue, который возвращает текущее значение счетчика. Создайте два объекта: counter1 и counter2, которые наследуются от Counter.
