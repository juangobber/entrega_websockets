const express = require('express')
const handlebars = require('express-handlebars')
const viewsRouter = require('./routes/views.router') 
const { Server } = require('socket.io')

const productManagment = require('../ProductManager')
const productos = new productManagment('./listadoProductos.json')

const PORT = 8080
const app = express()
const httpServer = app.listen(PORT, ()=>{
    console.log("Server is up and running on port =>", PORT)
})
const io = new Server(httpServer);

io.on('connection', (socket)=>{
    console.log("cliente conectado");
    console.log(socket.id)

    socket.on('message1', async (data) => {
        await productos.addProduct(data)
        const updatedData = await produdctos.getProducts()
        io.emit('message-server', updatedData)
    })
})



//Inicializo el motor
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname +'/public'))

app.use(viewsRouter)


