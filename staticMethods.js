
// class Student{
//     greet(){
//         console.log("hello")
//     }
// }

// const s1=new Student();
// s1.greet()
//---------------------------------
// class MathUtils{
//     static add(a,b){
//         return a+b
//     }
// }

// console.log(MathUtils.add(10,20))

//------------------------------------------------

class User{
    constructor(name){
        this.name=name
    }
    display(){
        console.log("User:",this.name)
    }

    static isValidAge(age){
        return age >=18
    }
}

const user1=new User("Akhila")
user1.display()
console.log(User.isValidAge(34))