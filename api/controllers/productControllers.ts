import { Request, Response } from 'express'
import Product, { IProduct } from '../model/Product'

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
 * GET - product by id
 * @description Get one product by id
 */
export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const product = await Product.findOne({ id })
    res.json(product)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Internal server error' })
  }
}

/**
 * PUT - product
 * @description Update a product by id
 */
export const updateProductById = async (req: Request, res: Response) => {
  const { id } = req.params
  const product: IProduct = req.body

  try {
    const _updated = await Product.updateOne({ id }, product)
    console.log(product)
    res.json(product)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Internal server error' })
  }
}
