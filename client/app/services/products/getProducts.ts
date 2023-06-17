import { ProductsAPIRoutes } from '@services/config'
import { IProduct } from './products'
import { ProductCategory } from '@constants'

const getProducts = async (
  category?: ProductCategory
): Promise<IProduct[] | undefined> => {
  try {
    let products
    if (category) {
      // fetch by category case
      products = await fetch(ProductsAPIRoutes.FETCH_BY_CATEGORY(category))
    } else {
      // fetch all case
      products = await fetch(ProductsAPIRoutes.FETCH_ALL())
    }
    return await products.json()
  } catch (err) {
    console.error(err)
    return
  }
}

export default getProducts
