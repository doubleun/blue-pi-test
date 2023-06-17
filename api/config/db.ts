import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async () => {
  try {
    // const env = process.env.NODE_ENV || 'development'
    const username = process.env.USERNAME || 'root'
    const password = process.env.PASSWORD || 'password'
    const mongooseUri = process.env.MONGO_URI
    if (!mongooseUri) throw new Error('Mongoose URI is undefined')

    const conn = await mongoose.connect(mongooseUri, {
      auth: { username, password },
      authSource: 'admin',
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB
