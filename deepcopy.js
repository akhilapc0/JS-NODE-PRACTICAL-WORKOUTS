
const user1={
    name:"Akhila",
    address:{
        city:"kochi"
    }
}

const user2=structuredClone(user1);
user2.address.city="TVM"
console.log(user1.address.city)