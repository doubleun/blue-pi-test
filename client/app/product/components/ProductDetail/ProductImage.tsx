import React from 'react'
import Image from 'next/image'

// TODO: use product type from getProducts service
function ProductImage({ product }: any) {
  return (
    <section className="m-auto flex flex-col gap-4 items-center text-center prose">
      <Image
        src={product.src}
        alt={product.name}
        width={250}
        height={250}
        className="rounded-full"
      />
      <h1>{product.name}</h1>
      <p>{product.descriptions}</p>
    </section>
  )
}

export default ProductImage
