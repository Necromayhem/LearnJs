// Обработка ошибок промисы

// Задача 1: Простой запрос с ошибкой

// Создайте функцию loadData, которая принимает URL и использует fetch для получения данных. Обработайте возможные ошибки и выведите сообщение в консоль, если произошла ошибка.

function loadData(url){
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Возвращаем данные
        })
        .catch(err => {
            console.log("Ошибка при загрузке данных: ", err);
        });
}

// loadData('https://api.example.com/invalid-url')


// Задача 2: Обработка ошибок при получении данных

// Создайте функцию getUser, которая получает данные пользователя по его ID с использованием fetch. Если пользователь не найден (состояние ответа 404), выведите сообщение "Пользователь не найден". В случае других ошибок выведите сообщение "Произошла ошибка".

function getUser(userId){

    const url = `https://api.example.com/users/${userId}`;

    return fetch(url)
        .then(response => {
            if(response.status === 404){
                throw new Error(`Пользователь не найден: ${response.status}`);
            } else if(!response.ok){
                throw new Error("Произошла ошибка")
            }
            return response.json();
        })
        .catch(err => {
            console.log(err)
        })
}


// getUser(1)


// Задача 3: Обработка нескольких промисов

// Создайте функцию loadUsers, которая делает несколько запросов на получение пользователей по массиву ID. Обработайте ошибки так, чтобы даже если один запрос завершится ошибкой, остальные продолжили выполняться. Выведите информацию о каждом пользователе или сообщение об ошибке для каждого ID в массиве.

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig',
    'https://api.github.com/users/testerroruser'
];

function loadUsers(urls){
    // Преобразуем каждый url в промис, возвращаемый fetch
    let requests = urls.map(url => {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
                }
                return response.json();
            })
            .catch(err => {
                console.error(`Не удалось загрузить пользователя по URL ${url}: ${err.message}`);
                return null; // Возвращаем null в случае ошибки
            });
    });

    return Promise.allSettled(requests)
        .then(results => results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Пользователь ${urls[index]} загружен:`, result.value);
            } else {
                console.log(`Ошибка при загрузке ${urls[index]}: ${result.reason}`);
            }
        }));
}

loadUsers(urls);













