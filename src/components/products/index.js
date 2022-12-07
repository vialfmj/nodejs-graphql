const {Router} = require('express')
const ProductsController = require('../products/controller/productsController')

module.exports = app => {
    let router = Router()
    app.use( '/api/products' , router )
    // Recordá que lo normal en una API REST, es que solamente haciendo GET a la raiz de un endpoint, 
    // Ya estamos solicitando todos los documentos de ese endpoint, por ejemplo:

    // GET /productos -> trae todos los productos
    // GET /productos/1 -> trae producto 1
    // POST /productos -> Crea un producto
    // ... etc

    // Obvio que tal como dijimos, no necesariamente hay que cumplir todas las reglas para que una API sea REST
    // Pero si las mas comunes!

    router.get('/all' , ProductsController.getAll)
    router.post('/' , ProductsController.addProduct)
    router.get('/:id' , ProductsController.getById)
    router.put('/:id' , ProductsController.modifyProduct)
    router.delete('/:id' , ProductsController.deleteProduct)
    

}