//concate method
let name1 = ['a','b','c'];
let name2 = ['d','e','f'];
console.log(name1.concat('kirtan','tamboli'));
console.log(name1.concat(name2));

//slice method 
let num1 = ['1','2','3'];
let num2 = ['4','5','6'];
let num3 = num1.concat(num2)
console.log(num3.slice(3,5));

//spread operator (...)
let no1 = ['11','12','13'];
let no2 = ['14','15','16'];
let no3 = [...no1,...no2];

//let no3 = [...'11','12','13'],...['4','5','6'];
console.log(no3);


//join method 
let students =['s','h','i','v','a'];
console.log(students.join(''));
//('')this is separater

//split method
console.log(students.split('_'));

//filter method
let product =[
    {name : 'pen',item :'2'},
    {name : 'pencil',item :'23'},
    {name : 'box',item :'24'},
    {name : 'eraser',item :'12'},
    {name : 'book',item :'3'},
    {name : 'scale',item :'42'},
    {name : 'ink',item :'9'}
]
console.log(product.filter(prod => prod.item > 10))
