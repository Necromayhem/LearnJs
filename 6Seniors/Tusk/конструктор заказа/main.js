// [Конструктор заказа. Основы. learnjs 1.1..1.4]
// 1. написать функцию конструктор для заказа в магазине.
// Новый инстанс - новый заказ
// у него будут методы
// addItem(item, count) - добавить итем в чек (+ имя +цена)
// removeItem(item, count) - убрать из чека count итемов (если не указано сколько - убрать все). Нельзя убрать больше чем было в чеке
// getCheck() - получить информацию сколько каких итемов в чеке, общую цену, опционаольно цену за каждую позицию (за 3 пивка - 300р). Формат произвольный, чтобы был читабельный
// lockOrder() - после вызова метода функции addItem/removeItem не должны делать что-либо. Можно как-то сообщать об ошибке, можно просто молча.
// unlockOrder() - убрать блокировку заказа - снова можно добавлять итемы

// Формат item - объект с 1. названием итема 2. ценой за штуку. 2 итема с одинаковым именем считаем одной позицией в чеке

// 3. использовать отладку (debugger) при решении в хроме. Если получится без отладки - самому допустить ошибку и найти ее при отладке через интерфейс девтулзов 


function Order(){
    this.check = []; // Товары добавляются сюда

    this.locked = false // Состояние блокировки

    this.lockOrder = () => {
        this.locked = true;
    }

    this.unlockOrder = () => {
        this.locked = false;
    }

    this.addItem = (item, price) => {
        if(this.locked){
            alert("Заказ заблокирован!");
            console.log("Заказ заблокирован!");
            return this;
        }

        this.check.push([item, price]);
        return this;
    };

    this.removeItem = (count) => {
        if(this.locked){
            alert("Заказ заблокирован!");
            console.log("Заказ заблокирован!");
            return this;
        }

        this.check.splice(this.check.length - count)
    };

    this.getCheck = () => {
        let totalSum = 0;
        let totalItems = {};
        let itemPrices = {};

        for(let i = 0; i < this.check.length; i++){
            let itemName = this.check[i][0];
            let itemPrice = this.check[i][1];
            
            if(totalItems[itemName]){
                totalItems[itemName]++;
            } else {
                totalItems[itemName] = 1;
            }

            totalSum += itemPrice;
            if(itemPrices[itemName]){
                itemPrices[itemName] += itemPrice;
            } else {
                itemPrices[itemName] = itemPrice;
            }
        }
        
        let result = "Чек:\n";
        for(const item in totalItems){
            result += `${item}: ${totalItems[item]} шт. (общая цена - ${itemPrices[item]}р)\n`;
        }
        result += `Общая сумма: ${totalSum}р`;

        return result;
    };
}

// Заказ 1
let order1 = new Order();


let item1 = order1.addItem("пиво", 80);
let item2 = order1.addItem("водка", 400);
let item3 = order1.addItem("хлеб", 65);
let item4 = order1.addItem("колбаса", 350);
let item5 = order1.addItem("сметана", 79);
let item6 = order1.addItem("горчица", 59);
let item7 = order1.addItem("мороженое", 394);
let item8 = order1.addItem("рыба", 600);
let item9 = order1.addItem("яблоки", 150);
let item10 = order1.addItem("картошка", 120);
let item11 = order1.addItem("пиво", 80);
let item12 = order1.addItem("пиво", 80);
let item13 = order1.addItem("хлеб", 90);
let item14 = order1.addItem("колбаса", 500);
let item15 = order1.addItem("чипсы", 90);
let item16 = order1.addItem("чипсы", 120);
let item17 = order1.addItem("чипсы", 150);
let item18 = order1.addItem("чипсы", 180);
let item19 = order1.addItem("мороженое", 85);
let item20 = order1.addItem("мороженое", 250);

console.log(order1.check);


// Удаление из чека

// order1.removeItem(5)
// console.log(order1.check);


// Запрос чека

// console.log(order1.getCheck());


// Блок/разблок заказа

// console.log(order1.lockOrder());


// let item21 = order1.addItem("мороженое", 250);
// console.log(order1.getCheck());

// console.log(order1.unlockOrder());
// let item22 = order1.addItem("мороженое", 250);
// console.log(order1.getCheck());
