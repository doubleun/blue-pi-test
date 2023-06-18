import React from 'react'
import Image from 'next/image'
import { IProduct } from '@/services'
import { cn } from '@/utilities'

function ProductCard({ product }: { product: IProduct }) {
  if (!product) return
  return (
    // shadow-xl ??
    <section
      className={cn(
        'card w-64 xl:w-full bg-base-100 group hover:bg-transparent/5 mx-auto',
        product.stock < 1 && ProductCardTwClass.cardDisable
      )}
      data-test-id={`product-card-container-${product.id}`}
    >
      <figure
        className="rounded-2xl"
        data-test-id={`product-card-image-container-${product.id}`}
      >
        <Image
          src={product.imageSrc}
          alt={product.name}
          width={600}
          height={600}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          data-test-id={`product-card-image-${product.id}`}
        />
      </figure>

      {/* card body */}
      <div
        className="card-body bg-transparent"
        data-test-id={`product-card-body-${product.id}`}
      >
        <h2
          className="card-title"
          data-test-id={`product-card-title-${product.id}`}
        >
          {product.name}
          {product?.new ? (
            <div className="badge badge-secondary">NEW</div>
          ) : null}
        </h2>
        <p data-test-id={`product-card-desc-${product.id}`}>
          {product.descriptions}
        </p>

        {/* card badges */}
        <div
          className="card-actions justify-end"
          data-test-id={`product-card-badges-container-${product.id}`}
        >
          {product?.highlights?.map((highlight) => (
            <div
              className="badge badge-outline"
              key={highlight}
              data-test-id={`product-card-badge-${highlight}`}
            >
              {highlight}
            </div>
          ))}
        </div>

        {/* card footer */}
        <div
          className="card-footer"
          data-test-id={`product-card-footer-container-${product.id}`}
        >
          <p data-test-id={`product-card-footer-${product.id}`}>
            {product.price} Baht
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProductCard

const ProductCardTwClass = {
  cardDisable: `cursor-not-allowed bg-slate-800/50 hover:bg-slate-800/50`,
}
