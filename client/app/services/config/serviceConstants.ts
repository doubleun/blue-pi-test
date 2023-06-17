import { ProductCategory } from '@constants'

export const ProductsAPIEndpoints = {
  FETCH_ALL: () => `/api/products`,
  FETCH_BY_CATEGORY: (category: ProductCategory) =>
    `/api/products/category/${category}`,
  FETCH_ONE_BY_ID: (id: string | number) => `/api/products/id/${id}`,
  UPDATE_ONE_BY_ID: (id: string | number) => `/api/products/id/${id}`,
} as const

export type IProductsAPIEndpoints =
  (typeof ProductsAPIEndpoints)[keyof typeof ProductsAPIEndpoints]

export const CashesAPIEndpoints = {
  FETCH_ALL: () => `/api/cashes`,
  UPDATE_ALL: () => `/api/cashes`,
} as const

export type ICashesAPIEndpoints =
  (typeof ProductsAPIEndpoints)[keyof typeof ProductsAPIEndpoints]
