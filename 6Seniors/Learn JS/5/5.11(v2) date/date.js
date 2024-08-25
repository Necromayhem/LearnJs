// Date

// let now = new Date();
// console.log(now);

// let date = new Date(24 * 3600 * 1000); // один день
// console.log(date);

// let date = new Date("2017.02.26 15:30:54"); 
// console.log(date);

// let date = new Date("2017.02.26"); 
// date.setFullYear(2019) // изменить год
// date.setMonth(0) // месяцы от 0 
// date.setDate(11) // изменить день

// console.log(date);



// let date = new Date("2017-02-12");

// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDate());
// console.log(date.getHours()); // 3 по дефолту


//длинная запись
// function getDate(date){
//     let result = '';

//     if(date.getDate() < 10){
//         result = result + '0'
//     }
//     result = result + date.getDate() + '.';

//     if(date.getMonth() < 9){
//         result = result + '0'
//     }
//     result = result + +(date.getMonth() + 1) + '.';

//     result = result + date.getFullYear();

//     return result;
// }


// let date = new Date("2017-10-5")
// console.log(getDate(date));


// через тернарные операторы
function getDate(date){
    let result = '';

    result = date.getDate() < 10 ? '0' + date.getDate() + '.' : date.getDate() + '.';

    result = result + (date.getMonth() < 9 ? '0' + +(date.getMonth() + 1) + '.' : +(date.getMonth() + 1) + '.');

    result = result + date.getFullYear();

    return result;
}


// let date = new Date("2017-10-5")
// console.log(getDate(date));



// let date = new Date("2017-10-2")

// date.setDate(date.getDate() + 5)

// console.log(getDate(date));


// let start = Date.now()

// for(let i = 0; i < 10000000; i++){
//     let d = i*222*i
    
// }

// let finish = Date.now()

// console.log(finish - start);


// let date1 = new Date('11.06.2017')
// let date2 = new Date('12.06.2017')


// console.log(date1.getTime() > date2.getTime()); // false
// console.log(date1.getTime() < date2.getTime()); // true
// console.log(date1.getTime() == date2.getTime()); // false
// console.log(date1.getTime() === date2.getTime()); // false



let users = [{
        name: 'Алекс',
        birthday: new Date(2017, 4, 12)
    },
    {
        name: 'Оля',
        birthday: new Date(2011, 7, 11)
    },
    {
        name: 'Юля',
        birthday: new Date(1997, 12, 8)
    }   
];


// users = users.sort((a, b) => (a.birthday - b.birthday))

// users = users.filter(function(user){
//     if(user.birthday.getFullYear() > 2000) return true
// })

let search = '2011.08.11'
let searchDate = new Date(search)

users = users.filter(function(user){
    if(user.birthday.getTime() == searchDate.getTime()) return true
})

// console.log(users);


function getAge(birthDate){
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth - birthDate.getMonth();
    if(m < 0 || (m === 0 && today.getDate() < birthDate.getDate())){
        age--;
    }
    return age
}

console.log(getAge(searchDate));








