
// const promise=new Promise((resolve,reject)=>{
//     let success=true
//     if(success){
//         resolve("data recieved")
//     }
//     else{
//         reject("something went wrong")
//     }
// })

// promise
// .then((result)=>console.log(result))
// .catch((err)=>console.log(err))


//promise.all

// const p1=Promise.resolve("user");
// const p2=Promise.resolve("orders");
// const p3=Promise.resolve("payment");

// Promise.all([p1,p2,p3])
// .then((result)=>console.log(result))
// .catch((err)=>console.log(err))

// const p1=Promise.resolve("user")
// const p2=Promise.reject("database error")
// const p3=Promise.resolve("payment")

// Promise.all([p1,p2,p3])
// .then((result)=>console.log(result))
// .catch((err)=>console.log(err))

//promise.allsettiled

// const p1=Promise.resolve("user")
// const p2=Promise.reject("database error")
// const p3=Promise.resolve("payment")

// Promise.allSettled([p1,p2,p3])
// .then((result)=>console.log(result))


//promise.race

// const p1=new Promise(resolve=>
//     setTimeout(() => {
//         resolve("user")
//     }, 3000)
// )

// const p2=new Promise(resolve=>
//     setTimeout(() => {
//         resolve("orders")
//     }, 1000)
// )

// Promise.race([p1,p2])
// .then((result)=>console.log(result))/


// const p1 = Promise.reject("Network Error");
// const p2 = Promise.resolve("User");

// Promise.race([p1, p2])
//   .catch(err => console.log(err));


//promise.any

// const p1=Promise.reject("Error");
// const p2=Promise.resolve("user")
// const p3=Promise.resolve("orders")

// Promise.any([p1,p2,p3])
// .then(result=>console.log(result))

Promise.any([
  Promise.reject("A"),
  Promise.reject("B")
])
.catch(err => console.log(err));