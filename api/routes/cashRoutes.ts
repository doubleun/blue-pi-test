import express from 'express'
import {
  addCashOptions,
  getCashOptions,
  updateCashOptions,
} from '../controllers/cashControllers'
const router = express.Router()

router
  .route('/')
  .get(getCashOptions)
  .post(addCashOptions)
  .put(updateCashOptions)

export default router
