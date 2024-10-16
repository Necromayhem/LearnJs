// Несколько задачек на тему геттеров и сеттеров без использования классов.

// Задача 1: Объект "Машина"
// Создайте объект car, который имеет следующие свойства:
// - brand (марка машины)
// - model (модель машины)
// - year (год выпуска)
// Используйте геттер, чтобы получать информацию о машине в формате "Марка Модель, Год выпуска". Реализуйте сеттер для изменения свойств brand, model и year.


const car = {
    brand: "BMW",
    model: "3",
    year: "2015",

    get info() {
        return `${this.brand} ${this.model}, ${this.year}`
    },

    set info(value) {
        // Разбиваем строку на части
        const [brand, model, year] = value.split(" ");
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

};

// console.log(car.info); // BMW 3, 2015

car.info = "Honda Civic 1997"
// console.log(car.info); // Honda Civic, 1997



// Задача 2: Объект "Треугольник"
// Создайте объект triangle, который будет представлять треугольник. Включите следующие свойства:
// - a (длина первой стороны)
// - b (длина второй стороны)
// - c (длина третьей стороны)

// Реализуйте геттер для вычисления периметра треугольника и сеттер для изменения размеров сторон.


const triangle = {
    a: 10,
    b: 12,
    c: 8,

    get p(){
        return this.a + this.b + this.c
    },

    set sides(value) {
        // Используем деструктуризацию в массиве
        const [a = this.a, b = this.b, c = this.c] = value;
        this.a = a;
        this.b = b;
        this.c = c;
    }
};

// console.log(triangle.p); // 30

triangle.sides = [1, 2, 3];
// console.log(triangle.p); // 6

triangle.sides = []; 
// console.log(triangle.p); // 6


// Задача 3: Объект "Пользователь"
// Создайте объект user, который имеет следующее свойство:
// - email (электронная почта)
// Используйте геттер для получения доменного имени из адреса электронной почты. Реализуйте сеттер для изменения электронной почты только в том случае, если она соответствует определенному шаблону (например, включает "@" и ".").

const user = {
    email: "ivanivanov@mail.ru",

    get mail(){
        return this.email
    },

    set mail(value){
        if(value.includes("@") && value.includes(".")){
            this.email = value
            
        }
        return this.email
    }
};

console.log(user.mail); // ivanivanov@mail.ru

user.mail = "petrpetrov@gmail.com"

console.log(user.mail); // petrpetrov@gmail.com




















