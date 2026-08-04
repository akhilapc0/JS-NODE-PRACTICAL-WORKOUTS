
//set

// const set=new Set();
// set.add(10);
// set.add('hello');
// set.add({name:"Akhila"})
// console.log(set)

//weakkset

// const weakSet=new WeakSet();
// const user={name:"Akhila"}
// weakSet.add(user)
// console.log(weakSet.has(user))
// weakSet.add(20)
// console.log(weakSet)


const numbers=[1,2,3,3,2];
const unique=[...new Set(numbers)]
console.log(unique)