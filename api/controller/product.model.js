const mongoose = require('mongoose')
const Product = require('../model/product')

// R from CRUD [GET all]
exports.getProducts = async (req,res) => {
    try{
        const products = await Product.find();  // Get all the documents from the collection
        res.status(200).json({
            msg:"All documents fetch successfully !",
            data: products
        })
        
    } catch (err) {
        res.status(501).json({
            msg:"Something went wrong !",
            err:err
        })
    }
}

// R from CRUD [GET single]
exports.getProductById = async (req,res) => {
    try{
        const product = await Product.findById(req.params.productId);  // Get a document from the collection

        let m = " "
        if(product === null){
            m = "No matching document found !"
        } else {
            m = "Document fetch successfully !"
        }

        res.status(200).json({
            msg: m,
            data: product
        })
        
    } catch (err) {
        res.status(501).json({
            msg:"Something went wrong !",
            err:err
        })
    }
}

// C from CRUD [POST]
exports.createProduct = async (req,res) => {

    try{
        // Create a Product object
        const product = new Product({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price
        })

        const data = await product.save();  // call the save method & wait for it to return
        // if it reaches this point, means save() was successful
        res.status(200).json({
            msg:"Product created successfully !",
            product:data
        })
        
    } catch (err) {
        res.status(501).json({
            msg:"Something went wrong !",
            err:err
        })
    }
}

// U from CRUD [PUT]
exports.updateProduct = async (req,res) => {

    try{
        const data = await Product.findByIdAndUpdate(req.params.productId, req.body);
        res.status(200).json({
            msg:"Product updated successfully !",
            product:data
        })
        
    } catch (err) {
        res.status(501).json({
            msg:"Something went wrong !",
            err:err
        })
    }
}

// D from CRUD [DELETE]
exports.deleteProduct = async (req,res) => {

    try{
        const data = await Product.findByIdAndDelete(req.params.productId);
        res.status(200).json({
            msg:"Product deleted successfully !",
            product:data
        })
        
    } catch (err) {
        res.status(501).json({
            msg:"Something went wrong !",
            err:err
        })
    }
}