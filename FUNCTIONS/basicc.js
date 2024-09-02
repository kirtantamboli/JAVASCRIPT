//syntax of function 
/*function name(parameter1,parameter2,parameter3){
    code to be executed
    }    */
    const prompt = require('prompt-sync')();


    function box(pencil,rubber,pen){
          console.log("your assignment will be ready in " + pencil*2 +" minutes"+ " and things which is used are :" +pencil +" pencil"+ pen +" pen"+rubber+ "rubber" + " using" + " notebook");
    }
    
    box(2,5,5);
    
    
    
    //another example......
    
    let pen1 = prompt("which pen would you like to have ");
    let rubber1 = prompt("which rubber would you like to have ");
    let pencil1 = prompt("which pencil would you like to have ");
    
    function makeassignment(pen1,rubber1,pencil1){
        let assignment = pen1 + "pen" + rubber1 + "rubber"+ pencil1+"pencil";
        return  assignment;
    
    }
    let task = makeassignment(pen1,rubber1,pencil1);