const mongoose = require("mongoose")

const productoSchema = new mongoose.Schema({
  timestamp: { type: String, required: true },
  name: { type: String, required: true },
  descripcion: { type: String, required: true},
  price: { type: String, required: true, unique: true },
  stock: { type: Number, required: true },
  img: { type: String, required: true },
});

const Productos = mongoose.model("productos", productoSchema);
module.exports = Productos;