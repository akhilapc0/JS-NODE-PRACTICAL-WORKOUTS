
let obj1={
    name:"Akhila",
    age:23
}

let obj2={
    name:"Akhila",
    age:34
}

function areObjectsEqual(obj1,obj2){

    let keys1=Object.keys(obj1)
    let keys2=Object.keys(obj1);

    if(keys1.length !== keys2.length){
        return false
    }

    for(let key of keys1){
        if(obj1[key]!==obj2[key]){
            return false
        }
    }
    return true
}

console.log(areObjectsEqual(obj1,obj2))