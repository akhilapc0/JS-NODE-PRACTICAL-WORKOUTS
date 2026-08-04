
//JSON.Stringify

// const user={
//     name:"Akhila",
//     age:22
// }

// const jsonData=JSON.stringify(user)
// console.log(jsonData)

//JSON.parse()

const jsonData='{"name":"Akhila","age":22}'
const user=JSON.parse(jsonData)
console.log(user.name)