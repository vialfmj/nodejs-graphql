const express = require('express')
const { config } = require('./config')
const serverRoutes = require('./routes')
require('./DB/mongo')
const { graphqlHTTP } = require('express-graphql');
const { schema, root } = require('./components/products/grapql/productsGraphql')

/**
 * Very nice! Y muy piola usando rest y graphql a la vez!
 * Lo unico que tengo para recomendarte, es que si buen tu distribucion de clases esta bien distribuida,
 * usualmente en JS no trabajamos mucho con clases, porque eso es mas que nada para poder mantener estados.
 * Por ejemplo, en tu caso modificaría este archivo para que en vez de exportar una clase, simplemente instancie y configure
 * todo lo requerido para tu app de express
 */
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