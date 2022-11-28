const {Router} = require('express')
const UsersController = require('../users/controller/usersController')

module.exports = app => {
    let router = Router()
    app.use('/api/users', router)

    router.get('/all', UsersController.getAll)
}