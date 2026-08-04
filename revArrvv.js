

let arr=[1,2,3,4,5,6,7,8,9,10];
let result=[]
let i=0;
let size=1

while(i<arr.length){
    let group=arr.slice(i,i+size).reverse()
    result.push(...group)
    i=i+size
    size++
}
console.log(result)