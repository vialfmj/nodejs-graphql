const usersApi = require('../components/users')
const productsApi = require('../components/products')


module.exports = app => {
    usersApi(app)
    productsApi(app)
}