//all this fn works in primitive datatypes eg.objects are not included

// push() method
let Animals = ["Tiger", "Giraffe", "Horse", "Deer"];
Animals.push("Zebra");
console.log(Animals);

// pop() method
//returns last value or deletes
let Animals2 = ["Tiger", "Giraffe", "Horse", "Deer"];
Animals2.pop();
console.log(Animals2);

// shift() method
//removes elements from the array at starting
let Animals3 = ["Tiger", "Giraffe", "Horse", "Deer"];
Animals3.shift();
console.log(Animals3);

//unshift() method
// it adds new elements in an array at the starting and increases its arr length

let Animals4 = ["Tiger", "Giraffe", "Horse", "Deer"];
Animals4.unshift(0);
console.log(Animals4);

//modified
Animals4[0] = "y";
console.log(Animals4);

//indexof
const names = ['ab','bc','ac','cd','ac','de'];
// console.log(names.indexOf('ac'));
console.log(names.indexOf('ac',3));

//lastindexof
//returns the index of last occurences of a specified value in arr or -1 if its not present
names.lastIndexOf('ac');
console.log(names.lastIndexOf('ac'));


//includes
//we can search whether an arr includes a certain elements or not ,returning true or false
//it works on primitive datatypes and not on object
names.includes();
console.log(names.includes('de'));

//find
// it returns the value of first elements in the provided arr that satisfies the provided testing fn ,if no value satisfies it returns undefined  
