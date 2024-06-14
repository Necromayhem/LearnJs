// Это знакомое вам из прошлого видео меню, основанное на двух массивах. Измените код программы так, что бы меню строилось на основе одного массива объектов, а не на двух отдельных.

function getOpenBtn() {
  let openBtn = document.createElement("button")
  openBtn.classList.add("open-btn")
  openBtn.textContent = "Открыть меню"

  openBtn.onclick = function () {
    if (menu.classList.contains("open") == true) {
      openBtn.textContent = "Открыть меню"
      menu.classList.remove("open")
    } else {
      openBtn.textContent = "Закрыть меню"
      menu.classList.add("open")
    }
  }

  return openBtn
}

let menuArr = ["Youtube", "Телеграм", "Discord", "Домашние работы"]
let menuHrefArr = ["http://youtube.com/@alex_dudukalo", "https://t.me/frontend_du2", "https://discord.gg/frontend", "https://dudukalo.notion.site/Javascript-945c674247b44ec9b503a6c1cc97615e"]

let combinedObj = {};

for (let i = 0; i < menuArr.length; i++) {
    combinedObj[menuArr[i]] = menuHrefArr[i];
}

console.log(combinedObj);


function getMenu(combinedObj) {
  let menuList = document.createElement("ul")
  menuList.classList.add("menu")

  for (let i = 0; i < Object.keys(combinedObj).length; i++) {
    let item = document.createElement("li")
    item.classList.add("menu__item")

    let link = document.createElement("a")
    link.classList.add("menu__link")
    link.textContent = Object.keys(combinedObj)[i];
    link.href = combinedObj[Object.keys(combinedObj)[i]];

    item.append(link)
    menuList.append(item)
  }

  return menuList
}

let menu = getMenu(combinedObj)

document.body.append(getOpenBtn(), menu)