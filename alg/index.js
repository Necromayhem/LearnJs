const sumContiguosArray = function(ary){
    //get the lsat item
    const lastItem = ary[ary.length - 1];
    //Gauss's trick
    console.log(ary.length);
    console.log(lastItem);
    return lastItem * (lastItem + 1) / 2
}

// const nums = [1, 2, 3, 4, 5]
// const sumOfArray = sumContiguosArray(nums)
// console.log(sumOfArray);


// функция проверки дублей

const hasDuplicates = function(num){
    //loop the list, our O(n) op
    for(let i = 0; i < num.length; i++){
        const thisNum = num[i];
        console.log(thisNum);
        //loop the list again, the O(n^2)op
        for(let j = 0; j < num.length; j++){
            //make sure we're not checking same number
            if(j !== i){
                const otherNum = num[j];
                //if there's an equal value, return
                if(otherNum === thisNum) return true;
            }
        }
    }
    //if we're here, no dups
    return false;
}

const nums = [1, 2, 3, 4, 5, 2];
console.log(hasDuplicates(nums)); //true









