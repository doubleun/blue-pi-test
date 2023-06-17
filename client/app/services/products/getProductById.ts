import { ProductsAPIEndpoints, apiBaseUrl, request } from '@services/config'
import { IProduct } from './products'
import { ProductCategory } from '@constants'

const getProductById = async (id?: string): Promise<IProduct | undefined> => {
  try {
    let product
    if (id) {
      console.log('cur env: ', process.env.NODE_ENV)
      console.log('apiBaseUrl: ', apiBaseUrl)
      product = await request.get(ProductsAPIEndpoints.FETCH_ONE_BY_ID(id))
    } else {
      throw new Error('getProductById - Product id is undefined')
    }
    console.log('product.data: ', product.data)
    return product.data
  } catch (err) {
    console.error(err)
    return
  }
}

export default getProductById
