class Product {
    constructor(itemname){
        console.log('passed a furniture'+itemname);
        this.itemname = itemname;
    } 

    getItemName(){
        return this.itemname +"is a product";
    }
}
