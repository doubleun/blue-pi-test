import express, { Express } from 'express'
import dotenv from 'dotenv'
import productRoutes from '../routes/productRoutes'
import cashRoutes from '../routes/cashRoutes'
import connectDB from '../config/db'
import cors from 'cors'

dotenv.config()
const port = process.env.PORT || 3003

connectDB()

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/cashes', cashRoutes)
app.use('/api/products', productRoutes)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
