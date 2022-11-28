const UsersService = require('../service/usersService')

class UsersController {
    getAll = async (req, res) => {
        let response = await UsersService.getAll()
        console.log(response)
        res.json({response})
    }
}

module.exports = new UsersController()