const express = require ('express');
const Cart = require('../../contenedores/cartMongoDB');
const cartRouter = express.Router();
const prodDao = require('../../Daos/productDao');
const CarritoMongoDB = require('../../Daos/cartDao')

/*cartRouter.get("/", (req, res)=>{
    try {
        cartText.save(item)
        res.send(item)
    } catch (error) {
        res.status(500).json({error: error})
      }   
})*/

/*cartRouter.get("/:id/productos", (req, res)=>{
  try {
    const {id} = req.params
    res.send(Cart.findOne(parseInt(id)))
  }catch (error) {
    res.status(500).json({error: error})
  }   
})*/

/*cartRouter.delete("/:id",(req, res)=>{
  try {
      const {id}= req.params
      const product = Cart.remove(parseInt(id))
        res.send(product) 
    }catch (error) {
      res.status(500).json({error: error})
  }    
});*/
cartRouter.get("/", async(req, res)=>{
  try {
      ///const carrito = [];
      const productos = await prodDao.getAll();
      //carrito.push(productos)
      
      res.send(console.log(await prodDao.getAll()))
  }catch (error) {
      res.status(500).json({error: error})
  }
});
cartRouter.post("/:id/productos", (req, res)=>{
  try {
     const {id} = req.params
     const {idp, name, codigo, timestamp, descripcion, stock, price} = req.body
     const producto = Cart.add(idp, name, codigo, timestamp, descripcion, stock, price)
     const filterCart = Cart.findOne(parseInt(id))     
     filterCart.producto1 = producto         
     res.json(filterCart)
  }catch (error) {
      res.status(500).json({error: error})
  }    
});
module.exports = cartRouter;