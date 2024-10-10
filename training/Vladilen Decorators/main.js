

function hello(){
    console.log("Hello", this); // this указывает на текущий контекст
};

const person = {
    name: "ALex",
    age: 27,
    sayHello: hello,
    sayHelloWindow: hello.bind(),
    logInfo: function(job, phone){
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`); 
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }

};

person.logInfo("frontend dev", 8928_332_6396); // Name is ALex Age is 27

// Но допустим у нас есть другой объект

const lena = {
    name: "Elena",
    age: 23,
};

// lena.logInfo(); // нет такого метода в объекте lena
// person.logInfo.call(lena, "manager", 8800_555_3535);
person.logInfo.apply([lena, "manager", 8800_555_3535]);
