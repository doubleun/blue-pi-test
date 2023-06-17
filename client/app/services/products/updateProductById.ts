import { ProductsAPIEndpoints, request } from '@services/config'
import { IProduct } from './products'

const updateProductById = async (
  id: string,
  updatedProduct: IProduct
): Promise<IProduct | undefined> => {
  try {
    let res
    if (id) {
      res = await request.put(
        ProductsAPIEndpoints.UPDATE_ONE_BY_ID(id),
        updatedProduct
      )
    } else {
      throw new Error('updateProductById - Product id is undefined')
    }
    return res.data
  } catch (err) {
    console.error(err)
    return
  }
}

export default updateProductById
