require('dotenv').config()
const express = require('express')
const server = express()
const mongoose = require('mongoose')
const cors = require('cors')

const productRouter = require('./routes/Products')
const brandRouter = require('./routes/Brands')
const categoryRouter = require('./routes/Categories')
const usersRouter = require('./routes/Users');
const authRouter = require('./routes/Auth');
const cartRouter = require('./routes/Carts');
const ordersRouter = require('./routes/Orders');


//middlewares

server.use(cors({
    exposedHeaders : ['X-Total_Count']
}))
server.use(express.json())
server.use('/products', productRouter.router)
server.use('/brands', brandRouter.router)
server.use('/categories', categoryRouter.router)
server.use('/users', usersRouter.router)
server.use('/auth', authRouter.router)
server.use('/cart', cartRouter.router)
server.use('/orders', ordersRouter.router)

main().catch(err=>console.error(err))

async function main() {
    await mongoose.connect(process.env.MONGO_URI , { useNewUrlParser: true })
    console.log('DATABASE CONNECTED')
}

server.get('/', (req,res)=> {
    res.json({status: 'success'})
})

server.listen(8080 , ()=>{
    console.log("server started")
})