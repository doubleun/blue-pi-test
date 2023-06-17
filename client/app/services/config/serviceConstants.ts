import { ProductCategory } from '@constants'
import { apiServerUrl } from './serviceConfig'

export const ProductsAPIRoutes = {
  FETCH_ALL: () => `${apiServerUrl}/api/products`,
  FETCH_BY_CATEGORY: (category: ProductCategory) =>
    `${apiServerUrl}/api/products/category/${category}`,
  FETCH_ONE_BY_ID: (id: string) => `${apiServerUrl}/api/products/id/${id}`,
} as const

export type ProductsAPIRoutes =
  (typeof ProductsAPIRoutes)[keyof typeof ProductsAPIRoutes]
