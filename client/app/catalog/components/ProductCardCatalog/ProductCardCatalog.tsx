'use client'

import getProducts from '@services/products/getProducts'
import React from 'react'
import ProductCard from './ProductCard'
import Link from 'next/link'
import { ProductCategory } from '@constants'
import { ProductsAPIEndpoints } from '@services'
import useSWR from 'swr'

// TOOD: dynamic product display based on the incoming `id`
function ProductCardCatalog({ category }: { category: ProductCategory }) {
  const {
    isLoading,
    error,
    data: products,
  } = useSWR(
    [ProductsAPIEndpoints.FETCH_BY_CATEGORY(category), category],
    ([_url, category]) => {
      return getProducts(category)
    }
  )

  if (isLoading) {
    return <h1>Loading . .. </h1>
  }

  if (!products || error) {
    // TODO: handle error page ?
    return
  }
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row-dense gap-4 lg:gap-8 lg:mx-8">
      {products.map((product) => (
        <Link
          href={product.stock < 1 ? '' : `/product/${product.id}`}
          key={product.id}
          className="w-fit mx-auto"
        >
          <ProductCard key={product.id} product={product} />
        </Link>
      ))}
    </section>
  )
}

export default ProductCardCatalog
