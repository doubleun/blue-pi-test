import mongoose from 'mongoose'

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
