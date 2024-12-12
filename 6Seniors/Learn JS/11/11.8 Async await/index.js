// Async/await

// learn JS

// переписать, используя async/await:

// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       })
//   }
  
// loadJson('no-such-user.json') // (3)
// .catch(alert); // Error: 404



async function loadJson(url){
    const data = await fetch(url);
    if(data.status == 200){
        return await data.json()
    } else {
        throw new Error(data.status)
    }
}


loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404


















// разница

// promise.then(data => {});
// const data = await promise; // синхронноподобный синтаксис

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((data) => {
//         return data.json();  
//     })
//     .then(data => console.log(data))
//     .catch((error) => {})


// async function getData(){
//     console.log('1');
//     const data = await fetch('https://jsonplaceholder.typicode.com/todos')
//     console.log('2');
//     const data2 = await data.json();
//     console.log(data2);
//     console.log('3');

//     // .then((data) => {
//     //     return data.json();  
//     // })
//     // .then(data => console.log(data))
//     // .catch((error) => {})
// }

// getData();



// async function errorTest(){
//     try{
//         const data = await fetch('qwfqwfssf');

//         if(!responce.ok){
//             throw new Error(`Ошибка HTTP: ${response.status}`)
//         }

//         console.log(data);
//     } catch(err){
//         console.log(err);
//     }

// }

// errorTest()




// async function errorTest(){
//     let info = [];

//     try{
//         const data = await fetch('qwfqwfssf');
//         console.log(data);

//         info = await data.json();
//         console.log(info)

//     } catch(err){
//         console.log(err);
//     }

//     if(info.length === 0){
//         return;
//     } // если массив пустой, то выходим из функции

//     const text = info[0].text;
//     console.log(text);

// }

// errorTest()


// async function errorTest(){
//     const data = await fetch('fvdsfvsg').catch((err) => console.log('error', err))
//     console.log(data);
// }

// errorTest();





















