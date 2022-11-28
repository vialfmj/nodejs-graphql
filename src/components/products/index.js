const {Router} = require('express')
const ProductsController = require('../products/controller/productsController')

module.exports = app => {
    let router = Router()
    app.use( '/api/products' , router )
    router.get('/all' , ProductsController.getAll)
    router.post('/' , ProductsController.addProduct)
    router.get('/:id' , ProductsController.getById)
    router.put('/:id' , ProductsController.modifyProduct)
    router.delete('/:id' , ProductsController.deleteProduct)
    

}