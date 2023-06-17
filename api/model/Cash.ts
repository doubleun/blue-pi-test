import mongoose from 'mongoose'

/**
 * Physical cash options schema
 * @property type - Enum: Coin, Banknote
 */
const cashSchema = new mongoose.Schema({
  id: Number,
  type: String,
  value: Number,
  amount: Number,
})

export default mongoose.model('Cash', cashSchema)
