// задачи учебник

// 9.1  переписать, используя классы

// function Clock({ template }) {
  
//     let timer;
  
    // function render() {
    //   let date = new Date();
  
    //   let hours = date.getHours();
    //   if (hours < 10) hours = '0' + hours;
  
    //   let mins = date.getMinutes();
    //   if (mins < 10) mins = '0' + mins;
  
    //   let secs = date.getSeconds();
    //   if (secs < 10) secs = '0' + secs;
  
    //   let output = template
    //     .replace('h', hours)
    //     .replace('m', mins)
    //     .replace('s', secs);
  
    //   console.log(output);
    // }
  
    // this.stop = function() {
    //   clearInterval(timer);
    // };
  
    // this.start = function() {
    //   render();
    //   timer = setInterval(render, 1000);
    // };
  
//   }
  
//   let clock = new Clock({template: 'h:m:s'});
//   clock.start();

class Clock {
    
    constructor({ template }){
        this.template = template;
    }

    render() {
        let date = new Date();
    
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        let output = this.template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);
    
        console.log(output);
    }

    stop() {
        this.clearInterval(this.timer);
    };
    
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    };
}


let clock = new Clock({template: 'h:m:s'});
// clock.start();

class ExtendedClock extends Clock {
    constructor(options) {
      super(options);
      let { precision = 1000 } = options;
      this.precision = precision;
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
  };

  let extendsClock = new ExtendedClock({template: 'h:m:s'})
//   extendsClock.start()




// 9.2

class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) {
    //   this.name = name; // было
      super(name); // а так работает
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
//   alert(rabbit.name);
























