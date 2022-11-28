const mongoose =require("mongoose")
const {config} = require('../config')


let mongoURI = ''
if( config.ENV === "DEVELOPMENT")
    mongoURI = `mongodb://localhost:27017/productsgraphql`
let connection
(async ()=>{
    try {
        connection = await mongoose.connect(mongoURI /* {useNewUrlParser:true, useUnifiedTopology:true } */)
    } catch (error) {
        console.log(error)
    }

})();

module.exports =  connection