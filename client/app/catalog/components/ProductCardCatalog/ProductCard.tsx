import React from 'react'
import Image from 'next/image'
import { IProduct } from '@services'

function ProductCard({ product }: { product: IProduct }) {
  if (!product) return
  return (
    // shadow-xl ??
    <section className="card w-64 xl:w-full bg-base-100 cursor-pointer group hover:bg-transparent/5 mx-auto">
      <figure className="rounded-2xl">
        <Image
          src={product.imageSrc}
          alt={product.name}
          width={600}
          height={600}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </figure>

      {/* card body */}
      <div className="card-body bg-transparent">
        <h2 className="card-title">
          {product.name}
          {product?.new ? (
            <div className="badge badge-secondary">NEW</div>
          ) : null}
        </h2>
        <p>{product.descriptions}</p>

        {/* card badges */}
        <div className="card-actions justify-end">
          {product?.highlights?.map((highlight) => (
            <div className="badge badge-outline" key={highlight}>
              {highlight}
            </div>
          ))}
        </div>

        {/* card footer */}
        <div className="card-footer">
          <p>{product.price} Baht</p>
        </div>
      </div>
    </section>
  )
}

export default ProductCard
