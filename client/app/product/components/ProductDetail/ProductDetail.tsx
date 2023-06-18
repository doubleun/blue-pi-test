'use client'

import React, { useEffect, useState } from 'react'
import ProductImage from './ProductImage'
import Image from 'next/image'
import { calculateAddonPrice } from './ProductDetail.helper'
import useSWR from 'swr'
import { ProductsAPIEndpoints, getProductById } from '@/services'
import { useRouter } from 'next/navigation'
import ProductModal from '../ProductModal/ProductModal'

function ProductDetail({ id }: { id: string }) {
  const {
    isLoading,
    data: product,
    mutate: productMutate,
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
      setCheckoutPrice(
        calculateAddonPrice(product.price, 'add', Object.values(additional))
      )
    }
  }, [additional, product])

  // NOTE: Could make a better loading component
  if (isLoading || !product) {
    return <h2>Loading . . .</h2>
  }

  return (
    <section
      className="container h-full relative m-auto px-2 md:px-0 py-6"
      data-test-id={`product-detail-container-${id}`}
    >
      <ProductModal
        open={openPopup}
        setOpenPopup={setOpenPopup}
        isLoading={loadingPopup}
        setLoadingPopup={setLoadingPopup}
        checkoutPrice={checkoutPrice}
        product={product}
        productMutate={productMutate}
      />

      <ProductImage product={product} />

      {/* product body */}
      <div
        className="w-full mt-8 px-6 py-2 rounded-lg bg-white"
        data-test-id={`product-detail-body-${id}`}
      >
        <div className="prose">
          <h3>Additional</h3>
        </div>

        <div
          className="flex items-center gap-4 my-2"
          data-test-id={`product-detail-add-coffee-container`}
        >
          <figure
            className="bg-zinc-200 p-1 rounded-md"
            data-test-id={`product-detail-add-coffee-image-container`}
          >
            <Image
              src="/coffee-beans.png"
              alt="coffee bean"
              width={30}
              height={30}
              data-test-id={`product-detail-add-coffee-image`}
            />
          </figure>
          <div
            className="flex-1"
            data-test-id={`product-detail-add-coffee-text`}
          >
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
            data-test-id={`product-detail-add-coffee-checkbox`}
          />
        </div>

        <div
          className="w-full flex items-center gap-4 my-2"
          data-test-id={`product-detail-add-bubble-container`}
        >
          <figure
            className="bg-zinc-200 p-1 rounded-md"
            data-test-id={`product-detail-add-bubble-image-container`}
          >
            <Image
              src="/bubble-tea.png"
              alt="bubble tea"
              width={30}
              height={30}
            />
          </figure>
          <div
            className="flex-1"
            data-test-id={`product-detail-add-bubble-text`}
          >
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
            data-test-id={`product-detail-add-bubble-checkbox`}
          />
        </div>
      </div>

      {/* actions */}
      <button
        className="btn bg-gray-100 border-none absolute bottom-6 left-0 mx-2 md:mx-0"
        onClick={() => router.push(`/catalog/${product.category}`)}
        data-test-id={`product-detail-go-back-btn`}
      >
        <div className="prose flex">
          <h4 className="text-amber-800">Go Back</h4>
        </div>
      </button>

      <button
        className="btn btn-primary absolute bottom-6 right-0 mx-2 md:mx-0"
        onClick={() => {
          setOpenPopup(true)
        }}
        data-test-id={`product-detail-buy-btn`}
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
