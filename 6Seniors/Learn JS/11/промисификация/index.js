// Промисификация

// Промисификация - это преобразование функции, которая принимает колбэк, чтобы она возврашала промис.

// Такое преобразование необходимо, так как многие функции и библиотеки омнованы на колбэках, а использование промисов удобнее, потому есть смысл использовать их.


const persons = [
    {
        id: 1,
        name: 'Alex'
    },
    {
        id: 2,
        name: 'Egor'
    },    {
        id: 3,
        name: 'Max'
    },
]

const promisify = (fn) => (...args) => {
    const pr = new Promise((resolve, reject) => {
        fn(...args, (err, data) => {
            if(err){
                return reject(err)
            }
            if(data){
                return resolve(data)
            }
        })
    })

    return pr;
}


const getPersonById = (...args) => {
    const [personId] = args;
    const callback = args.at(-1);


    setTimeout(() => {
        const currentPerson = persons.find(p => p.id === personId)
        const err = !currentPerson ? 'Person was not found' : null;
        callback(err, currentPerson) // err, data
    }, 0)
}


const getPersonByIdV2 = promisify(getPersonById)

// getPersonByIdV2(1)
//         .then((value) => {
//             console.log(value);
//             return getPersonByIdV2(2) 
//         })
//         .then((value) => {
//             console.log(value);
//             return getPersonByIdV2(3) 
//         })
//         .then((value) => {
//             console.log(value); 
//         })
//         .catch(console.log)


// getPersonById(1, (err, data) => {
//     if(data){
//         getPersonById(2, (err2, data2) => {
//             console.log(`We are friends: ${data.name} & ${data2.name} !!!`);
            
//         })
//     }
// })




function getData(callback){
    setTimeout(() => {
        const data = { name: "Alex"};
        callback(data)
    }, 2000)
}


function log(data){
    console.log(data);
}

// getData(log)

function getDataPromise(){
    return new Promise((resolve, reject) => {
        getData((data) => {
            if(!data){
                return reject("Ошибка")
            }
            resolve(data)
        })
    })
}

getDataPromise()
        .then(console.log)




        


















