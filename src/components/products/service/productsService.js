const ProductsDto = require('../dto/productsDto')
const {isValidObjectId} = require('mongoose')

class ProductsService {
    getAll = async () => {
        let allProducts = await ProductsDto.getAll()
        return allProducts 
    }
    // Bien la validacion, si queres sumarle todavia mas expertise,
    // Fijate que mongoose ya te provee algunos metodos para validar el body antes de meterlo
    addProduct = async (product) => {
        const {name, price} = product
        try {
            if(!name) throw 'name field is required'
            if(!price) throw 'price field is required'

            let response = await ProductsDto.addProduct(product)
            return response
            
        } catch (error) {
            console.log(error)
            return error
        }
     }
    getById = async (idProduct) => {
        if(! isValidObjectId(idProduct)) return 'Invalid Id'
        let response = await ProductsDto.getById(idProduct)
        return response
     }
    modifyProduct = async (idProduct, productModified) => { 
        if(! isValidObjectId(idProduct)) return 'Invalid Id'
        let response = await ProductsDto.modifyProduct(idProduct, productModified)
        return response
    }
    deleteProduct = async (idProduct) => {
        if(! isValidObjectId(idProduct)) return 'Invalid Id'
        let response = await ProductsDto.deleteProduct(idProduct)
        return response
     }
}
module.exports = new ProductsService()