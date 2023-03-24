const mongoose = require('mongoose')

const uri = "mongodb+srv://rutvik123:Rutvik%40123@cluster0.lm9t96p.mongodb.net/school"

mongoose.connect(uri)
.then(() => {
    console.log("Connection established successfully..!")
})
