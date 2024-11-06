// Наследование классов

// наследование классов - это способ расширения одного класса другим классом. Таким образом, мы можем добавить новый функционал к уже существующему.

// КЛЮЧЕВОЕ СЛОВО "extends"

class Animal {
    constructor(name){
        this.speed = 0;
        this.name = name;
    }

    run(speed){
        this.speed = speed;
        console.log(`${this.name} бежит со скоростью ${this.speed}.`);
    }

    stop(){
        this.speed = 0;
        console.log(`${this.name} стоит неподвижно.`);
    }
}

let animal = new Animal("Леопард")
animal.run("70 км/ч") // Леопард бежит со скоростью 70 км/ч.

// console.log(Animal.prototype); // {run: ƒ, stop: ƒ}
// console.log(Animal.prototype.constructor); // class Animal
// console.log(Animal.prototype.constructor.name); // Animal

// Но хотелось бы ещё добавить class Rabbit.
// поскольку кролики = это животные, класс Rabbit должен быть основан на Animal, иметь доступ к методам животных, так чтобы кролики могли делать то, что могут делать "общие животные".

// Синтаксис для расширения класса следующий: class Child extends Parent.
// создадим class Rabbit, который наследуется от Animal.

class Rabbit extends Animal {
    hide(){
        console.log(`${this.name} прячется`);
    }
}

let rabbit = new Rabbit("Белый кролик");

rabbit.run(10); // Белый кролик бежит со скоростью 10.
rabbit.hide(); // Белый кролик прячется
console.log(Animal.prototype); // {run: ƒ, stop: ƒ}
console.log(Rabbit.prototype); // Animal {hide: ƒ}

// объект класса Rabbit имеет доступ как к методам Rabbit, таким как rabbit.hide(), так и методам Animal, таким как rabbit.run().

// Внутри ключевое слово extends работает по старой доброй механике прототипов. Оно устанавливает Rabbit.prototype.[[Prototype]] в Animal.prototype. Таким образом, если метода не оказалось в Rabbit.prototype, JavaScript берёт его из Animal.prototype.

// TEST(это не работает TypeError: Class constructor Animal cannot be invoked without 'new') пытался не через extends, а сначала просто установить прототип и конструктор, и попытка через Object.create и call.
// {
//     class Animal {
//         constructor(name){
//             this.speed = 0;
//             this.name = name;
//         }
    
//         run(speed){
//             this.speed = speed;
//             console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//         }
    
//         stop(){
//             this.speed = 0;
//             console.log(`${this.name} стоит неподвижно.`);
//         }
//     }
    
//     let animal = new Animal("Леопард")
//     animal.run("70 км/ч") // Леопард бежит со скоростью 70 км/ч.

//     class Rabbit{
//         constructor(name){
//             // Вызов конструктора Animal, чтобы инициализировать свойства!!!
//         Animal.call(this, name);
//         }
//         hide(){
//             console.log(`${this.name} прячется`);
//         }
//     }

//    // устанавливаю наследование не через extends
    
//    Rabbit.prototype = Object.create(Animal.prototype);
//    Rabbit.prototype.constructor = Rabbit;
//    // Теперь Rabbit имеет доступ к методам Animal

//    let rabbit = new Rabbit("ТЕСТОВЫЙ КРОЛИК");
//    rabbit.hide(); // ТЕСТОВЫЙ КРОЛИК прячется
//    rabbit.run("15 км/ч"); // 

  
// }


// Синтаксис создания класса допускает указывать после extands не только класс, но и любое выражение.
// Пример вызова функции, которая генерирует родительский класс:

// В данном случае родительским классом для класса User является анонимный класс, созданный в функции f !!!

{
    function f(phrase) {
        return class {
          sayHi() { console.log(phrase); }
        };
      }
      
      class User extends f("Привет") {}
      
      new User().sayHi(); // Привет
      console.log(User); // class User extends f("Привет") {}
      User.prototype.test = function(){
        return `test`
      }
      console.log(User.prototype); // {test: ƒ}
}

// TEST создание класса, у которого родитель - анонимный класс как результат функции

    {
        function test(){
        return class{
            constructor(name, age){
                this.name = name;
                this.age = age;
            }

            getInfo(){
                console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
            }
        }
    }

        class User extends test(){}
        new User("Alex", 27).getInfo() // Имя: Alex, Возраст: 27
        console.log(User); // class User extends test(){}
        console.log(User.prototype.constructor); // class User extends test(){}

}


// Переоперделение методов

// По умолчанию все методы, не указанные в классе Rabbit, берутся непосредственно "как есть" из класса Animal. 
// Но если мы укажем в Rabbit собственный метод, например stop(), то он юудет использован вместо него:
{

    class Animal {
        constructor(name){
            this.speed = 0;
            this.name = name;
        }
    
        run(speed){
            this.speed = speed;
            console.log(`${this.name} бежит со скоростью ${this.speed}.`);
        }
    
        stop(){
            this.speed = 0;
            console.log(`${this.name} стоит неподвижно.`);
        }
    }

    class Rabbit extends Animal {
        stop(){
            this.speed = 0;
            console.log("Это метод Rabbit");
            // ...теперь это будет использоваться для rabbit.stop()
            // вместо stop(из класса Animal)
        }
    }

    let rabbit = new Rabbit(" тестовый")
    rabbit.stop(); // Это метод Rabbit
}

