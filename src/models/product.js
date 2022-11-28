const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: false
    }
}, {
    timestamps: true,
    versionKey: false
})

const productModel = model('products', productSchema)

module.exports = productModel