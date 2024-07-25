

// Map

// const obj = {
//     name: 'Alex',
//     age: 27,
//     job: 'FE DEV',
// }


// const entries = [
//     ['name', 'Alex'],
//     ['age', 27],
//     ['job', 'FE DEV'],
// ]


// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));


// const map = new Map(entries)

// map
//     .set('newField', 42)
//     .set(true, 'qqq')
//     .set(obj, 'Value of object')
//     .set(NaN, 'NaN ??')

// console.log(map.get(NaN));

// console.log(map.has('job')); // 'job' есть? true
// console.log(map.delete('job')); // 'job' удалили? true
// console.log(map.has('job')); // 'job' есть? false

// console.log(map.size); // 7
// console.log(map.clear()); // undefined
// console.log(map.size); // 0



//=================================

// for(let entry of map.entries()){
//     console.log(entry);
// }


// for(let [key, value] of map){
//     console.log(key, value);
// }

// for(let value of map.values()){
//     console.log(value);
// }

// for(let key of map.keys()){
//     console.log(key);
// }

// map.forEach((val, key, map) => {
//     console.log(val, key);
// })

// =================================================


// const array = [...map]

// const array = Array.from(map)

// const mapObj = Object.fromEntries(map.entries())

// console.log(array);

// console.log(mapObj);

// ===================================================


// const users = [
//     {name: 'Elena'},
//     {name: 'Alex'},
//     {name: 'Irina'},
// ]

// const visits = new Map()

// visits
//     .set(users[0], new Date())
//     .set(users[1], new Date(new Date().getTime() + 1000 * 60))
//     .set(users[2], new Date(new Date().getTime() + 5000 * 60))


// function lastVisit(user){
//     return visits.get(user)
// }


// console.log(lastVisit(users[0]));


// ========================================================

// Set


// const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6])

// set.add(10).add(20).add(30).add(20)
// console.log(set);
// console.log(set.has(20));

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());
// console.log(set);

// for(let key of set){
//     console.log(key);
// }

// =========================================================


// function uniqValues(array){
//     return [...new Set(array)]
// }



// console.log(uniqValues([1,1,2,2,4,4,4,4,4,4,5,6,6,6,7]));




// =========================================================



// Weakmap



// let obj = {
//     name: "weakmap"
// }

// const arr = [obj]

// obj = null

// console.log(arr[0]);







// let obj = {
//     name: "weakmap"
// }

// const map = new WeakMap([
//     [obj, 'obj data']
// ])

// // get set delete has

// obj = null

// console.log(map.has(obj));
// console.log(map.get(obj));




// ================================================


// const cache = new WeakMap()


// function cacheUser(user){
//     if(!cache.has(user)){
//         cache.set(user, Date.now())
//     }
//     return cache.get(user)
// }


// let lena = {name: 'Elena'}
// let alex = {name: 'Alex'}

// cacheUser(lena)
// cacheUser(alex)

// lena = null;


// console.log(cache.has(lena));
// console.log(cache.has(alex));


// ============================================================



// Weakset

const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Irina'},
]

const visits = new WeakSet()

visits.add(users[0]).add(users[1])

users.splice(1, 1)

console.log(visits.has(users[0]));
console.log(visits.has(users[1]));




















