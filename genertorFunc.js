
// function number(){
//     console.log(1)
//     console.log(2)
//     console.log(3)
// }

// number()


function* numbers(){
    yield 1;
    yield 2;
    yield 3;
}

const gen=numbers();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next())