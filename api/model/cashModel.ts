import mongoose from 'mongoose'

/**
 * Physical cash options schema
 * @property type - Enum: Coin, Banknote
 */
const cashSchema = new mongoose.Schema({
  type: String,
  value: Number,
  amount: Number,
})

mongoose.model('Cash', cashSchema)
