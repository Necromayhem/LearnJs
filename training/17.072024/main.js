function camelize(str){
    step1 = str.split('-')
    step2 = step1.map(function (word, index){
        if(index == 0){
            return word
        } else {
            step3 = word[0].toUpperCase() + word.slice(1)
            return step3
        } 
        
    })
    return step2.join('')
}




console.log(camelize("background-color"));
console.log(camelize("-webkit-transition"));
console.log(camelize("list-style-image"));