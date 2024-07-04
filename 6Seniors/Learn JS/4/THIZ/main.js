// function myFunction1(){
//     function myFunction() {
//         console.log(this);
//     }
//     myFunction()
// }





// myFunction1()


// const item = {
//     title: "phone",
//     fullPrice: 10000,
//     calculate(discountPercent = 0){
//         console.log(this.fullPrice - discountPercent / 100 * this.fullPrice);
//     }

// }
// item.calculate()



// function calcDiscount(age) {
//     if(age > 65){
//         console.log(this.price / 2);
//     } else {
//         console.log(this.price);
//     }
// }

// const item = {
//     title: "phone",
//     price: 1000,
// }

// calcDiscount.call(item, 70); // 500
// calcDiscount.call(item, 30); // 1000
// calcDiscount.apply(item, [70]); // 500
// calcDiscount.apply(item, [30]); // 1000
// // calcDiscount.bind(item, 70); // ничего нет
// // calcDiscount.bind(item, 30); // ничего нет , не вызывает функцию, но возвращает её с привязанным контекстом

// const calcDiscountForElderly1 = calcDiscount.bind(item, 30);
// const calcDiscountForElderly2 = calcDiscount.bind(item, 70);
// calcDiscountForElderly1();
// calcDiscountForElderly2();


// function createItem(title, price) {
//     this.title = title;
//     this.price = price;
//     // console.log(this);
// //    return this // по умлочнию new возвращает объект
// }
// // new createItem("phone", 10000);
// // new createItem("notebook", 34567);
// // new createItem("car", 4_000_000_000);

// // можем консоль лог в функции закоментить, а функции помещать в переменные

// const item1 = new createItem("item1", 1434340);
// const item2 = new createItem("item2", 45466);
// console.log(item1, item2);   




// const obj= {
//     getThis1: function(){
//         console.log(this);
//     },
//     getThis2: () => {
//         console.log(this.a);
//     },
// }

// obj.getThis1(); // obj
// obj.getThis2(); // window



// const obj = {
//     lastName: "Ivanov",
//     firstNames: ["Petr", "ivan"],
//     logFullNames1: function() {
//         this.firstNames.forEach(function (name){
//             console.log(`${this.lastName} ${name}`);
//         }, this)
//     },
//     logFullNames2: function() {
//         this.firstNames.forEach((name) => {
//             console.log(`${this.lastName} ${name}`);
//         })
//     },
// }

// obj.logFullNames1();
// obj.logFullNames2();



// const item = {
//     title: "phone",
//     logTitle: function(){
//         setTimeout((function() {
//             console.log(`Product: ${this.title}`);
            
//         }).bind(this), 3000)
//     }
// }

// item.logTitle();




// const createItem = function(item, price){
//     this.item = item;
//     this.price = price
//     console.log(this);
// }

// const newItem = new createItem("phone", 500);


function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
    // return {name: this.firstName + ' ' + this.lastName};
}

var n = new NameMe('John', 'Doe');
console.log(n.firstName); //Expected: John
console.log(n.lastName); //Expected: Doe
console.log(n.name); //Expected: John Doe






