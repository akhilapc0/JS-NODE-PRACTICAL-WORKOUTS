//Given an array of student objects: find the student with the highest score

// [ ] Given an array of student objects: find the student with the highest score
// [ ] Given an array of student objects: count of students in each class
// [ ] Find average score of each class from an array of student objects
// [ ] Find the sum of values in an object
const students = [
    { name: "Rahul", score: 75 },
    { name: "Akhila", score: 95 },
    { name: "Arun", score: 82 },
    { name: "Neha", score: 91 }
];

let highest=students[0];

for(let i=1;i<students.length;i++){
    if(highest.score < students[i].score){
        highest=students[i]
    }
}
console.log(highest)

//------------------------------------------------------------

const students = [
  { name: "Akhila", class: "A" },
  { name: "Rahul", class: "B" },
  { name: "Arun", class: "A" },
  { name: "Neha", class: "C" },
  { name: "John", class: "B" }
];

let obj={};

for(let i=0;i<students.length;i++){
    if(obj[students[i].class]){
        obj[students[i].class]+=1
    }else{
          obj[students[i].class]=1
    }
}
console.log(obj)


//---------------------------------------------------


//Find the average score of each class from an array of student objects.


const students = [
  { name: "Akhila", class: "A", score: 90 },
  { name: "Rahul", class: "B", score: 80 },
  { name: "Arun", class: "A", score: 70 },
  { name: "Neha", class: "B", score: 60 },
  { name: "John", class: "C", score: 100 }
];

let total={};
let count={};
let avergae={};

for(let i=0;i<students.length;i++){
    if(total[students[i].class]){
        total[students[i].class]+=students[i].score
        count[students[i].class]+=1
    }
    else{
        total[students[i].class]=students[i].score
        count[students[i].class]=1
    }
}
console.log(total)
console.log(count)

// { A: 160, B: 140, C: 100 }
// { A: 2, B: 2, C: 1 }]


for(let key in total){
    avergae[key]=total[key]/count[key]
}
console.log(avergae)



//------------------------------------------------


const obj = {
  a: 10,
  b: 20,
  c: 30,
  d: 40
};
let sum=0
for(let key in obj){
    sum+=obj[key]
}
console.log(sum)


//---------------------------------------------------------


//[ ] Object manipulation workouts

const person = {
  name: "Akhila",
  age: 22,
  city: "Kochi"
};

person.country="India"
console.log(person)
person.age=23
console.log(person)
delete(person.city)
console.log(person)
for(let key in person){
    console.log(key)
    
}

for(let key in person){
    console.log(person[key])
    
}

//Find non-repeating elements from an array

const arr = [2, 3, 4, 2, 5, 3, 6];
let obj={};
let result=[]
for(let num of arr){
    if(obj[num]){
        obj[num]+=1
    }else{
        obj[num]=1
    }
}
console.log(obj)

for(let key in obj){
    if(obj[key]===1){
        result.push(Number(key))
    }
}
console.log(result)


//Find the odd number whose occurrence is more than 1.

const arr = [2, 3, 4, 5, 3, 6, 5, 8];
let obj={};
let result=[]
for(let num of arr){
    if(obj[num]){
        obj[num]+=1
    }else{
        obj[num]=1
    }
}
console.log(obj)

for(let key in obj){
    if(obj[key]>1 && Number(key)%2!==0){
        result.push(Number(key))
    }
}
console.log(result)

// [ ] Remove duplicates from a string
// [ ] Remove duplicates from an array
// [ ] Pattern matching with vowels
// [ ] Write a recursive function to find the sum of digits of a positive integer n (e.g. sum = 15)
// [ ] Program to find the second longest word in a sentence
// [ ] isAnagram('cat','act')

//------------------------------------------------

const arr = [1, 2, 3, 2, 4, 1, 5];
let result=[]
for(let i=0;i<arr.length;i++){
    if(!result.includes(arr[i])){
        result.push(arr[i])
    }
}
console.log(result)

//---------------------------------------------------

const str = "Hello World";

let vowels="aeiou"
let result=""
for(let i=0;i<str.length;i++){
    if(vowels.includes(str[i])){
        result+=str[i]
    }
}
console.log(result)

//-------------------------------------------

const str = "AkhIla";

let vowels="aeiou"
let result=""
for(let i=0;i<str.length;i++){
    if(vowels.includes(str[i].toLowerCase())){
        result+=str[i]
    }
}
console.log(result)

//----------------------------------------------------


function sumDigits(n){
    if(n<10){
        return n
    }
    return (n%10)+sumDigits(Math.floor(n/10))
}
console.log(sumDigits(789))


//------------------------------------------------------------------


const str = "JavaScript is a powerful programming language";
let words=str.split(" ")
console.log(words)
let highest=words[0].length
let word=words[0]
let secHighest=0
let secWords=""
for(let i=1;i<words.length;i++){
    if(words[i].length> highest){
        secHighest=highest
        secWords=word
        highest=words[i].length
        word=words[i]
    }
    else if(words[i].length<highest && words[i].length>secHighest){
        secHighest=words[i].length
        secWords=words[i]
    }
}
console.log(word)
console.log(secWords)

//-----------------------------------------------------------------------


function isAnagram(word1,word2){
    let a=word1.split("").sort().join("");
    let b=word2.split("").sort().join("");
    
    if(a===b){
        return true
    }
    return false
}
console.log(isAnagram("cat","ica"))

//--------------------------------------------------------------------------------

// [ ] Print 10 to 1 using a generator function (without console.log outside the generator)
// [ ] Write a generator function that prints multiples of a number infinitely (e.g. 5 -> 5,10,15...)
// [ ] delay(3).then(name => console.log(name)) - practical
// [ ] Implement name.reverse() as a polyfill on String.prototype
// [ ] Implement flatMap as a polyfill
// [ ] Check if an object is empty


function* numbers() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
        yield;
    }
}

let gen = numbers();

for (let i = 0; i < 10; i++) {
    gen.next();
}

//---------------------------------------------------------------


function* numbers() {
    for (let i = 10; i >= 1; i--) {
        yield i;
    }
}

let gen = numbers();

for (let i = 0; i < 10; i++) {
    console.log(gen.next().value);
}

//------------------------------------------------------------------


function* multiples(n){
    let i=1;
    while( i>=1){
        yield i*n
        i++
    }
}

let gen=multiples(5)

console.log(gen.next().value)

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)


//------------------------------------------------


function delay(seconds){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(seconds)
        },seconds*1000)
    })
}
delay(3).then((value)=>console.log(value))

//-----------------------------------------------


let name="krishnapriya";

String.prototype.reverse=function(){
    let str=this;
    let res=""
    for(let i=str.length-1;i>=0;i--){
        res+=str[i]
    }
    return res;
}
console.log(name.reverse())


//---------------------------------------------------------


const obj={
    name:"Akhila",
    age:23
}

const obj2={}

function isEmpty(obj){
    if(Object.keys(obj).length===0){
        return true
    }
    return false
}
console.log(isEmpty(obj))
console.log(isEmpty(obj2))

//-----------------------------------------------------

//ternary opertaor vs if else

    
