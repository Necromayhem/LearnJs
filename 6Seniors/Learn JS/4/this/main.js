
//     const item = {
//         title: "Phone",
//         fullPrice: 100,
//         calculatePrice(discountPercent = 0) {
//             console.log(this.fullPrice - discountPercent/100 * this.fullPrice);
//         }
//     }

const { forEach } = require("lodash")

// item.calculatePrice(10)


// function calcDiscount(age) {
//     if(age > 65) {
//         console.log(this.price / 2);
//     } else {
//         console.log(this);
//     }
// }

// const item = {title: "phone", price: 1000}

// calcDiscount.call(item, 15);



// function CreateItem(title, price) {
//     this.title = title
//     this.price = price
//     // console.log(this);
//     return this
// }
// const item1 = new CreateItem("phone", 1000);
// const item2 = new CreateItem("pc", 3400);   
// const item3 = new CreateItem("ipad", 2200);
// console.log(item1, item2, item3);





// const obj = {
//     getThis1: function() {
//         console.log(this);
//     },
//     getThis2:() => {
//         console.log(this);
//     }
// }

// obj.getThis1()
// obj.getThis2()




// const obj = {
//     lastName: "Ivanov",
//     firstNames: ['Petr', 'Ivan'],
//     logFullNames1: function() {
//         this.firstNames.forEach(function(name){
//             console.log(`${this.lastName} ${name}`);
//         }, this)
//     },
//     logFullNames2: function() {
//         this.firstNames.forEach((name) => {
//             console.log(`${this.lastName} ${name}`);
//         })
//     },

// }

// obj.logFullNames1()


// const person = {
//     name: "John",
//     age: 30,
//     greet: function() {
//       console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
//     }
//   };
  
//   person.greet();
