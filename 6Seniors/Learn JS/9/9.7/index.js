// Примеси

// Примесь - это класс, методы которого предназначены для использования в других классах, причём без использования примеси.
// Другими словами, примесь определяет методы, которые реализуют определённое поведение. Мы не используем примесь саму по себе, а используем её, чтобы добавить функциональность другим классам.


// Простейший способ реализовать примесь JavaScript - это создать объект с полезными методами, которые могут быть легко добавлены в прототип любого класса.

// примесь
// let sayHiMixin = {
//     sayHi(){
//         console.log(`Привет, ${this.name}`);
//     },

//     sayBye(){
//         console.log(`Пока, ${this.name}`);
//     }
// };

// использование

// class User{
//     constructor(name){
//         this.name = name;
//     }
// }

// копируем методы
// Object.assign(User.prototype, sayHiMixin);

// теперь User может сказать Привет/Пока

// new User("Вася").sayHi(); // Привет, Вася
// new User("Вася").sayBye(); // Пока, Вася

// Это не наследование, а просто копирование методов. Таким образом, класс User может наследовать от другого класса, но при этом также включать в себя примеси, "подмешивающие" другие методы, например:

// {
//     class User extends Person{
//         //...
//     }

//     Object.assign(User.prototype, sayHiMixin);
// }


// примеси могут наследовать друг друга.
// В примере ниже sayHiMixin наследует от sayMixin:\


    let sayMixin = {
        say(phrase){
            console.log(phrase);
        }
    };

    let sayHiMixin = {
        __proto__: sayMixin, // // (или мы можем использовать Object.setPrototypeOf для задания прототипа)

        sayHi(){
            // вызываем метод родителя
            super.say(`Привет, ${this.name}`)
        },

        sayBye(){
            super.say(`Пока, ${this.name}`);
        }
    };

    class User{
        constructor(name) {
            this.name = name;
        }
    }

    // копируем методы
    Object.assign(User.prototype, sayHiMixin);  

    // теперь User может сказать Привет
    // new User("Вася").sayHi(); // Привет, Вася!

    // const user = new User("Alex")
    // console.log(user.say()); // Error

    // console.log(sayHiMixin.say("test"));




// EventMixin

let eventMixin = {
    /**
     * Подписаться на событие, использование:
     * menu.on('select', function(item) { ... }
     */
    on(eventName, handler){
        if(!this._eventHandlers) this._eventHandlers = {};
        if(!this._eventHandlers[eventName]){
            this._eventHandlers[eventName] = [];
        }
        this._eventHandlers[eventName].push(handler);
    },

    /**
   * Отменить подписку, использование:
   * menu.off('select', handler)
   */
  off(eventName, handler){
    let handlers = this._eventHandlers?.[eventName];
    if(!handlers) return;
    for(let i = 0; i < handlers.length; i++){
        if(handlers[i] === handler){
            handlers.splice(i--, 1);
        }
    }
  },

  /**
   * Сгенерировать событие с указанным именем и данными
   * this.trigger('select', data1, data2);
   */
  trigger(eventName, ...args){
    if(!this._eventHandlers?.[eventName]){
        return; // обработчиков для этого события нет
    }

    // выозовем обработчики
    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
  }
};










