import { ProductCategory } from '@constants'

export const ProductsAPIEndpoints = {
  FETCH_ALL: () => `/api/products`,
  FETCH_BY_CATEGORY: (category: ProductCategory) =>
    `/api/products/category/${category}`,
  FETCH_ONE_BY_ID: (id: string) => `/api/products/id/${id}`,
} as const

export type ProductsAPIEndpoints =
  (typeof ProductsAPIEndpoints)[keyof typeof ProductsAPIEndpoints]