// Впрочем, обычно мы не хотим полностью заменить родительский метод, а скорее хотим сделать новый на его основе, изменяя или расширяя его функциональность. Мы делаем что-то в нашем методе и вызывем родительский метод до/после или в процессе.
// У классов есть ключевое слово "super" для таких случаев.

// super.method(...) вызывет родительский метод.
// super(...) для вызова родительского конструктора(работает только внутри нашего конструктора).

// Пусть наш кролик автоматически прячется при остановке:

{
    class Animal {

        constructor(name){
            this.speed = 0;
            this.name = name;
        }

        run(speed){
            this.speed = speed;
            console.log(`${this.name} бежит со скоростью ${this.speed}`);
        }

        stop(){
            this.speed = 0;
            console.log(`${this.name} стоит.`);
        }
    }

    class Rabbit extends Animal {
        hide(){
            console.log(`${this.name} прячется!`);
        }

        stop(){
            super.stop(); // вызываем родительский метод stop
            this.hide(); // и затем hide
        }
    }

    let rabbit = new Rabbit("SUPER кролик");

    rabbit.run(7); // SUPER кролик бежит со скоростью 7
    rabbit.stop(); // SUPER кролик стоит. SUPER кролик прячется!
}
// Теперь у класса Rabbit есть метод stop, который вызывает родительский super.stop() в процессе выполнения.

// Также у стрелочных функций нет super.
// При обращении к super стрелочной функции он берётся из внешней функции.

{
    class Animal {

        constructor(name){
            this.speed = 0;
            this.name = name;
        }

        run(speed){
            this.speed = speed;
            console.log(`${this.name} бежит со скоростью ${this.speed}`);
        }

        stop(){
            this.speed = 0;
            console.log(`${this.name} стоит.`);
        }
    }

    class Rabbit extends Animal {
        stop(){
            setTimeout(() => super.stop(), 100); // вызывет родительский super после 1 секунды.
        }
    }

    let rabbit = new Rabbit("ИНТЕРВАЛЬНЫЙ кролик")
    rabbit.stop(); // ИНТЕРВАЛЬНЫЙ кролик стоит.
}


// ПЕРЕОПРЕДЕЛЕНИЕ КОНСТРУКТОРА

// До сих пор у rabbit не было своего конструктора
// согласно спецификации, если класс расшираяет другой класс и не имеет конструктора, то автоматически создаётся такой "пустой" конструктор:

{
    class Animal {

        constructor(name){
            this.speed = 0;
            this.name = name;
        }

        run(speed){
            this.speed = speed;
            console.log(`${this.name} бежит со скоростью ${this.speed}`);
        }

        stop(){
            this.speed = 0;
            console.log(`${this.name} стоит.`);
        }
    }

    class Rabbit extends Animal {
        // генерируется для классов-потомков, у которых нет своего конструктора
        constructor(...args){
            super(...args)
        }
    }
}

// Как мы видим, он просто вызывет конструктор родительского класса. Так будет происходить, пока мы не создадим собственный конструктор.
// Давайте объявим конструктор для Rabbit. Он будет устанавливать earLength в дополнение к name:

{
    class Animal {

        constructor(name){
            this.speed = 0;
            this.name = name;
        }

        run(speed){
            this.speed = speed;
            console.log(`${this.name} бежит со скоростью ${this.speed}`);
        }

        stop(){
            this.speed = 0;
            console.log(`${this.name} стоит.`);
        }
    }

    class Rabbit extends Animal {

        constructor(name, earLength){
            this.speed = 0;
            this.name = name;
            this.earLength = earLength;
        }
    }

    // let rabbit = new Rabbit("Белый кролик", 10) // Error
}

// Не работает!!! 

// конструкторы в наследуемых классах должны обязательно вызывать super(...), и(!) делать это перед использованием this.

// в JavaScript существует различие между "функцией-конструктором наследующего класса" и всеми остальными. В наследующем классе соответствующая функция-конструктор помечена специальным внутренним свойством [[ConstructorKind]]:"derived".

// Разница в следующем:
// 1) когда выполняется обычный конструктор, он создаёт пустой объект и присваивает его this.
// 2) когда запускается конструктор унаследованного класса, он этого не делает. Вместо этого он ждёт, что это сделает конструктор родительского класса.

// Поэтому, если мы создаём собственный конструктор, мы должны вызывать super, в противном случае объект для this не будет создан, и мы получим ошибку.
// Чтобы конструктор Rabbit работал, он должен вызывать super() до того, как использовать this, чтобы не было ошибки:

{
    class Animal {

        constructor(name){
            this.speed = 0;
            this.name = name;
        }

        run(speed){
            this.speed = speed;
            console.log(`${this.name} бежит со скоростью ${this.speed}`);
        }

        stop(){
            this.speed = 0;
            console.log(`${this.name} стоит.`);
        }
    }

    class Rabbit extends Animal{
        constructor(name, earLength){
            super(name); // !!!
            this.earLength = earLength;
        }
    }

    // Теперь это работает
    let rabbit = new Rabbit("наследуемый кролик", 10);
    console.log(rabbit.name); // наследуемый кролик
    console.log(rabbit.earLength); // 10
}



