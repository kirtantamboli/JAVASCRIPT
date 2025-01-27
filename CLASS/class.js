//in class -- it uses pascal case
//declaring a class
class Product {
    constructor(itemname,price,discount,productcode){
        this.itemname = itemname ;
        this.price = price;
        this.discount = discount;
        this.productcode = productcode;
    }
}

let pencil = new Product("pencil",20,2,p10);

//now using it with expression

const Product1 = class Product1{
        constructor(itemname,price,discount,productcode){
            this.itemname = itemname ;
            this.price = price;
            this.discount = discount;
            this.productcode = productcode;
        }
        //getter and setter method
        get getDiscountValue(){
            return this.discount;
        }
        set setDiscountValue(value){
            this.discount = value; 
        }
        //method 
        DiscountValue(){
            return this.discount*this.price/100; 
        }

    }; 

let chair = new Product1('chair',499,15,'c10');

//extending class is good to extend classs as it has getter and setter so we use oops in js rather than using functional programming and hence we use class and oops 

//extending classs
class stationary {
    constructor(bookname){
        this.bookname = bookname ;
    }
    getBookName(){
        return this.bookname + "is a Product";
    }
}

class BOX extends stationary{
    constructor(bookname){
        super(bookname);
    }
}

let pencil2 = new stationary('pencil2',49,5,'ppp10');
let pen3 = new BOX('pen4',49,50,'p90');    