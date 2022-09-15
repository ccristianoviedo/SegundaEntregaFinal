const Product =require("../contenedores/productMongoDB");

class CarritoMongoDB extends Product {

    constructor() {
        super('carritos',{
            productos :{ type:[], required: true}
        })
    }
    async guardar(carrito = {productos:[]}){
        return super.guardar(carrito)
    }
}

module.exports = CarritoMongoDB;