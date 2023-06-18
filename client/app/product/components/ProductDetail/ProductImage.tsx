import React from 'react'
import Image from 'next/image'
import { IProduct } from '@/services'

function ProductImage({ product }: { product: IProduct }) {
  return (
    <section
      className="m-auto flex flex-col gap-4 items-center text-center prose"
      data-test-id={`product-image-container${product.id}`}
    >
      <Image
        src={product.imageSrc}
        alt={product.name}
        width={250}
        height={250}
        className="rounded-full"
        data-test-id={`product-image-${product.id}`}
      />
      <h1 data-test-id={`product-name-${product.id}`}>{product.name}</h1>
      <p data-test-id={`product-desc-${product.id}`}>{product.descriptions}</p>
    </section>
  )
}

export default ProductImage
