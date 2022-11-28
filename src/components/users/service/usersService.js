

class UsersService {
    getAll = async () => {
        return [
            {
                username: 'user123',
                email: 'user123@gmail.com'
            }
        ]
    }
}

module.exports = new UsersService()