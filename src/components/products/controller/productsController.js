const ProductsService = require('../service/productsService')

class ProductsController {
    getAll = async (req, res) => {
        try {
            let allProducts = await ProductsService.getAll()
            res.json({ allProducts })
        } catch (error) {
            console.log(error)
        }
    }
    // Esto tambien podes hacerlo de la siguiente forma:
    addProduct = async({ body }, res) => {
        let response = await ProductsService.addProduct(body)
        res.json({ idNewProduct: response })
    }
    getById = async (req, res) => {
        let {id} = req.params 
        let response = await ProductsService.getById(id)
        res.json({ response })
    }
    modifyProduct = async (req, res) => {
        let {id} = req.params
        let productModified = req.body
        let response = await ProductsService.modifyProduct(id , productModified)
        res.json({ response })
    }
    deleteProduct = async (req, res) => {
        let {id} = req.params
        let response = await ProductsService.deleteProduct(id)
        res.json({ response })
    }
}

module.exports = new ProductsController()