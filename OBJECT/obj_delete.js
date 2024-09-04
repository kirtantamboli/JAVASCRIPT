//initialising object and deleting object in datamembers
let obj1 = { 
    propfirst : "Name"
} 

// Output : Name 
console.log(obj1.propfirst); 
delete obj1.propfirst 

// Output : undefined 
console.log(obj1.propfirst);             


//practice

let animal={
    animal1 :"lion" 
}
console.log(animal.animal1);
//using delete keyword 
delete animal.animal1
//output will be undefined 
console.log(animal.animal1);


