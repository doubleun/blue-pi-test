import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const mongooseUri = process.env.MONGO_URI
    if (!mongooseUri) throw new Error('Mongoose URI is undefined')

    const conn = await mongoose.connect(mongooseUri)

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB
