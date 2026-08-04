let users = [{id: 01, name: "John", status: "Delivered", price: [15000,6500, 2000], items: ["bus", "Car", "Cycle"]},
{id: 02, name: "James", status: "Pending", price: [1500,20000], items: ["Mobile", "Laptop"]}, 
{id: 03, name: "Mia", status: "Delivered", price: [500], items: ["Lipstick"]}]
//find the total price when status is devliered

let total=0
for(let user of users){
 
    if(user.status==="Delivered"){
        for(let price of user.price){
            total+=price
        }
        
    }
}
console.log(total)

//total price
let total=0
for(let user of users){
 
 
        for(let price of user.price){
            total+=price
        }
        
    
}
console.log(total)


//=============================================================


