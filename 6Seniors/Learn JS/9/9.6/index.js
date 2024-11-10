// Проверка класса: "instanceof"

// Оператор instanceof позволяет проверить, принадлежит ли объект указанному классу, с учётом наследования.

// obj instanceof Class

class Rabbit{};
let rabbit = new Rabbit();
// console.log(rabbit instanceof Rabbit); // true
// console.log(rabbit instanceof Object); // true

let arr = [1, 2, 3];
// console.log(arr instanceof Array); // true
// console.log(arr instanceof Object); // true


// Обычно оператор instanceof просматривает для проверки цепочку прототипов. Но это поведение может быть изменено при помощи статического метода Symbol.hasInstance

// Алгоритм работы obj instanceof Class работает примерно так:

// 1.Если имеется статический метод Symbol.hasInstance, тогда вызывать его:
// Class[Symbol.hasInstance](obj). Он должен вернуть либо true, либо false, и это конец.
// Это как раз и есть возможность ручной настройки instanceof.

// Пример:

// проверка instanceof будет полагать, что всё со свойством canEat - животное Animal
class Animal {
    static [Symbol.hasInstance](obj){
        if(obj.canEat) return true;
    }
}

let obj = { canEat: true};
console.log(obj instanceof Animal); // true
let obj2 = {name: "Шарик"}
console.log(obj2 instanceof Animal); // false

let obj3 = new Animal();
console.log(obj3 instanceof Animal); // false
let obj4 = Object.create(Animal, {
    canEat: {
        value: true,
        writable: false,  
        enumerable: true,  
        configurable: true  
    }
})
console.log(obj4 instanceof Animal); // true



// 2. Большая часть классов не имеет метода Symbol.hasInstance. В этом случае используется стандартная логика: проверяется, равен ли Class.prototype одному из прототипов в прототипной цепочке obj.

// Другими словами, сравнивается:

// obj.__proto__ === Class.prototype?
// obj.__proto__.__proto__ === Class.prototype?
// obj.__proto__.__proto__.__proto__ === Class.prototype?
// ...
// если какой-то из ответов true - возвратить true
// если дошли до конца цепочки - false


// в случае снаследованием, совпадение будет на втором шаге:

{
    class Animal{};
    class Rabbit extends Animal{};

    let rabbit = new Rabbit();
    console.log(rabbit instanceof Animal); // true

    console.log(rabbit.__proto__ === Animal.prototype); // (нет совпадения)
    console.log(rabbit.__proto__.__proto__ === Animal.prototype); // (совпадение!)
}



// Object.prototype.toString возвращает тип:

let a = [];
console.log(Object.prototype.toString.call(a)); // [object Array]

// для удобства запишем Object.prototype.toString в переменную

let objToString = Object.prototype.toString;

let b = null;
console.log(objToString.call(b)); // [object Null]

let c = {};
console.log(objToString.call(c)); // [object Object]

let d = 15;
console.log(objToString.call(d)); // [object Number]


// Используем call , чтобы выполнить функцию objToString в контексте this=a,
// this=b и тд.

let s = Object.prototype.toString;

console.log( s.call(123) ); // [object Number]
console.log( s.call(null) ); // [object Null]
console.log( s.call(alert) ); // [object Function]



// Symbol.toStringTag

// Поведение метода объектов toString можно настраивать, используя специальное свойство объекта Symbol.toStringTag.

let user = {
    [Symbol.toStringTag]: "User"
};

console.log( {}.toString.call(user) ); // [object User]


