const express = require ('express');
//const Product = require('../../contenedores/product.controller');
const prodDao = require('../../Daos/productDao');
const productsRouter = express.Router()

productsRouter.get("/", (req, res)=>{
  try {
    res.send(prodDao.create())
  }catch (error) {
    res.status(500).json({error: error})
  }   
});

productsRouter.get("/all", (req, res)=>{
  try {
    res.send(prodDao.getAll())
  }catch (error) {
    res.status(500).json({error: error})
  }   
});

productsRouter.delete("/:name", (req, res)=>{
  try {
    const name = req.params.name
    res.send(prodDao.remove(name))
  }catch (error) {
    res.status(500).json({error: error})
  }   
})

module.exports = productsRouter;