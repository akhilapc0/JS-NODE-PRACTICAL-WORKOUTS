

// function square(n){
//     console.log('calculating')
//     return n*n
// }

// console.log(square(6))

//with memoization

function memoSquare(){
    let cache={};
    return function(n){
         if(cache[n]){
        console.log("from cache")
        return cache[n]
    }
    console.log("calculating")
    cache[n]=n*n;
    
    return cache[n]
    }
   
}

const square=memoSquare();
console.log(square(5))
console.log(square(5))
console.log(square(6))