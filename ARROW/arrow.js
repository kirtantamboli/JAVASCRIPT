//An arrow function without parameters is defined using empty parentheses (). This is useful when you need a function that doesn’t require any arguments.

//ARROW FUNCTION without parameter
const fn = () => {
    console.log( "Hi from kirtan" );
}

fn();

//ARROW FUNCTION WITH SINGLE PARAMETER
const square = x => x*x;
console.log(square(4));
// output: 16

//arrow fn with multiple parameter
const abb = ( x, y, z ) => {
    console.log( x + y + z )
}

abb( 10, 20, 30 );
