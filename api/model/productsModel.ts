import mongoose from 'mongoose'

/**
 * Products sold on the vending machine
 */
const productSchema = new mongoose.Schema({
  name: String,
  descriptions: String,
  imageSrc: String,
  price: Number,
  stock: Number,
})

mongoose.model('Product', productSchema)
