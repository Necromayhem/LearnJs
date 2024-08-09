let range = {
    from: 1,
    to: 10
};


range[Symbol.iterator] = function(){
    return{
        current: this.from,
        last: this.to,
        
        next(){
            if(this.current <= this.last){
                return{
                    done: false,
                    value: this.current++
                }
            }else{
                return {done: true}
            }
        }
    }
}

for(let num of range){
    console.log(num);
}





//==============================================

let iterable = {
    data: [1, 2, 3, 4, 5]
}

iterable[Symbol.iterator] = function(){
    let index = 0;
    let self = this; 
    return {
        next: function(){
            return {
                value: self.data[index],
                done: index++ >= self.data.length
            };
        }
    };
};

for(let item of iterable){
    console.log(item);
}