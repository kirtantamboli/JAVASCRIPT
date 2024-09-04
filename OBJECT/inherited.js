//inherited property
//To check if a property is an object’s own property (not inherited), you can use the hasOwnProperty method.
let school = {
    "name": "Vivekananda School"
};
console.log(school.hasOwnProperty("name")); 
console.log(school.hasOwnProperty("toString"));
