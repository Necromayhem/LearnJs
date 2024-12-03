// Promise

// промисы помогают работать с асинхронным кодом
// убирают callback hell

// run((auth) => {
//     getUserInfo((user) => {
//         getUserGames((userGames) => {
//             getSomething('...')
//         })
//     })
// }) // callback hell

// run()
//     .then(getUserInfo)
//     .then(getUserGames)
//     .then(getSomething); // Promise


// делаю свой callback hell


// function fetchUserInfo(callback){
//     setTimeout(() => {
//         //fetch
//         const data = { id: 1, name: "Alex"};
//         callback(data);
//     }, 2000)
// }

// function fetchUserGames(id, callback){
//     setTimeout(() => {
//         //fetch(id) - запрос у сервера "дай игры юзера с этим id"
//         const data = ["game1", "game2"];
//         callback(data);
//     }, 2000)
// }

// function run(){
//     fetchUserInfo((userInfo) => {
//         console.log(userInfo);

//         fetchUserGames(userInfo.id, (userGames) => {
//             console.log(userGames)
//         })
//     });
// }

// run();

// перепишу на промисах

// function fetchUserData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // fetch
//         const data = { id: 1, name: "Alex"};

//         resolve(data)
//         // reject('Ошибка 1')
//         }, 1000)
//     })
// }


// function fetchUserGames(id){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // fetch(id)
//         const data = ["game1", "game2"];

//         // resolve(data)
//         reject('Ошибка 2')
//         }, 1000)
//     })
// }

// function run(){
//     fetchUserData()
//         .then((userData) => {
//             console.log(userData);
//              return fetchUserGames(userData.id)
//         })
//         .then((userGames) => {
//             console.log(userGames)
//         })
//         .catch((message) => {
//             console.log(message);
//         })
//         .finally(() => {
//             console.log('промис завершился.');
//         })
//     }
            
    
// run()


// Practice



// function fetchGames(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // fetch
//             const dataFromServer = 'kakayatoxueta'
//             // const gamesFromServer = [
//             //     {id: 1, name: "Человек-паук"}, 
//             //     {id: 2, name: "Марио"}
//             // ];

//             if(Array.isArray(dataFromServer)){
//                 resolve(gamesFromServer);
//             } else {
//                 reject('Что-то не так с данными');
//             }

            
//         }, 2000)
//     });
// }

// function renderLoading(){
//     const body = document.querySelector('body');

//     const loading = document.createElement('div');
//     loading.id = 'loading';
//     loading.textContent = "ЗАГРУЗКА";

//     body.append(loading)
// }


// function renderGames(games){
//     const body = document.querySelector('body');

//     const loading = document.querySelector('#loading');
//     loading.remove();

//     games.forEach((game) => {
//         const gameElement = document.createElement('div');
//         gameElement.innerText = `Игра: ${game.name}`;
//         gameElement.className = 'game-element';

//         body.append(gameElement)
// })
// }

// renderLoading();

// fetchGames()
//     .then((games) => {
//         renderGames(games);
//     })
//     .catch((err) => {
//         console.error(err);
//     })



function fetchVideos(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // fetch(id)
        const data = ["видео1", "видео2"];
        console.log('данные получены');

        resolve(data)
        
        }, 1000)
    })
}

function fetchShorts(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // fetch(id)
        const data = ["шортс1", "шортс2"];
        console.log('данные 2 получены');


        resolve(data)

        }, 2000)
    })
}


function main(){
    console.log('Загрузка');

    Promise.all([fetchVideos(), fetchShorts()])
        .then((data) => {
            console.log(data);
        })
        .catch(() => {

        })

}

main();




