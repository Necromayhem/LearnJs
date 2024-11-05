// Классы

// в объектно-ориентированном программировании класс - это расширяемый шаблон кода для создания объектов, который устанавливает в них начальные значения(свойства) и реализацию поведения(методы).

// синтаксис

// class MyClass {
//     // методы класса
//     constructor() { ... }
//     method1() { ... }
//     method2() { ... }
//     method3() { ... }
//     ...
// }

// вызов new MyClass для создания нового объекта со всеми перечисленными методами.
// При этом автоматически вызывается метод constructor(), в нём мы можем инициализировать объект.

class User {
    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(this.name);
    }
}

// Использование
let user = new User("Alex")
user.sayHi() // Alex

// Когда вызывается new User("Alex"):
// 1) Создаётся новый объект.
// 2) constructor запускается с заданным аргументом и сохраняет его в this.name


// Внутри классов запятые не требуются

// класс - это разновидность функции.

{
    class User{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(this.name);
    }
}
}

console.log(typeof User); // function

// Вот что делает конструкция class User {...}:
// 1) Создаёт функцию с именем User, которая становится результатом объявления класса. Код функции берётся из метода constructor (она будет пустой, если такого метода нет).
// 2) Сохраняет все методы, такие как sayHi, User.prototype

console.log(User.prototype); // {sayHi: ƒ}
console.log(User === User.prototype.constructor); // true

// Поэтому при вызове метода - он будет взят из прототипа.
// Таким обазом, объекты new User имеют доступ к методам класса.



// CLASS EXPRESSION

// Как и функции, классы можно определять внутри другого выражения, передавать, возвращать, присваивать и тд.
// Пример Class Expression(по аналогии с Function Expression):

{
    let User = class{
        sayHi(){
            console.log('Привет');
        }
    };
}

// Аналогично Named Class Expression, Class Exression может иметь имя.
// Если у Class Expression есть имя, то оно видно только внутри класса:

//// "Named Class Expression"
// (в спецификации нет такого термина, но происходящее похоже на Named Function Expression)
{
    let User = class MyClass {
        sayHi(){
            console.log(MyClass); // имя MyClass видно только внутри класса
        }
    };

    // new User().sayHi(); // работает, выводит определение MyClass
    // console.log(MyClass); // ошибка, имя MyClass не видно за пределами класса
}

// Мы даже можем динамически создавать классы "по запросу":

{
    function makeClass(phrase){
        // объявляем класс и возвращаем его
        return class {
            sayHi(){
                console.log(phrase);
            }
        }
    }
    
    // Создаём новый класс
    let User = makeClass("привет")

    // new User().sayHi() // Привет
}



// Геттеры/сеттеры, другие сокращения

{
    class User {
        constructor(name){
            // вызывет сеттер
            this.name = name;
        }

        get name(){
            return this._name;
        }

        set name(value){
            if(value.length < 4){
                console.log("Имя слишком короткое");
                return;
            }
            this._name = value;
        }
    }

    let user = new User("Иван");
    console.log(user.name); // Иван
    user = new User("") // Имя слишком короткое
}


// при объявлении класса геттеры/сеттеры создаются на User.prototype:

// Object.defineProperties(User.prototype, {
//     name: {
//         get(){
//             return this._name
//         },
//         set(name){
//             //...
//         }
//     }
// })


// Свойства классов

{
    class User {
        name = "Anonim"

        sayHi(){
            console.log(`Привет, ${this.name}!`);
        }
    }

    new User().sayHi(); // Привет, Anonim!
}

// Свлйство name не устанавливается в User.prototype. Вместо этого оно создаётся оператором new перед запуском конструктора, это именно свойство объекта.

// переписать используя классы:

// function Clock({ template }) {
  
//     let timer;
  
//     function render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     this.stop = function() {
//       clearInterval(timer);
//     };
  
//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };
  
//   }
  
//   let clock = new Clock({template: 'h:m:s'});
//   clock.start();



class Clock {

    constructor({template}){
        this.template = template
    }

    render() {
        let date = new Date();
    
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        let output = this.template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);
    
        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    };
    
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000)
    };
}

let clock = new Clock({template: 'h:m:s'});
clock.start();
clock.stop();





