import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async () => {
  try {
    const env = process.env.NODE_ENV || 'development'
    const mongooseUri =
      env === 'production' ? process.env.MONGO_URI_PROD : process.env.MONGO_URI
    if (!mongooseUri) throw new Error('Mongoose URI is undefined')

    const conn = await mongoose.connect(mongooseUri)

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB
