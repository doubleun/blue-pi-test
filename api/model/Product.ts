import mongoose from 'mongoose'

export interface IProduct {
  id: number
  name: string
  descriptions: string
  category: string
  imageSrc: string
  price: number
  stock: number
  new?: boolean
  highlights?: string[]
}

/**
 * Products sold on the vending machine
 * @property category - for categorize in the catalog menu
 */
const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  descriptions: String,
  category: String,
  imageSrc: String,
  price: Number,
  stock: Number,
  new: Boolean,
  highlights: [String],
})

export default mongoose.model('Product', productSchema)
