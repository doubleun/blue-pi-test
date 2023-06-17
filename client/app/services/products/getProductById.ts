import { ProductsAPIRoutes } from '@services/config'
import { IProduct } from './products'
import { ProductCategory } from '@constants'

const getProductById = async (id?: string): Promise<IProduct | undefined> => {
  try {
    let product
    if (id) {
      product = await fetch(ProductsAPIRoutes.FETCH_ONE_BY_ID(id))
    } else {
      throw new Error('getProductById - Product id is undefined')
    }
    return await product.json()
  } catch (err) {
    console.error(err)
    return
  }
}

export default getProductById
