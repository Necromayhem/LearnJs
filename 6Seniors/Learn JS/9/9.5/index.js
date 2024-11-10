// Расширение встроенных классов

// От встроенных классов, таких как Array, Map и других, тоже можно наследовать.
// Например, в этом примере PowerArray наследуется от встроенного Array:

// добавим один метод(можно более одного)
class PowerArray extends Array {
    isEmpty(){
        return this.length === 0;
    }
}

let arr1 = new PowerArray(1, 2, 3, 4, 5);
console.log(arr1.isEmpty()); // false

let arr2 = new PowerArray();
console.log(arr2.isEmpty()); // true

console.log(arr1.constructor === PowerArray); // true

// При помощи специального статического геттера Symbol.species можно вернуть конструктор, который JavaScript будет использовать в filter, map и других методах для создания новых объектов.

// Если бы мы хотели, чтобы методы map, filter и тд возвразали обычные массивы, мы могли бы вернуть Array в Symbol.species, вот так:

{
    class PowerArray extends Array {
        isEmpty() {
            return this.length === 0;
        }
        // встроенные методы массива будут использовать этот метод как конструктор
        static get [Symbol.species](){
            return Array;
        }
    }
    let arr = new PowerArray(1, 2, 5, 10, 50);
    console.log(arr.isEmpty()); // false

    // filter создаст новый массив, используя arr.constructor[Symbol.species] как конструктор
    let filteredArr = arr.filter(item => item >= 10)

    // filteredArr не является PowerArray, это Array
    // console.log(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function

    console.log(arr);

    
}