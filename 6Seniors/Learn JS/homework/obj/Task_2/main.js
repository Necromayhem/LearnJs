// При запуске этого приложение, вам предлагается ввести данные пользователя. После ввода данных, в документе отобразится карточка с данными. Хранить информацию о пользователя в разных переменных не удобно, предлагаю использовать для этого объект.

// Изменить код так, что бы информация о пользователе хранилась в объекте. А функция отрисовки карточки принимала только один параметр - объект. 

// Пример:


let userName = prompt("Введите имя пользователя")
let userYear = Number(prompt("Введите год рождения"))
let userCity = prompt("Введите город")
let userCar = confirm("У пользователя есть машина?")


let user = {
  name: userName,
  year: userYear,
  city: userCity,
  car: userCar,
};

  console.log(user);

function getStrong(text) {
  let strong = document.createElement("strong")
  strong.textContent = text
  return strong
}
 

  
function getUserCard(name, year, city, car) {
  let card = document.createElement("div")
  card.classList.add("card")

  let title = document.createElement("h2")
  title.classList.add("card__title")
  title.textContent = name

  let yearValue = document.createElement("p")
  yearValue.classList.add("card__value")
  yearValue.textContent = "Год рождения: "
  yearValue.append(getStrong(year))

  let ageValue = document.createElement("p")
  ageValue.classList.add("card__value")
  ageValue.textContent = "Возраст: "
  ageValue.append(getStrong(2023 - year))

  let cityValue = document.createElement("p")
  cityValue.classList.add("card__value")
  cityValue.textContent = "Город: "
  cityValue.append(getStrong(city))

  let carValue = document.createElement("p")
  carValue.classList.add("card__value")
  carValue.textContent = "Машина: "

  if (car === true) {
    carValue.append(getStrong("Есть"))
  } else {
    carValue.append(getStrong("Нет"))
  }

  card.append(
    title,
    yearValue,
    ageValue,
    cityValue,
    carValue
  )

  return card
}


  

  


  // 
  

  let newUserCard = getUserCard(userName, userYear, userCity, userCar)
document.body.append(newUserCard)