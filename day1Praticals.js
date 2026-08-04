//- List down skills of an employee (from object/array)

let employee = {
    id: 101,
    name: "Akhila",
    department: "Developer",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
};


for(let skill of employee.skills){
    console.log(skill)
}

//==========================================================================

let employees = [
    {
        id: 1,
        name: "Akhila",
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 2,
        name: "Rahul",
        skills: ["React", "Node.js", "MongoDB"]
    },
    {
        id: 3,
        name: "Anu",
        skills: ["Java", "Spring Boot"]
    }
];


for(let emp of employees){
    console.log(`Employee: ${emp.name}`)
    
    for(let skill of emp.skills){
        console.log(skill)
    }
    
    console.log()
}

//===================================================================================
//Remove object keys holding non-string values

for(let key in person){
    if(typeof person[key] !=='string'){
        delete(person[key])
    }
}
console.log(person)

//- Remove last property from an object

let person = {
    name: "Akhila",
    age: 23,
    city: "Kochi",
    country: "India"
};

let arr=Object.keys(person)

let lastKey=arr[arr.length-1]

delete person[lastKey]
console.log(person)


//- String immutability — practical demo

let str = "Hello";

str[0]="h"
console.log(str)

str="yello"
console.log(str)


//- Generate a 6-digit random OTP

let otp = Math.floor(Math.random() * 900000) + 100000;
console.log(otp)


//- Date formatting and manipulation


