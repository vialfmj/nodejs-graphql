## Bienvenidos al repositorio de mi proyecto node-graphql

---

### Este proyecto consiste en una API que puede funcionar como APIRest o por medio de graphql

---

### Como funciona:

### "npm start" para inciar la aplicacion

### "npm run dev" para inciar la aplicacion en modo desarrollo con nodemon

---

## La apiRest esta en la ruta /api/products y tiene los siguientes endpoints:

### GET('/all') trae todos los productos

### POST('/') para agregar un nuevo producto

### GET('/:id') traer un solo producto por su ID

### PUT('/:id') modifica el producto indicado por el id en base a el objeto enviado por el body de la request

### DELETE('/:id') elimina el producto que indica el id

---

## La api graphql esta en la ruta /graphql y puede hacer lo siguiente:

### getAllProducts() : Array<Product>

### getProductById(id) : Product

### addProduct(Product) : ID

### modifyProduct(id, productModified) : Product

### deleteProduct(id) : Message
