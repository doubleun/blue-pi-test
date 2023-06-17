import express from 'express'
import {
  addProducts,
  getProductById,
  getProducts,
  getProductsByCategory,
  updateProductById,
} from '../controllers/productControllers'
const router = express.Router()

router.route('/').get(getProducts).post(addProducts)

router.route('/category/:category').get(getProductsByCategory)

router.route('/id/:id').get(getProductById).put(updateProductById)

export default router
