import { ProductCategory } from '@constants'
import { apiServerUrl } from './serviceConfig'

export const ProductsAPIRoutes = {
  FETCH_ALL: () => `${apiServerUrl}/api/products`,
  FETCH_BY_CATEGORY: (category: ProductCategory) =>
    `${apiServerUrl}/api/products/category/${category}`,
} as const

export type ProductsAPIRoutes =
  (typeof ProductsAPIRoutes)[keyof typeof ProductsAPIRoutes]
