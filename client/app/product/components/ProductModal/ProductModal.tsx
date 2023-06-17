'use client'

import {
  CashesAPIEndpoints,
  IProduct,
  ProductsAPIEndpoints,
  updateProductById,
} from '@services'
import { ICash, getCashes } from '@services/cashes'
import clsx from 'clsx'
import React, { Dispatch, useCallback, useEffect, useState } from 'react'
import useSWR, { KeyedMutator, mutate } from 'swr'
import CashOption from '../CashOption/CashOption'
import { calculateAddonPrice } from '../ProductDetail/ProductDetail.helper'
import { ChangeStack, calculateChange } from './ProductModal.helper'
import { useRouter } from 'next/navigation'

interface PopupModalProps {
  open: boolean
  setOpenPopup: Dispatch<React.SetStateAction<boolean>>
  isLoading: boolean
  setLoadingPopup: Dispatch<React.SetStateAction<boolean>>
  checkoutPrice: number
  product: IProduct
  productMutate: KeyedMutator<IProduct | undefined>
}

function ProductModal({
  open,
  setOpenPopup,
  isLoading,
  setLoadingPopup,
  checkoutPrice,
  product,
  productMutate,
}: PopupModalProps) {
  const {
    isLoading: isFetching,
    error,
    data: cashes,
    mutate: cashMutate,
  } = useSWR(CashesAPIEndpoints.FETCH_ALL, (_url) => {
    return getCashes()
  })

  const [deductedCheckoutPrice, setDeductedCheckoutPrice] =
    useState<number>(checkoutPrice)
  const [paymentStack, setPaymentStack] = useState<ICash[]>([])
  const [displaySuccess, setDisplaySuccess] = useState<boolean>(false)
  const [changeStack, setChangeStack] = useState<ChangeStack>({})
  const router = useRouter()

  // For updating the UI on re-opening the modal
  useEffect(() => {
    setDeductedCheckoutPrice(checkoutPrice)
    setPaymentStack([])
  }, [checkoutPrice])

  const payCashCallback = useCallback(
    (cash: ICash) => () => {
      // push selected cash method into array
      setPaymentStack((prev) => [...prev, cash])

      // update checkout price after deducted
      setDeductedCheckoutPrice((prev) =>
        calculateAddonPrice(prev, 'deduct', [cash.value])
      )
    },
    []
  )

  // Check if the current deductedCheckoutPrice is lower than or equal to zero. To calculate the change and update cash stock
  useEffect(() => {
    // case need change
    if (deductedCheckoutPrice < 0 && cashes) {
      setLoadingPopup(true)
      const changeStack = calculateChange(
        deductedCheckoutPrice,
        cashes,
        cashMutate
      )

      // update product stock
      productMutate(
        updateProductById(`${product.id}`, {
          ...product,
          stock: product.stock - 1,
        })
      )

      console.log('changeStack: ', changeStack)
      setLoadingPopup(false)

      // TODO: throw error ?
      if (!changeStack) {
        setOpenPopup(false)
        return
      }

      setChangeStack(changeStack)
      setDisplaySuccess(true)
      // display changeStack as UI with an OK button (mutation of cash option stock on the server will run along side this)
      // after user click OK display success with another OK button
      // after close success clear everything and redirect to catalog page
    }

    // case no change needed
    if (deductedCheckoutPrice === 0 && paymentStack.length > 0) {
      // update the product stock
      // and display success with ok button
      // after close success clear everything and redirect to catalog page
    }
    setPaymentStack([])
  }, [deductedCheckoutPrice])

  if (!cashes) {
    return <p>loading. . .</p>
  }

  // console.log('paymentStack: ', paymentStack)

  const renderLoadingState = () => {
    return (
      <>
        <div className="w-full flex flex-col items-center py-10">
          <h3 className="font-bold text-2xl">LOADING...</h3>
          <span className="loading loading-dots loading-lg mt-6"></span>
        </div>
      </>
    )
  }

  const renderPayState = () => {
    return (
      <>
        <h2 className="font-bold text-lg">Insert coins or banknotes</h2>
        {/* render coin section */}
        <div className="w-full flex justify-around mt-4">
          {cashes.map((cash) =>
            cash.type === 'coin' ? (
              <CashOption
                key={cash.id}
                cashOption={cash}
                callback={payCashCallback(cash)}
              />
            ) : null
          )}
        </div>

        {/* render banknote section */}
        <div className="w-full flex flex-wrap gap-x-8 md:gap-x-4 justify-center my-4">
          {cashes.map((cash) =>
            cash.type === 'banknote' ? (
              <CashOption
                key={cash.id}
                cashOption={cash}
                callback={payCashCallback(cash)}
              />
            ) : null
          )}
        </div>

        {/* render checkout price section */}
        <div className="w-full flex justify-center mt-8">
          <h2 className="font-bold text-xl">{deductedCheckoutPrice} Baht</h2>
        </div>

        {/* actions */}
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn"
            onClick={() => {
              setOpenPopup(false)
              setDeductedCheckoutPrice(checkoutPrice)
              setPaymentStack([])
            }}
          >
            Cancel
          </button>
        </div>
      </>
    )
  }

  const renderPaymentOrSuccessState = () => {
    const availableChangeStack = Object.keys(changeStack).length > 0
    return (
      <>
        <div className="w-full flex flex-col items-center py-10">
          <h3 className="font-bold text-2xl">
            {availableChangeStack
              ? 'Please pickup the change'
              : 'Enjoy your drink !'}
          </h3>

          {/* actions */}
          <div className="modal-action justify-center">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-secondary"
              onClick={() => {
                if (availableChangeStack) {
                  // case: there's change stack from calculate change. the confirm will open success and clear the change stack
                  setChangeStack({})
                } else {
                  setOpenPopup(false)
                  setDeductedCheckoutPrice(checkoutPrice)
                  setPaymentStack([])
                  router.push('/catalog/coffee')
                }
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </>
    )
  }

  return (
    <dialog id="my_modal_1" className={clsx('modal', { 'modal-open': open })}>
      <form method="dialog" className="modal-box">
        {isFetching || isLoading
          ? renderLoadingState()
          : displaySuccess
          ? renderPaymentOrSuccessState()
          : renderPayState()}
      </form>
    </dialog>
  )
}

export default ProductModal
