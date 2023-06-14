import getProducts from '@services/products/getProducts'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

async function Catalog() {
  const products = await getProducts()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Catalog
