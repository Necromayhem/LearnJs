//  promise



// console.log('Request data...');

// setTimeout(() => {
//     console.log('Preparing data...');

//     const backendData = {
//             server: "aws",
//             port: 2000,
//             status: "working"
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData);
//     }, 2000)
// }, 2000)

// данный подход плох тем, что имеет большую вложенность

// console.log('Request data...');


// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
// console.log('Preparing data...');
// const backendData = {
//         server: "aws",
//         port: 2000,
//         status: "working"
//         }
//         resolve(backendData) // передаём дату
//     }, 2000)
// })

// p.then((data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         data.modified = true
//         resolve(data);
//     }, 2000)
//     })
// })
// .then(clientData => {
//     console.log('Data received', clientData);
//     clientData.fromPromise = true;
//     return clientData;
// }).then(data => {
//     console.log('Modified', data);
// })
// .catch(err => console.error('Error', err))
// .finally(() => console.log('Finally'))


const sleep = ms => { return new Promise(resolve => {setTimeout(() => resolve(), ms)})}

// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(4000).then(() => console.log('After 4 sec')) 

// Promise.all([sleep(2000), sleep(5000)])
// .then(() => {
//     console.log("All promises")
// })

// Promise.race([sleep(2000), sleep(5000)])
// .then(() => {
//     console.log("Race promises")
// })


// показ аватара с гитхаб

function loadJson(url){
    return fetch(url)
        .then(response => response.json());
}

function loadGithubUser(name){
    return fetch(`https://api.github.com/users/${name}`)
        .then(response => response.json());
}

function showAvatar(githubUser){
    return new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 5000)
    })
}

// loadGithubUser("Necromayhem")
// .then((githubUser) =>{
//     return showAvatar(githubUser)
// }).then(githubUser => {
//     alert(`Закончили показ ${githubUser.name}`);
// })
// .catch(error => {
//     console.error('Ошибка:', error);
// });









 





























