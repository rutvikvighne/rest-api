const express = require('express')
const router = express.Router()

// GET request for orders
router.get('/', (req,res) => {
    res.status(200).json({
        msg:"This is a GET request for orders"
    })
})

// GET request for a single order
router.get('/:orderId', (req,res) => {
    res.status(200).json({
        msg:"This is a GET request for a single order"
    })
})

// POST request for order
router.post('/', (req,res) => {
    res.status(200).json({
        msg:"This is a POST request for order"
    })
})

// PUT request
router.put('/:orderId', (req,res) => {
    const id = req.params.orderId
    res.status(200).json({
        msg:"This is a PUT request for order",
        id: id
    })
})

// DELETE request
router.delete('/:orderId', (req,res) => {
    const id = req.params.orderId
    res.status(200).json({
        msg:"This is a DELETE request for order",
        id: id
    })
})

module.exports = router
