"use strict"

function getOpenBtn() {
    let openBtn = document.createElement("button");
    openBtn.classList.add("open-btn");
    openBtn.textContent = "Открыть меню";

    openBtn.onclick = function() {
        if(menu.classList.contains("open")) {
            openBtn.textContent = "Открыть меню"
            menu.classList.remove("open")
        } else {
            openBtn.textContent = "Закрыть меню"
            menu.classList.add("open")
        }
    }

    return openBtn
} 

let menuArray = ["Главная страница", "О нас", "Услуги","Контакты", "Вход"]

let menuHrefArray = ["https://dzen.ru", "https://dzen.ru", "https://dzen.ru","https://www.youtube.com/?app=desktop&hl=ru", "https://dzen.ru"]


function getMenu(itemsArray, hrefArray) {
    let menuList = document.createElement("ul");
    menuList.classList.add("menu");

    for(let i = 0; i < itemsArray.length; i++) {
        let item = document.createElement("li");
        item.classList.add("menu__item");

        let link = document.createElement("a");
        link.classList.add("menu__link");
        link.textContent = itemsArray[i];
        link.href = hrefArray[i];

        item.append(link);
        menuList.append(item);
    }

    return menuList

}

let menu = getMenu(menuArray, menuHrefArray);

document.body.append(getOpenBtn(), menu);