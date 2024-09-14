//shadowing
//in let keyword
let foo = 'bar';
if(true){
    let foo = 'baz';
    console.log(foo);   
}
console.log(foo);

//in var keyword
var bar = 'bar';
if(true){
    var bar = 'foobar';
    console.log(bar);
}
console.log(bar);

