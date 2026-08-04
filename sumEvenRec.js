

let arr=[1,2,3,4,5,6]

function sumEven(arr,index){

        if(index>arr.length-1){
            return 0
        }
    if(arr[index]%2===0){
       return arr[index]+ sumEven(arr,index+1)
    }
    else{
     return   sumEven(arr,index+1)
    }
}

console.log(sumEven(arr,0))