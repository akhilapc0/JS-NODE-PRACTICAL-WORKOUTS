
class Animal{
    sound(){
        console.log("Animal makes a sound")
    }
}

class Dog extends Animal{
    sound(){
        console.log("dog barks")
    }
}

class Cat extends Animal{
    sound(){
        console.log("cat moves")
    }
}

const dog=new Dog();
const cat=new Cat();
dog.sound();
cat.sound()