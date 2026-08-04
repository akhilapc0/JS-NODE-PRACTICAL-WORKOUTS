
//without static
// class Calculator{
//     add(a,b){
//         return a+b
//     }
// }

// const calc=new Calculator();
// console.log(calc.add(10,20))


//with static

class Calculator{
    static add(a,b){
        return a+b
    }
}

console.log(Calculator.add(1,2))