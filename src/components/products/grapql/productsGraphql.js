
const { buildSchema } = require('graphql');
const ProductsDto = require('../dto/productsDto')

// Esto lo podes separar a un archivo .schema para no tenerlo todo junto ;)
let schema = buildSchema(`
    type Product {
        name: String!
        price: Int!
        description: String
        id: ID!
    }
    type Message {
        content: String
    }
    type Query {
        getAllProducts : [Product],
        getProductById (id: ID!) : Product
        
    }
    input ProductInput {
        name: String!
        price: Int!
        description: String
      }
    input ProductModified {
        name: String
        price: Int
        description: String
    }
    type Mutation {
        addProduct (product: ProductInput!) : ID
        modifyProduct (
            id: ID! , 
            productModified : ProductModified ) 
            : Product
        deleteProduct (id: ID!) : Message
    }
`)
let root = {
    getAllProducts : async ()=> {
        return await ProductsDto.getAll()
    } ,
    getProductById : async ({id}) => {
        return ProductsDto.getById(id)
    },
    addProduct : async ({product}) => {
        return await ProductsDto.addProduct(product)
    },
    modifyProduct : async ({id, productModified}) => {
        return await ProductsDto.modifyProduct(id , productModified)
    },
    deleteProduct : async ({id}) => {
        let message = {
            content: await ProductsDto.deleteProduct(id)
        }
        return message
    }
}

module.exports = {
    schema,
    root
}