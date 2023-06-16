import { ProductDetail } from '@product/components'
import React from 'react'

// TODO: can check if the id is actually from CatalogOption if needed
function ProductPage({ params }: { params: { id: string } }) {
  return (
    <main className="h-full bg-teal-200">
      <ProductDetail id={params.id} />
    </main>
  )
}

export default ProductPage
