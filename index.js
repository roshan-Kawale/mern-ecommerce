require('dotenv').config()
const express = require('express')
const server = express()
const mongoose = require('mongoose')
const productRouter = require('./routes/Products')
const brandRouter = require('./routes/Brands')
const categoryRouter = require('./routes/Categories')
// const cors = require('cors')

// server.use(cors({
//     exposedHeaders : ['X-Total_Count']
// }))
server.use(express.json())
server.use('/products', productRouter.router)
server.use('/brands', brandRouter.router)
server.use('/categories', categoryRouter.router)

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