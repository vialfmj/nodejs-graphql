
const ProductModel = require('../../../models/product')

class ProductsDao {
    getAll = async () => {
        let response = await ProductModel.find({})

        return response
    }
    addProduct = async (product) => {
        try {
            let response = await ProductModel.create(product)
            let addedProduct = await response.save()
            return addedProduct

        } catch (error) {
            console.log(error)
            return error
        }
    }
    getById = async (idProduct) => {
        try {
            let response = await ProductModel.findOne({ _id: idProduct })
            return response

        } catch (error) {
            console.log(error)
            return error
        }
    }
    modifyProduct = async (idProduct, productModified) => {
        try {
            let response = await ProductModel.findOneAndUpdate({ _id: idProduct }, productModified, { new: true })
            return response
        } catch (error) {
            console.log(error)
            return error
        }
    }
    deleteProduct = async (idProduct) => {
        try {
            await ProductModel.findOneAndDelete({ _id: idProduct })
            return `Product with id:${idProduct} was deleted`
        } catch (error) {
            console.log(error)
            return error
        }
    }
}

module.exports = new ProductsDao()