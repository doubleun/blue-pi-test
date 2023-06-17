'use client'

import { CashesAPIEndpoints } from '@services'
import { ICash, getCashes } from '@services/cashes'
import clsx from 'clsx'
import React, { Dispatch, useCallback, useEffect, useState } from 'react'
import useSWR from 'swr'
import CashOption from '../CashOption/CashOption'
import { calculateAddonPrice } from '../ProductDetail/ProductDetail.helper'

interface PopupModalProps {
  open: boolean
  setOpenPopup: Dispatch<React.SetStateAction<boolean>>
  isLoading: boolean
  setLoadingPopup: Dispatch<React.SetStateAction<boolean>>
  checkoutPrice: number
}

function ProductModal({
  open,
  setOpenPopup,
  isLoading,
  setLoadingPopup,
  checkoutPrice,
}: PopupModalProps) {
  const {
    isLoading: isFetching,
    error,
    data: cashes,
  } = useSWR(CashesAPIEndpoints.FETCH_ALL, (_url) => {
    return getCashes()
  })

  const [deductedCheckoutPrice, setDeductedCheckoutPrice] =
    useState<number>(checkoutPrice)
  const [paymentStack, setPaymentStack] = useState<ICash[]>([])

  useEffect(() => {
    setDeductedCheckoutPrice(checkoutPrice)
    setPaymentStack([])
  }, [checkoutPrice])

  const payCashCallback = useCallback(
    (cash: ICash) => () => {
      // push selected cash method into array
      setPaymentStack((prev) => [...prev, cash])

      // update checkout price after deducted
      setDeductedCheckoutPrice((prev) => {
        const calPrice = calculateAddonPrice(prev, 'deduct', [cash.value])
        if (calPrice <= 0) {
          // clean up callback -> display loading -> calculate change -> fired API to update cash stock and product stock -> clear payment stack -> display success and close modal
        }
        return calPrice
      })
    },
    []
  )

  if (isLoading || isFetching || !cashes) {
    return <p>loading. . .</p>
  }

  console.log('paymentStack: ', paymentStack)

  const renderLoadingState = () => {
    return (
      <>
        <h3 className="font-bold text-lg">Select payment</h3>
        <div className="w-full flex justify-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn">Close</button>
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

  return (
    <dialog id="my_modal_1" className={clsx('modal', { 'modal-open': open })}>
      <form method="dialog" className="modal-box">
        {renderPayState()}
      </form>
    </dialog>
  )
}

export default ProductModal
