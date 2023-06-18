import { ProductsAPIEndpoints, request } from '@/services/config'
import { IProduct } from './products'

const getProductById = async (id?: string): Promise<IProduct | undefined> => {
  try {
    let product
    if (id) {
      product = await request.get(ProductsAPIEndpoints.FETCH_ONE_BY_ID(id))
    } else {
      throw new Error('getProductById - Product id is undefined')
    }
    return product.data
  } catch (err) {
    console.error(err)
    return
  }
}

export default getProductById
