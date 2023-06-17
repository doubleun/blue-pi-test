import { ProductDetail } from '@product/components'
import React from 'react'

// TODO: can check if the id is actually from ProductCategory if needed
function ProductPage({ params }: { params: { id: string } }) {
  return (
    <main
      className="h-full bg-teal-200"
      data-test-id={`product-detail-page-container-${params.id}`}
    >
      <ProductDetail id={params.id} />
    </main>
  )
}

export default ProductPage
