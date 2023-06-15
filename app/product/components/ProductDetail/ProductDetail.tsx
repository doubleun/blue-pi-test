// 'use client'

import React from 'react'
import ProductImage from './ProductImage'
import getProducts from '@services/products/getProducts'
import Image from 'next/image'
import { calculateCheckoutPrice } from './ProductDetail.helper'
// import useSWR from 'swr'

async function ProductDetail({ id }: { id: string }) {
  // const data = useSWR('/products', getProducts)
  // FIXME: remove this mock
  const mockProduct = (await getProducts()).find((itm) => itm.id === id)
  // TODO:maybe throw an error
  if (!mockProduct) {
    console.error('Product not found')
    return
  }
  return (
    <section className="container h-full relative m-auto px-2 md:px-0 py-6">
      {/* TODO: can add product navbar */}
      <ProductImage product={mockProduct} />

      {/* product body */}
      <div className="w-full mt-8 px-6 py-4 rounded-lg bg-white">
        <div className="prose">
          <h3>Additional</h3>
        </div>

        <div className="flex items-center gap-4 my-2">
          <figure className="bg-zinc-200 p-1 rounded-md">
            <Image
              src="/coffee-beans.png"
              alt="coffee bean"
              width={30}
              height={30}
            />
          </figure>
          <div className="prose flex-1">
            <h4>Extra shot (+15)</h4>
          </div>
          <input type="checkbox" className="checkbox checkbox-lg" />
        </div>
      </div>

      {/* actions */}
      <button className="btn bg-gray-100 border-none absolute bottom-6 left-0 mx-2 md:mx-0">
        <div className="prose flex">
          <h4 className="text-amber-800">Go Back</h4>
        </div>
      </button>
      <button className="btn btn-primary absolute bottom-6 right-0 mx-2 md:mx-0">
        <div className="prose flex">
          <h4 className="border-r-2 border-slate-900 pr-4">Buy now</h4>
          {/* TODO: remove cal addons mock */}
          <h4 className="pl-4">{`${calculateCheckoutPrice(mockProduct, [
            15,
          ])} Baht`}</h4>
        </div>
      </button>
    </section>
  )
}

export default ProductDetail
