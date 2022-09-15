const mongoose = require("mongoose");
const Cart = require("./contenedores/cartMongoDB.js");

const URL = "mongodb://localhost:27017/carrito";


const findCArt = () =>{
    mongoose
    .connect(URL)
    .then(async () => {
        try {
            mongoose.connect(URL);
            console.log("READ");
            const productos = await Cart.find();
            console.log(productos);
        } catch (error) {
        console.log(error);
        }finally { 
            mongoose.disconnect().catch((err) => {
            console.error(err);
            });
        }
    })
    .catch((err) => {
            console.error("Error al conectarse a la DB");
        });
}
const addToCart =(productos)=>{
    mongoose
    .connect(URL)
    .then(async () => {
        try {
            console.log('HOLAAAAAAAAAA')
        } catch (err) {
        console.log(`Error: ${err}`);
        } finally {
        mongoose.disconnect().catch((err) => {
            console.error(err);
        });
        }
    })
    .catch((err) => {
        console.error("Error al conectarse a la DB");
    });
}
const removeCart =(name)=>{
    mongoose
    .connect(URL)
    .then(async () => {
        try {
            mongoose.connect(URL);
            console.log("Remove");
            const productosRemove = await Productos.deleteOne({name: name});
            console.log(productosRemove);
        } catch (error) {
        console.log(error);
        }finally { 
            mongoose.disconnect().catch((err) => {
            console.error(err);
            });
        }
    })
    .catch((err) => {
            console.error("Error al conectarse a la DB");
        });
}

module.exports= {addToCart, findCArt, removeCart}