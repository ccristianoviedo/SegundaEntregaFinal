const mongoose = require("mongoose")
const Productos = require("./models/productos.model.js")
//import { Productos } from "./models/productos.model.js";

const URL = "mongodb://localhost:27017/productoooss";


const findOne = () =>{
    mongoose
    .connect(URL)
    .then(async () => {
        try {
            mongoose.connect(URL);
            console.log("READ");
            const productos = await Productos.find();
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
const add =()=>{
    mongoose
    .connect(URL)
    .then(async () => {
        try {
        for (let i = 0; i < products.length; i++) {
            const producto = new Productos(products[i]);
            await producto.save();
            console.log("Usuario creado");
        }
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
const remove =(name)=>{
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

module.exports= {add, findOne, remove}

let products = [
    {
        timestamp:Date.now(),
        name: "peras",
        descripcion: "fruta",
        codigo:2342,       
        price:67,
        stock:400,
        img:"https://res.cloudinary.com/riqra/image/upload/v1595008844/sellers/companyname/products/knhcmuwpfqe7e2ug86bl.jpg",
    },
    {
        timestamp:Date.now(),
        name: "manzana",
        descripcion: "fruta",
        codigo:2342,       
        price:405,
        stock:4040,
        img:"https://i.blogs.es/e44dc0/manzana/450_1000.webp",
    },
    {
        timestamp:Date.now(),
        name: "mandarinas",
        descripcion: "fruta",
        codigo:2342,       
        price:410,
        stock:4030,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB8Ikk4nfc5r6myF26Uus3XVUNr28ufRohzLoIUYwN9yTlsgEnBfpUuSA4zpPLmpprClc&usqp=CAU",
    },
    {
        timestamp:Date.now(),
        name: "banana",
        descripcion: "fruta",
        codigo:2342,       
        price:540,
        stock:4010,
        img:"https://image.shutterstock.com/image-photo/one-banana-yellow-isolated-on-260nw-1932710246.jpg",
    },
    {
        timestamp:Date.now(),
        name: "naranja",
        descripcion: "fruta",
        codigo:2342,       
        price:40212,
        stock:44340,
        img:"https://i0.wp.com/pastofruver.com/wp-content/uploads/2020/03/Naranjas-Pastofruver-1.jpg?fit=800%2C800&ssl=1",
    },
]
