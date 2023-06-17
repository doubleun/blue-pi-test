import { Request, Response } from 'express'
import Product from '../model/Product'

/**
 * GET - all products
 * @description Get all products from DB
 */
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Internal server error' })
  }
}

/**
 * POST - add products
 * NOTE: May not needed
 * @description Add all products, should only run once at the app init.
 */
export const addProducts = (req: Request, res: Response) => {
  res.send('Add products')
}

/**
 * GET - products by category
 * @description Get products by category
 */
export const getProductsByCategory = async (req: Request, res: Response) => {
  const { category } = req.params
  try {
    const products = await Product.find({ category })
    res.json(products)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Internal server error' })
  }
}

/**
 * GET - product
 * @description Get one product, get product stock
 */
export const getProduct = (req: Request, res: Response) => {
  res.send('Get a product')
}

/**
 * PUT - product
 * @description Update a product in DB, update product stock
 */
export const updateProduct = (req: Request, res: Response) => {
  res.send('Update product')
}
