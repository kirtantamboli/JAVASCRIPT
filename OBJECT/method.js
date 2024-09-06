// when we use an function() in an object it is known as an method 
// object are dynamic in nature
let lecture = 10;
let section = 5;
let title = 'javascript';

const course = {
    lecture :10,
    section :3,
    title : 'javascript',
    notes :{
        introduction : "welcome to js course"
    },
    enroll(){
        console.log('you are successfully enrolled');
        
    }
}
 
course.enroll()
console.log(course)

course.price = 999;

// for creating same object again we can use factory fn or constructor fn

// factory fn
function createcousre(title){
    return {
        lecture :10,
        section :3,
        title : 'javascript',
        notes :{
            introduction : "welcome to js course"
        },
        enroll(){
            console.log('you are successfully enrolled');
            
        }
    }
}

const course = createcousre();
course.enroll() 
console.log(course);

const newCourse = createcousre('javascript');

// constuctor fn (in this we use pascal case)
// in this we use the fn's name as class name
// we also dont create new obj
//in this we use this keyword as it ppoints to empty obj and it returns automatically
function Course(){
     this.title = title,
     this.enroll = function(){
        console.log('you arre successfully enrolled');
        
     }
}
const course = new Course('javascript');
delete course.title;//deleting obj
course 
course.enroll()
