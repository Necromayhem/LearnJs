// Классы, база

// Задачка 1: Создание простого класса


// Создай класс `Car`, который будет иметь следующие свойства:
// - `brand` (марка автомобиля)
// - `model` (модель автомобиля)
// - `year` (год выпуска)

// Добавь также метод `getInfo()`, который возвращает строку с информацией о машине в формате: `"Марка: {brand}, Модель: {model}, Год: {year}"`.

class Car {
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getInfo(){
        return `Марка: ${this.brand}, Модель: ${this.model}, Год: ${this.year}`
    }
}

const myCar = new Car("Toyota", "Corolla", 2020);
// console.log(myCar.getInfo()); // "Марка: Toyota, Модель: Corolla, Год: 2020"



// Задачка 2: Унаследование

// Создай класс `ElectricCar`, который будет наследоваться от класса `Car`. Добавь новое свойство:
// - `batteryCapacity` (емкость батареи в кВтч).

// Переопредели метод `getInfo()`, чтобы он содержал информацию о ёмкости батареи в дополнение к информации из базового класса.

class ElectricCar extends Car{
    constructor(brand, model , year, batteryCapacity){
        super(brand, model, year);
        this.batteryCapacity = batteryCapacity;
    }

    getInfo(){
        return `Марка: ${this.brand}, Модель: ${this.model}, Год: ${this.year}, Ёмкость батареи: ${this.batteryCapacity} kWh`
    }

}

const myElectricCar = new ElectricCar("Tesla", "Model 3", 2021, 75);
// console.log(myElectricCar.getInfo()); // "Марка: Tesla, Модель: Model 3, Год: 2021, Ёмкость батареи: 75 kWh"


// Задачка 3: Методы класса


// Добавь в класс `Car` метод `age()`, который будет возвращать возраст автомобиля на основе текущего года.

Car.prototype.age = function(){
    return new Date().getFullYear() - this.year
}

const oldCar = new Car('ваз', 2101, 1975)
// console.log(oldCar);
// console.log(oldCar.getInfo()); // Марка: ваз, Модель: 1972, Год: 70
// console.log(oldCar.age()); // 49


// Задачка 4: Статический метод


// Добавь в класс `Car` статический метод `compareAge(car1, car2)`, который принимает два объекта типа `Car` и возвращает строку, указывающую, какой из автомобилей старше.


Car.compareAge = function(car1, car2){
    if(car1.age() == car2.age()) return `У авто одинаковый возраст`;
    if(car1.age() > car2.age()) return `${car1.brand} ${car1.model} старше`;
    if(car1.age() < car2.age()) return `${car2.brand} ${car2.model} старше`;
};

const bmw = new Car("BMW", "x6", 2010);
const lada = new Car("LADA", "калина", 2013);

// console.log(Car.compareAge(bmw, lada)); // x6 старше


// Задачка 5: Комплексное задание


// Создай управление автопарком с классом `Garage`, который будет содержать:
// - Метод `addCar(car)`, который добавляет автомобиль в гараж.
// - Метод `getCars()`, который возвращает массив всех автомобилей.
// - Метод `getTotalAge()`, который возвращает общее количество лет для всех автомобилей в гараже.


class Garage {
    park = [];

    addCar(car){
        this.park.push(car)
    }

    getCars(){
        return this.park
    }

    getTotalAge(){
        return this.park.reduce((total, car) => total + car.age(), 0);
    }
}

const myGarage = new Garage();
myGarage.addCar(new Car("Dodge", "Challenger", 2016));
myGarage.addCar(new Car("Chevrolet", "Camaro", 2019));
console.log(myGarage.getTotalAge()); // 13
console.log(myGarage.getCars());


