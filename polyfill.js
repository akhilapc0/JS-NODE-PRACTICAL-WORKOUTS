

Array.prototype.myIncludes=function(value){

    for(let i=0;i<this.length;i++){
        if(this[i]===value){
            return true
        }
        
    }
    return false
}

let arr=[10,20,30]
console.log(arr.myIncludes(20))