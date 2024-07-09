


function UserItemConstructor() {
    let items = []; // массив для хранения добавленных товаров и их цен

    this.getUserItem = function (name, price) {
        let userItem = document.createElement("li");
        userItem.textContent = `${name}, цена: ${price}`;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Удалить";
        deleteBtn.onclick = function () {
            userItem.remove();
            // Удаляем товар из массива при удалении
            items = items.filter(item => item.name !== name);
        };

        userItem.append(deleteBtn);

        // Добавляем информацию о товаре в массив
        items.push({name, price});

        return userItem;
    };

    this.getCheck = function() {
        let totalPrice = items.reduce((total, item) => total + item.price, 0);

        let itemDetails = items.map(item => `${item.name} - ${item.price}р`);

        return {
            itemsCount: items.length,
            itemsDetails: itemDetails,
            totalPrice: totalPrice
        };
    };

    this.createInputFields = function () {
        let nameInp = document.createElement("input");
        nameInp.type = 'text';

        let priceInp = document.createElement("input");
        priceInp.type = 'number';

        return {nameInp, priceInp};
    };

    this.initialize = function () {
        let {nameInp, priceInp} = this.createInputFields();

        let title = document.createElement("h1");
        title.textContent = "Список товаров";

        let list = document.createElement("ul");

        let addNewBtn = document.createElement("button");
        addNewBtn.textContent = "Добавить товар";

        addNewBtn.onclick = function () {
            let name = nameInp.value;
            let price = parseFloat(priceInp.value); // Преобразуем введенную цену в число

            let newItem = this.getUserItem(name, price);
            list.append(newItem);
            nameInp.value = "";
            priceInp.value = "";
        }.bind(this);

        let checkBtn = document.createElement("button");
        checkBtn.textContent = "Получить чек";
        checkBtn.onclick = function () {
            let checkInfo = this.getCheck();
            console.log(`Продукты в чеке: ${checkInfo.itemsCount}`);
            console.log(`Чек: ${checkInfo.itemsDetails.join(', ')}`);
            console.log(`Общая цена: ${checkInfo.totalPrice}p`);
            alert(`Продукты в чеке: ${checkInfo.itemsCount}`);
            alert(`Чек: ${checkInfo.itemsDetails.join(', ')}`);
            alert(`Общая цена: ${checkInfo.totalPrice}p`);
        }.bind(this);

        document.body.append(title, nameInp, priceInp, addNewBtn, checkBtn, list);
    };
}



let userItemConstructor1 = new UserItemConstructor();
userItemConstructor1.initialize();

let userItemConstructor2 = new UserItemConstructor();
userItemConstructor2.initialize();