const ProductsDao = require('../dao/productsDao')

class ProductsDto {

    getAll = async () => {

        let response = await ProductsDao.getAll()
        let productList = []
        try {


            if (response.length > 0) {

                response.forEach(product => {
                    productList.push({
                        name: product.name,
                        price: product.price,
                        description: product.description,
                        id: product._id
                    })
                })
                return productList
            }
            return productList
        } catch (error) {
            console.log(error)
            return error

        }

    }
    addProduct = async (product) => {
        let productToAdd = {
            name: product.name,
            price: product.price,
            description: product.description
        }
        let addedProduct = await ProductsDao.addProduct(productToAdd)
        return addedProduct._id
    }
    getById = async (idProduct) => {
        let product = await ProductsDao.getById(idProduct)
        if (!product) return 'No product found'
        return {
            name: product.name,
            price: product.price,
            description: product.description,
            id: product._id
        }
    }
    modifyProduct = async (idProduct, productModified) => {
        let newProductModified = {}

        if (productModified.name)
            newProductModified = {
                ...newProductModified,
                name: productModified.name
            }
        if (productModified.price)
            newProductModified = {
                ...newProductModified,
                price: productModified.price
            }
        if (productModified.description)
            newProductModified = {
                ...newProductModified,
                description: productModified.description
            }
        try {
            let product = await ProductsDao.modifyProduct(idProduct ,newProductModified)
            return {
                name: product.name,
                price: product.price,
                description: product.description,
                id: product._id
            }
            

        } catch (error) {
            console.log(error)
            return error
        }
    }
    deleteProduct = async (idProduct) => { 
        let response = await ProductsDao.deleteProduct(idProduct)
        return response
    }
}

module.exports = new ProductsDto()