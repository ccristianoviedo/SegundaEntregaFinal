const pageCart= require("../pageCart")

class Cart {
    static getAll(){
        const products = pageCart.findCArt()
        return products
    }
    static create (){
        const product = pageCart.addToCart(carrito)
        return product
    }
    static remove (name){
        const product = pageCart.removeCart(name)
        return product
    }      
    
}
module.exports = Cart;