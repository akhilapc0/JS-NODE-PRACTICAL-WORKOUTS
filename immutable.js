
let obj={
    name:"Akhila",
    address:{
        city:"kochi"
    }
}

function deepFreeze(obj){
    
    for(let key in obj){
        if(obj[key] && typeof(obj[key])==="object"){
            deepFreeze(obj[key])
        }
    }
    return Object.freeze(obj)
}
console.log(deepFreeze(obj))
