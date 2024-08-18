// 1) Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
    name: "Василий Иванович",
    age: 35
  };

user = JSON.stringify(user, null, 2)

newUser = user;

// console.log(user);
// console.log(newUser);


// 2) Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
  // цикличные ссылки
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  let replaced = JSON.stringify(meetup, function replacer(key, value) {
    return (value == meetup && key != "") ? undefined : value;
  }, 1); // проверка на непустой key и ссылка на meetup

  // console.log(replaced);

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/


// 3) написать функцию, которая может искать некоторые записи JSON и возвращать соответствующие данные о персонажах.
// необходимо иметь возможность искать объекты в коллекции по любому из ключей объектов и возвращать массив всех совпадений.
// Базовая структура объекта JSON показана ниже:

const characters = {
  "characters": [
    {"name": "Bill Cipher", "age": "Unknown", "speciality": "warp reality"},
    {"name": "Dipper Pines", "age": "12", "speciality": "investigation"},
    {"name": "Mabel Pines", "age": "12", "speciality": "creativity"},
    {"name": "Stanley Pines", "age": "71", "speciality": "entrepreneurship"}
  ]
};

// Объект JSON предварительно загружен и к нему можно получить доступ с помощью переменных символов.

// Ваша функция также должна будет учитывать следующее:

// Переданное значение не соответствует ни одному ключу: в этом случае возвращается пустой массив.
// Переданный ключ не существует: в этом случае возвращается пустой массив.
// Передаваемое значение не должно быть чувствительным к регистру.

function getCharacters(obj, key, val) {
// Проверка на существование ключа и значения "characters" в переданном объекте
if (!obj || !Array.isArray(obj.characters)) {
  return [];
}

// Приведение ключа и значения к нижнему регистру для сравнения
const searchKey = key.toLowerCase();
const searchVal = val.toLowerCase();

// Фильтрация персонажей по указанному ключу и значению
const results = obj.characters.filter(character => {
  // Пробегаем по всем ключам текущего персонажа
  for (const charKey in character) {
    if (charKey.toLowerCase() === searchKey && character[charKey].toLowerCase() === searchVal) {
      return true;
    }
  }
  return false;
});

return results;
}

console.log(getCharacters(characters, "age", "12"));
