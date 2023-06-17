import getProducts from '@services/products/getProducts'
import React from 'react'
import ProductCard from './ProductCard'
import Link from 'next/link'
import { ProductCategory } from '@constants'

// TOOD: dynamic product display based on the incoming `id`
async function ProductCardCatalog({ category }: { category: ProductCategory }) {
  console.log('category: ', category)
  const products = await getProducts(category)

  if (!products) {
    // TOOD: handle error page ?
    return
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row-dense gap-4 lg:gap-8 lg:mx-8">
      {products.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <ProductCard key={product.id} product={product} />
        </Link>
      ))}
    </section>
  )
}

export default ProductCardCatalog
