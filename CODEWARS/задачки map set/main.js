// 1) Map: Создайте карту, в которой ключами будут объекты с информацией о сотрудниках (имя, должность), а значениями - их рабочие проекты. Реализуйте функцию, которая будет выводить список проектов для конкретного сотрудника.


let employeesProjects = new Map();

let employee1 = {name: 'Иван', position: 'Разработчик'};
let employee2 = {name: 'Егор', position: 'Тестировщик'};
let employee3 = {name: 'Олег', position: 'Тимлид'};
let employee4 = {name: 'Денис', position: 'Аналитик данных'};
let employee5 = {name: 'Максим', position: 'DevOps'};
let employee6 = {name: 'Владимир', position: 'SEO-оптимизатор'};

employeesProjects.set(employee1, ['Проект A', 'Проект B'])
employeesProjects.set(employee2, ['Проект A', 'Проект D'])
employeesProjects.set(employee3, ['Проект C', 'Проект B'])
employeesProjects.set(employee4, ['Проект D', 'Проект B'])
employeesProjects.set(employee5, ['Проект D', 'Проект C'])
employeesProjects.set(employee6, ['Проект C', 'Проект B'])

function getProjectsForEmployee(employee){
  return employeesProjects.get(employee)
}

console.log(getProjectsForEmployee(employee1)); // ['Проект A', 'Проект B']
console.log(getProjectsForEmployee(employee4)); // ['Проект D', 'Проект B']

//=========================================================================


// 2) Set: Создайте множество, в котором будут храниться уникальные объекты, представляющие заказы в интернет-магазине. Реализуйте функцию, которая будет проверять наличие определенного заказа в множестве.


let ordersSet = new Set();

let order1 = {id: 1, product: 'Джинсы', quantity: 3}
let order2 = {id: 2, product: 'Майка', quantity: 9}
let order3 = {id: 3, product: 'Куртка', quantity: 2}
let order4 = {id: 4, product: 'Кепка', quantity: 1}
let order5 = {id: 5, product: 'Шорты', quantity: 5};

ordersSet.add(order1);
ordersSet.add(order2);
ordersSet.add(order3);
ordersSet.add(order4);

function hasOrder(order) {
  if (order === undefined || typeof order !== 'object' || order === null) {
    console.log('Ошибка: передан несуществующий или некорректный заказ');
    return false;
  }

  for (let existingOrder of ordersSet) {
    if (existingOrder.id === order.id) {
      console.log('Есть такой заказ');
      return true;
    }
  }
  console.log('Такого заказа нет');
  return false;
}

console.log(hasOrder(order1)); // Есть такой заказ
console.log(hasOrder(order5)); // Такого заказа нет

//==========================================================================


// 3) WeakMap: Создайте слабую карту для хранения информации о пользователях чата: ключом будет объект-пользователь, а значением - массив из недавних сообщений. Реализуйте функцию, которая будет получать последние сообщения для конкретного пользователя.


let userChatMessages = new WeakMap();
let user1 = {id: 1, name: 'Мария'};
let user2 = {id: 1, name: 'Анна'};

userChatMessages.set(user1, ['Привет', 'Как дела?', 'Что нового?']);
userChatMessages.set(user2, ['Хай', 'Отлично!', 'А у тебя?']);

function getLastMessagesForUser(user){
  return userChatMessages.get(user)
}

user1 = null

console.log(getLastMessagesForUser(user1));
console.log(getLastMessagesForUser(user2));

console.log(userChatMessages); // остался только obj user2
// если поменять WeakMap на Map, то user1 останется в памяти

//========================================================================


// 4) WeakSet: Создайте слабое множество для хранения ссылок на объекты-подписчиков. Реализуйте функцию, которая будет уведомлять всех подписчиков об изменении данных.


let subscribersWeakSet = new WeakSet();
let subscribersList = [];

let subscriber1 = {id: 1, name: 'Alex'};
let subscriber2 = {id: 2, name: 'Petr'};

subscribersWeakSet.add(subscriber1);
subscribersWeakSet.add(subscriber2);

subscribersList.push(subscriber1, subscriber2);

function infoSubscribers(){
  subscribersList.forEach((sub) => {
    if (subscribersWeakSet.has(sub)) {
      console.log(`${sub.name}, данные обновлены!`);
    }
  });
}

infoSubscribers() // WeakSet/Weakmap не поддерживают forEach
// Поэтому сначала проверяем на has и пушим в массив