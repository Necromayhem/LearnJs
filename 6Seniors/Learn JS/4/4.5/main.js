"use strict"








// function calculte() {
//     let a = 100;
//     let b = 200;
    
//     let result = a + b;
//     let result2 = a - b;
//     return {one: result, two: result2}
// }

// let sum = calculte();

// console.log(sum.one);






// let calculte = () => {
//     let a = 10;
//     let b = 5;
//     return a + b;
// }

// let sum = calculte();
// console.log(sum);



function calculte(a, b) {
    let result = a + 2
    return result + b
}

let sum = calculte(5, 7);
console.log(sum);









//Click 1
console.log('Нажали на товар А');
addProduct(false, false);

//Click 2
console.log('Нажали на товар Б');
addProduct(true, true);

//Click 3
console.log('Нажали на товар В');
addProduct(false, false);

//Добавление товара(без клика)
function addProduct(ignoreBlocked = false, ignoreDelivery) {
    let  isAvailable =  isProductAvailable();
    if(!isAvailable) {
        alert("Товара нет в наличии!")
        return;
    }

    if(!ignoreBlocked) {
    
        let block = isBlocked();

    if(block) {
        console.log("вы заблокированы");
        return;
    } 
    }

    if (ignoreDelivery) {
        let delivery = possibleToDelivery();

        if (!delivery) { 
            console.log("Нет возможности доставить");
            return;
        }
    }
    
    

    console.log("Товар добавлен в корзину");
    return  "Всё хорошо";    

}


//Проверка наличия
function isProductAvailable() {

}

//Проверка юзера
function isBlocked() {

}

//Доступна ли юзеру доставка
function possibleToDelivery() {

}