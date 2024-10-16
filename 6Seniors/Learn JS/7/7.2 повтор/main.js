// Геттеры и сеттеры

let obj = {
    get propName(){
        // геттер, срабатывает при чтении obj.propName
    },

    set propname(value){
        // сеттер, срабатывает при записи obj.propName = value
    }
};

// Геттер срабатывает, когда obj.propName читается, а сеттер - когда значение присваивается.

// Например, у нас есть объект user со свойствами name и surname.
// Добавим свойство объекта fullName для вывода полного имени.
// Само собой, чтобы не дублировать уже имеющуюся информацию - реализуем это при помощи аксессора.

let user = {
    name: "Alex",
    surname: "Ivanov",

    get fullName(){
        return `${this.name} ${this.surname}`;
    },

    set fullName(value){
        [this.name, this.surname] = value.split(" ");
    }

};

// console.log(user.fullName); // Alex Ivanov

// Смысл свойств-аксессоров - не вызывать как функцию, а читать, как обычное свойство.

user.fullName = "Alice Cooper"
// console.log(user.name); // Alice
// console.log(user.surname); // Cooper


let user2 = {
    name: "first",
    surname: "second",
};

Object.defineProperty(user2, "fullName", {
    get(){
        return `${this.name} ${this.surname}`;
    },

    set(value){
        [this.name, this.surname] = value.split(" ");
    }
});

// console.log(user2.fullName);

// Свойство объекта может быть либо свойством-аксессором(с методами get/set), либо свойством-данным (со значением value).

// При попытке указать и get, и set в одном дескрипторе будет ошибка:

// Error: Invalid property descriptor.
// Object.defineProperty({}, 'prop', {
//     get() {
//       return 1
//     },
  
//     value: 2
//   });


// Умные геттеры/сеттеры

// геттеры/сеттеры можно использовать как обёртки над "реальными" значениями свойств, чтобы получить больше контроля над операциями с ними.

// Напрмер, если мы хотим запретить устанавливать короткое имя для person, мы можем использовать сеттер name для проверки, а само значение хранить в отдельном свойстве _name:

let person = {
    get name(){
        return this._name;
    },

    set name(value) {
        if (value.length < 4){
            console.log("Имя слишком короткое, должно быть более 4 символов");
            return;
        }
        this._name = value;
    }
};


person.name = "Oleg"
// console.log(person.name); //Oleg


// Таким образом, само имя хранится само имя хранится в _name, доступ к которому производится через геттер и сеттер

// Технически, внешний код всё ещё может получить доступ к имени напрямую с помощью user._name, но существует широко известное соглашение о том, что свойства, которые начинаются с символа "_", являются внутренними, и к ним не следует обращаться из-за пределов объекта.


// ### Задача 1:
// Создайте объект book с полями title, author и pages. Реализуйте геттеры и сеттеры для этих полей. Убедитесь, что значение pages всегда положительное.

const book = {
    tittle: "Горе от ума",
    author: "Грибоедов",
    pages: 289,

    get bookName(){
        return `${this.tittle}`;
    },

    get authorName(){
        return `${this.author}`
    },

    get pagesNum(){
        return this.pages
    },

    set pagesNum(value){
        if(typeof value === "number" && value > 0){
            this.pages = value
        }
    }
};

// console.log(book.bookName); // Горе от ума
// console.log(book.authorName); // Грибоедов
// console.log(book.pagesNum); // 289

book.pagesNum = 115

// console.log(book.pagesNum); // 115










