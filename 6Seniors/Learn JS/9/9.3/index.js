// Статические свойства и методы

// Мы также можем присвоить метод самому классу. Такие методы называются статическими.
// В объявлении класса они добавляются с помощью ключевого слова static, например:

class User {
    static staticMethod(){
        console.log(this === User);
    }
}

// User.staticMethod(); // true

// Это практически тоже самое, что присвоить метод напрямую как свойство функции:

{
    class User{}

    User.staticMethod = function(){
        console.log(this === User);
    }

    // User.staticMethod(); // true
}

// Значеним this при вызове User.staticMethod() является сам конструктор класса User(привило "объект до точки").
// Обычно статические методы используются для реальзации функций, которые будут принадлежать классу в целом, но не какому-либо его конкретному объекту.

// Например, есть объекты статей Article, и нужна функция для их сравнения.
// Естественное решение - сделать для этого статический метод Article.compare:

class Article {
    constructor(title, date){
        this.title = title;
        this.date = date;
    }

    static compare(articleA, articleB){
        return articleA.date - articleB.date;
    }
}

// использование

let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);

// console.log(articles[0].title); // CSS

// Здесь метод Articles.compare стоит "над" статьями, как средство для их сравнения. Это метод не отдельной статьи, а всего класса.

// Другим примером может быть так называемый "фабричный" метод.
//Скажем, нам нужно несколько способов создания статьи:

// 1) Создание стати через заданные параметры(title, date и т.д.)
// 2) Создание пустой статьи с сегодняшней датой.
// 3) ...или как-то ещё.

// Первый саособ может быть реальзован через конструктор. А для второго можно использовать статический метод класса:

{
    class Article {
        constructor(title, date){
            this.title = title;
            this.date = date;
        }

        static createdays(){
            // помним, что this = Article
            return new this("Сегодняшний дайджест", new Date());
        }
    }

    let article = Article.createdays()
    // console.log(article.title); // Сегодняшний дайджест
}


// Наследование статических свойств и методов

// статические свойства и методы наследуются.
// например, метод Animal.compare в коде нижу наследуется и доступен как Rabbit.compare:

class Animal {

    constructor(name, speed){
        this.speed = speed;
        this.name = name;
    }

    run(speed=0){
        this.speed += speed;
        console.log(`${this.name} бежит со скроростью ${this.speed}.`);
    }

    static compare(animalA, animalB){
        return animalA.speed - animalB.speed;
    }
}

  // Наследует от Animal
  class Rabbit extends Animal {
    hide(){
        console.log(`${this.name} прячется!`);
    }
}

let rabbits = [
    new Rabbit("Белый кролик", 10),
    new Rabbit("Чёрный кролик", 5)
];

rabbits.sort(Rabbit.compare);

// rabbits[0].run() // Чёрный кролик бежит со скроростью 5.

// console.log(Rabbit.__proto__.prototype);


{
    
class Rabbit extends Object {
    constructor(name) {
        super(name); // надо вызвать конструктор родителя, когда наследуемся
        this.name = name;
    }
  }
  
  let rabbit = new Rabbit("Кроль");
  
  
  alert( rabbit.hasOwnProperty('name') ); // Ошибка
}
  






