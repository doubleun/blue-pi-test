import { Request, Response } from 'express'

/**
 * GET - all products
 * @description Get all products from DB, all products stock
 */
export const getProducts = (req: Request, res: Response) => {
  // res.send('Get all products')
  res.json()
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
