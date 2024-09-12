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


