const express = require('express')
const { default: mongoose } = require('mongoose')
const Product = require('../model/product')
const router = express.Router()
const productController = require('../controller/product.model')

// Handle GET request for products
router.get('/', productController.getProducts)
// (req,res) => {
//     res.status(200).json({
//         msg:"This is a GET request for products"
//     })
// })

// Handle POST request for product
router.post('/', productController.createProduct)
// (req,res) => {

//     // body-parser will make the following properties available
//     // console.log(req.body)
//     // console.log(req.body.name)
//     // console.log(req.body.price)

// // 1. Crate an object of the model
//     const product = new Product({
//         _id: new mongoose.Types.ObjectId(),
//         name: req.body.name,
//         price: req.body.price
//     })

// // 2. Save this to the database
//     product.save()
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

//     // const tempProduct = {
//     //     name: req.body.name,
//     //     price: req.body.price
//     // }

//     // console.log("[TYPE]: " + typeof req.body)

//     res.status(200).json({
//         msg:"This is a POST request for product",
//         statusMsg: "Product created successfully..!",
//         product: product
//     })
// })

// Handle GET request for a single product
router.get('/:productId', productController.getProductById)
// (req,res) => {

//     const id = req.params.productId

//     if(id == "7"){
//         res.status(200).json({
//             msg: "Congrats! You have a special id with good cashback."
//         })
//     } else{
//         res.status(200).json({
//             msg: "Oops! You have a regular id with no cashback."
//         })
//     }
// })

// Handle PUT request
router.put('/:productId', productController.updateProduct)
// (req,res) => {
//     const id = req.params.productId
//     res.status(200).json({
//         msg:"This is a PUT request for product",
//         id: id
//     })
// })

// Handle DELETE request
router.delete('/:productId', productController.deleteProduct)
// (req,res) => {
//     const id = req.params.productId
//     res.status(200).json({
//         msg:"This is a DELETE request for product",
//         id: id
//     })
// })


module.exports = router
