//this---it refers particular obj
//using this in a method
const person = {
    name: 'kirtan',
    age: 20,

    greet(){
        console.log('Hello, my name is ' + this.name + ' and I am '+ this.age +' years old.');
    }
};

person.greet(); 

//using this in a function

function greet1() {
    console.log('Hello, my name is ' + this.name);
}

const person1 = {
    name: 'kirtan',
    sayHello: greet1
};

const anotherPerson = {
    name: 'tambolli'
};

greet1(); 
person1.sayHello(); 
greet1.call(anotherPerson); 
