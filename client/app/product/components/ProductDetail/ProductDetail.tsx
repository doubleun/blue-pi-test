'use client'

import React, { useEffect, useState } from 'react'
import ProductImage from './ProductImage'
import Image from 'next/image'
import { calculateAddonPrice } from './ProductDetail.helper'
import useSWR from 'swr'
import { ProductsAPIEndpoints, getProductById } from '@services'
import { useRouter } from 'next/navigation'
import ProductModal from '../ProductModal/ProductModal'

function ProductDetail({ id }: { id: string }) {
  // TOOD: make new hook for this
  const {
    isLoading,
    error,
    data: product,
  } = useSWR([ProductsAPIEndpoints.FETCH_ONE_BY_ID(id), id], ([_url, id]) => {
    return getProductById(id)
  })

  const router = useRouter()
  const [openPopup, setOpenPopup] = useState<boolean>(false)
  const [loadingPopup, setLoadingPopup] = useState<boolean>(false)
  const [checkoutPrice, setCheckoutPrice] = useState(product?.price ?? 1)
  const [additional, setAdditional] = useState<{
    coffeeShot: number
    bubble: number
  }>({ coffeeShot: 0, bubble: 0 })

  useEffect(() => {
    if (product) {
      // consider using `useTransition` to potentially reduce the re-render
      // handle checkout ad
      setCheckoutPrice(
        calculateAddonPrice(product.price, 'add', Object.values(additional))
      )
    }
  }, [additional, product])

  useEffect(() => {
    console.log('render')
  })

  // TODO: make a proper loading component
  if (isLoading) {
    return <h2>Loading . . .</h2>
  }

  // TODO:maybe throw an error
  if (!product || error) {
    console.error('An error has occurred while trying to fetch the product')
    return
  }
  return (
    <section className="container h-full relative m-auto px-2 md:px-0 py-6">
      <ProductModal
        open={openPopup}
        setOpenPopup={setOpenPopup}
        isLoading={loadingPopup}
        setLoadingPopup={setLoadingPopup}
        checkoutPrice={checkoutPrice}
      />

      {/* TODO: can add product navbar ? */}
      <ProductImage product={product} />

      {/* product body */}
      <div className="w-full mt-8 px-6 py-2 rounded-lg bg-white">
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
          <div className="flex-1">
            <h4 className="font-semibold">Extra shot (+15)</h4>
          </div>
          <input
            type="checkbox"
            className="checkbox checkbox-lg"
            onChange={(e) =>
              setAdditional((prev) => ({
                ...prev,
                ['coffeeShot']: e.target.checked ? 15 : 0,
              }))
            }
          />
        </div>

        <div className="w-full flex items-center gap-4 my-2">
          <figure className="bg-zinc-200 p-1 rounded-md">
            <Image
              src="/bubble-tea.png"
              alt="bubble tea"
              width={30}
              height={30}
            />
          </figure>
          <div className="flex-1">
            <h4 className="font-semibold">Tapioca Pearls (+5)</h4>
          </div>
          <input
            type="checkbox"
            className="checkbox checkbox-lg"
            onChange={(e) =>
              setAdditional((prev) => ({
                ...prev,
                ['bubble']: e.target.checked ? 5 : 0,
              }))
            }
          />
        </div>
      </div>

      {/* actions */}
      <button
        className="btn bg-gray-100 border-none absolute bottom-6 left-0 mx-2 md:mx-0"
        onClick={() => router.push(`/catalog/${product.category}`)}
      >
        <div className="prose flex">
          <h4 className="text-amber-800">Go Back</h4>
        </div>
      </button>

      <button
        className="btn btn-primary absolute bottom-6 right-0 mx-2 md:mx-0"
        onClick={() => {
          // handle buy logic
          setOpenPopup(true)
          // setLoadingPopup(true)
        }}
      >
        <div className="prose flex">
          <h4 className="border-r-2 border-slate-900 pr-4">Buy now</h4>
          <h4 className="pl-4" id="checkoutPrice">{`${checkoutPrice} Baht`}</h4>
        </div>
      </button>
    </section>
  )
}

export default ProductDetail
