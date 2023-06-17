import mongoose from 'mongoose'

export interface ICash {
  id: number
  type: string
  value: number
  amount: number
}

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
