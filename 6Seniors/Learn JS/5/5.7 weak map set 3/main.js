// Weakmap

let obj = {name: 'weakmap'}

// const arr = [obj]

// obj = null

// console.log(arr[0]); // {name: 'weakmap'}
// в weakmap ключами могут быть только объекты

const map = new WeakMap([
    [obj, 'obj data']
]);

// get set delete has

console.log(map.has(obj)); // true
console.log(map.get(obj)); // obj data

obj = null // обнуляем

console.log(map.has(obj)); // false
console.log(map.get(obj)); // undefined

console.log(map); //WeakMap { <items unknown> }

//==================================================

const cache = new WeakMap();

function cacheUser(user){
    if(!cache.has(user)){
        cache.set(user, Date.now())
    }
    return cache.get(user)
}

let lena = {name: "Elena"}
let alex = {name: "Alex"}

cacheUser(lena)
cacheUser(alex)

lena = null;

console.log(cache.has(lena)); // false
console.log(cache.has(alex)); // true

//=====================================================================


// Weakmap
// ключи только объекты

const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Irina'},
]

const visits = new WeakSet()

visits.add(users[0]).add(users[1])

users.splice(1,1) // удаление юзера

console.log(visits.has(users[0])); // true
console.log(visits.has(users[1])); // false
