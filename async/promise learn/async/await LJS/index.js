// === Перепишите, используя async/await ===

// 1. function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       })
//   }
  
//   loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404

async function loadJson(url) {
    try {
        const response = await fetch(url);
    if (response.status === 200) {
        return await response.json();
    }
    throw new Error(response.status);
    } catch (error) {
        alert(error)
    }
}

loadJson('no-such-user.json')


// 2. class HttpError extends Error {
//     constructor(response) {
//       super(`${response.status} for ${response.url}`);
//       this.name = 'HttpError';
//       this.response = response;
//     }
//   }
  
//   function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new HttpError(response);
//         }
//       })
//   }
  
//   // Запрашивать логин, пока github не вернёт существующего пользователя.
//   function demoGithubUser() {
//     let name = prompt("Введите логин?", "iliakan");
  
//     return loadJson(`https://api.github.com/users/${name}`)
//       .then(user => {
//         alert(`Полное имя: ${user.name}.`);
//         return user;
//       })
//       .catch(err => {
//         if (err instanceof HttpError && err.response.status == 404) {
//           alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//           return demoGithubUser();
//         } else {
//           throw err;
//         }
//       });
//   }
  
//   demoGithubUser();


class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }

async function loadJson(url) {
    try {
        const response = await fetch(url);
    if (response.status === 200) {
        return await response.json();
    }
    throw new Error(response.status);
    } catch (error) {
        alert(error)
    }
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {

    let user;
    while(true) {
      let name = prompt("Введите логин?", "iliakan");
  
      try {
        user = await loadJson(`https://api.github.com/users/${name}`);
        break; // ошибок не было, выходим из цикла
      } catch(err) {
        if (err instanceof HttpError && err.response.status == 404) {
          // после alert начнётся новая итерация цикла
          alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        } else {
          // неизвестная ошибка, пробрасываем её
          throw err;
        }
      }
    }
  
  
    alert(`Полное имя: ${user.name}.`);
    return user;
  }
  
  demoGithubUser();


 
  
  






