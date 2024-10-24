// Встроенные прототипы

// Object.prototype

let obj = {};
// alert(obj); // "[object Object]" 

// встроенный метод toString выводит "[object Object]"
// obj = {} - это то же самое, что и obj = new Object(), где Objecct - встроенная функция-конструктор для объектов с собственным свойством prototype, которое ссылается на огромный объект с методом toString и другими.

// Когда вызывается new Object() (или создаётся объект с помощью литерала {...}), свойство [[Prototype]] этого объекта устанавливается на Object.prototype по правилам, которые мы обсуждали в предыдущей главе.


let arr = [1,2,3];
// console.dir(arr);



// Добавить функциям метод "f.defer(ms)"

// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

// После этого должен работать такой код:

// function f() {
//   alert("Hello!");
// }

// f.defer(1000); // выведет "Hello!" через 1 секунду


function f(){
    console.log("Hello!");
}

Function.prototype.defer = function(time){
    setTimeout(this, time)
}

f.defer(1000)


// Добавьте функциям декорирующий метод "defer()"

// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

// Например, должно работать так:

// function f(a, b) {
//   alert( a + b );
// }

// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.


function g(a, b){
    console.log(a + b);
}

Function.prototype.defer = function(time){
    const originalFunction = this
    return function(a, b){
        setTimeout(() => originalFunction.call(this, a, b), time);
    }
}

g.defer(1000)(1, 2); // выведет 3 через 1 секунду.





