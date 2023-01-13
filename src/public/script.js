//cliente
const socket = io();


const botonAgregar = document.getElementById('botonAgregar');
const botonEliminar = document.getElementById('botonEliminar')
const listaProductosRealTime = document.getElementById('listaProductosRealTime')

//IPUTS
const id = document.getElementById('inputProductId');
const title = document.getElementById('title')
const description = document.getElementById('description')
const price = document.getElementById('price')
const code = document.getElementById('code')
const stock = document.getElementById('stock')
const status = document.getElementById('status')
const category = document.getElementById('category')

botonAgregar.addEventListener('click', (event)=>{
    console.log("click boton agregar")
    socket.emit('message1', {title: title.value, description: description.value, price: price.value, code: code.value, stock: stock.value, status: status.value, category: category.value})

})

botonEliminar.addEventListener('click', (event)=>{
    console.log("click boton eliminar")
})

socket.on('message-server', async (data) => {
 console.log(data)
    
})