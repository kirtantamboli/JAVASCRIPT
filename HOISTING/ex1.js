//HOISTING
sayhello();
    console.log(i);
    function sayhello(){
        console.log("hello");
        
    }
var i = 10;
//let , const are in temporal dead zone -- need to be initialised
//whereas in var it is not necesssary
 
