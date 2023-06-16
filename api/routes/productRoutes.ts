import express from 'express'
import {
  addProducts,
  getProduct,
  getProducts,
  updateProduct,
} from '../controllers/productControllers'
const router = express.Router()

router.route('/').get(getProducts).post(addProducts)

router.route('/:id').get(getProduct).put(updateProduct)

export default router
