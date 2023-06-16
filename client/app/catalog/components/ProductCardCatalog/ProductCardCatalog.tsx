import getProducts from '@services/products/getProducts'
import React from 'react'
import ProductCard from './ProductCard'
import Link from 'next/link'

// TOOD: dynamic product display based on the incoming `id`
async function ProductCardCatalog() {
  const products = await getProducts()
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
