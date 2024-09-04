// JavaScript code demonstrating a simple object
let school = {
    name: 'Vivekananda School',
    location: 'Delhi',
    established: '1971',
    displayInfo: function () {
        console.log(`${school.name} was established 
              in ${school.established} at ${school.location}`);
    }
}
school.displayInfo();   

//An object in JavaScript may also have a function as a member, in which case it will be known as a method of that object. Here  “displayinfo” is a method of the school object that is being used to work with the object’s data, stored in its properties.



//accessing object memebers
//(objectname.membername)