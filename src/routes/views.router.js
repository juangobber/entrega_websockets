const {Router} = require('express');
const router = Router()


const productManagment = require('../../ProductManager')
const productos = new productManagment('./listadoProductos.json')

router.get('/', async (req, res) => {
   try{
    const data = await productos.getProducts()
    res.render('home', {data})} 
    catch{
        console.log("error ocurrió aqui")
    }
})

router.get('/realtimeproducts', async (req, res) => {
  const saludo = "holas"
    res.render('realTimeProducts',{saludo})

 })


module.exports = router
