const express = require('express')
const { config } = require('./config')
const serverRoutes = require('./routes')
require('./DB/mongo')
const { graphqlHTTP } = require('express-graphql');
const { schema, root } = require('./components/products/grapql/productsGraphql')

class App {
    constructor() {
        this.port = config.port
        this.app = express()
        this.settings()
        this.middlewares()
        this.routes()
        this.app.listen(config.port, () => {
            console.log('server on: http://localhost:' + config.port)
        })
    }

    settings() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }
    routes = () => {
        serverRoutes(this.app)
    }
    middlewares = () => {
        this.app.use('/graphql', graphqlHTTP({
            schema: schema,
            rootValue: root,
            graphiql: true,
        }))
    }
}

module.exports = new App()