const pageProducts= require("../pageProducts")


class Product {
    static getAll(){
        const products = pageProducts.findOne()
        return products
    }
    static create (){
        const product = pageProducts.add()
        return product
    }
    static remove (name){
        const product = pageProducts.remove(name)
        return product
    }      
    
}
module.exports = Product;