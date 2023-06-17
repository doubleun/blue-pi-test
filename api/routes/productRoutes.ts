import express from 'express'
import {
  addProducts,
  getProduct,
  getProducts,
  getProductsByCategory,
  updateProduct,
} from '../controllers/productControllers'
const router = express.Router()

router.route('/').get(getProducts).post(addProducts)

router.route('/category/:category').get(getProductsByCategory)

router.route('/productId/:id').get(getProduct).put(updateProduct)

export default router
