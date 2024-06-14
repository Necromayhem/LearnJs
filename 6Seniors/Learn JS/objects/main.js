"use strict"





let usersArr = [
    {
    name: "Таня",
    year: 1998,
    city: "Москва",
    student: true,
},
{
    name: "Вася", 
    year: 1999,
    city: "Москва",
    student: false,
}
]



for(let i = 0; i < usersArr.length; i++) {
    document.write(`<p>${i + 1}) ${usersArr[i].name}, год рождения: ${usersArr[i].year}, город: ${usersArr[i].city}</p>`)
}





// console.log(user1);
// console.log(user1['name']);
// console.log(user1.name);

// user1.name = 'Ирина'
// console.log(user1.name);
// user1.height = 180

// console.log(user1, user2);



// let userName = "Таня";
// let userYear = 1998;
// let userCity = "Москва";
// let userStudent = true;



// let userName2 = "Вася";
// let userYear2 = 1999;
// let userCity2 = "Москва";
// let userStudent2 = false;


// let userName3 = "Лена";
// let userYear3 = 1994;
// let userCity3 = "Воронеж";
// let userStudent3 = false;



// let userNameArr = ["Таня", "Вася", "Лена"];
// let userYearArr = [1998, 1999, 1994];
// let userCityArr = ["Москва", "Москва", "Воронеж"];
// let userStudentArr = [true, false, false];




