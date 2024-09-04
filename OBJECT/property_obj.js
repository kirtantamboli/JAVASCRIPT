//in this code we cannot delete inherited properties or non-configurable properties
let obj1 = { 
    propfirst : "Name"
} 
// Output : Name 
console.log(obj1.propfirst) 
let obj2 = Object.create(obj1); 

// Output : Name 
console.log(obj2.propfirst); 
    
// Output : true. 
console.log(delete obj2.propfirst); 

    // Surprisingly Note that this will return true 
    // regardless of whether the deletion was successful 

    // Output : Name     
    console.log(obj2.propfirst); 
