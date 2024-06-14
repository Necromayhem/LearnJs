// В этом гардеробе отображается список одежды с названием вещи, её размером и кнопкой изменения. Но в приложении нет возможности добавления новой вещи и удаления её из списка. 

// Добавьте кнопку для добавления новой вещи в гардероб с указанием названия и размера. Для этого можно использовать окно ввода prompt(). 

// Добавьте возможность удаления элемента списка.

// Массив содержимого гардероб
let clothArray = [
  {
    title: "Футболка",
    size: 48
  },
  {
    title: "Рубашка",
    size: 46
  },
  {
    title: "Штаны",
    size: 44
  },
]

// Функция, возвращающая элемент списка
function getClothItem(index, cloth) {
  let clothItem = document.createElement("li")
  clothItem.textContent = `${index + 1}) ${cloth.title}, размер: ${cloth.size}`

  // Кнопка редактирования записи
  let editClothBtn = document.createElement("button")
  editClothBtn.textContent = "Изменить"



  editClothBtn.onclick = function () {
    cloth.title = prompt("Введите название вещи")
    cloth.size = Number(prompt("Введите размер"))

    render(clothArray) // Запускаем перерисовку списка
  }


  //Кнопка добавления вещи

  let addClothBtn = document.createElement("button")
  addClothBtn.textContent = "Добавить"

  addClothBtn.onclick = function() {
  let newTitle = prompt("Введите название вещи")
  let newSize = Number(prompt("Введите размер"))

  let newCloth = {
    title: newTitle,
    size: newSize
  }
  clothArray.push(newCloth) 
  render(clothArray) 
  }

// Кнопка удаления вещи
let deleteClothBtn = document.createElement("button")
deleteClothBtn.textContent = "Удалить"

deleteClothBtn.onclick = function () {
  clothArray.splice(index, 1) /
  render(clothArray) 
}

  clothItem.append(editClothBtn, addClothBtn, deleteClothBtn)

  return clothItem
}







// Заголовок
let title = document.createElement("h1")
title.textContent = "Гардероб"

let list = document.createElement("ul") // Список

// Функция отрисовки списка
function render(arr) {
  list.innerHTML = "" // Очищаем список перед отрисовкой

  // Начинаем отрисовку, используя массив и цикл
  for (let i = 0; i < arr.length; i++) {

    let newClothItem = getClothItem(i, arr[i])
    list.append(newClothItem)

  }
}

// Запускаем отрисовку списка при загрузке страницы
render(clothArray)

document.body.append(title, list)